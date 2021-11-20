import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View,TouchableOpacity } from "react-native";
import {
    StripeProvider,
    CardField,
    CardFieldInput,
    useStripe,
  } from '@stripe/stripe-react-native';
  import { LinearGradient } from 'expo-linear-gradient';
  import {globalStyles} from '../global/styles'
  import {MASTER_KEY,STRIPE_KEY} from '@env'
import Parse from "parse/react-native.js";
import {connect} from 'react-redux'
import * as ACTIONS from '../global/store/actions'

const PaymentWindow = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [card, setCard] = useState("");
  const [saving,setSaving] = useState(false)

  const confirmOrder =  async ()=> {
    const condition = card.postalCode && card.brand && card.expiryMonth && card.expiryYear
    let total = 0
    if(condition && props.food.cart.length>0){
      props.food.cart.map(item=>total += item.price)

      const Person = Parse.Object.extend('Person');
      Parse.masterKey = MASTER_KEY
      const query = new Parse.Query(Person);
      setSaving(true)
      const currentPerson = await query.findAll({useMasterKey: true})
      const usernames = currentPerson.filter(i=>i.get("username") === props.food.user.username)

      usernames[0].get("orders").push({
        total,
        items: props.food.cart,
        time: Date.now()
      })
      
      usernames[0].set("orders",usernames[0].get("orders"))
      usernames[0].save()
  
      const newPerson = await query.findAll({useMasterKey: true})
      let user = newPerson.filter(i=>i.get("username") === props.food.user.username)
      props.loginUser({
          username: user[0].get("username"),
          orders: user[0].get("orders"),
          address: user[0].get("address")}
      )
      setSaving(false)
      props.clearCart()
    }
    setModalVisible(!modalVisible)
  }
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <StripeProvider
                    publishableKey={STRIPE_KEY}
                    merchantIdentifier="merchant.identifier"
                    >
                        <CardField
            postalCodeEnabled={true}
            placeholder={{
                number: '4242 4242 4242 4242',
            }}
            cardStyle={{
                backgroundColor: '#FFFFFF',
                textColor: '#000000',
            }}
            style={{
                width: '100%',
                height: 50,
                marginVertical: 30,
            }}
            onCardChange={(cardDetails) => {
                setCard(cardDetails);
            }}
            />

        </StripeProvider>

            <TouchableOpacity onPress={() => confirmOrder()} style={{...globalStyles.checkoutButton,width:"45%"}}>
                        <LinearGradient
                        colors={["#ff4e00","#ec9f05"]}
                        start={{x:0.6,y:-0.5,}}
                        style={{borderRadius: 20}}>
                            <Text style={globalStyles.confirmButtonText}>Confirm</Text>
                        </LinearGradient>
        </TouchableOpacity>
          </View>
        </View>
      </Modal>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={globalStyles.checkoutButton}>
                        <LinearGradient
                        colors={["#ff4e00","#ec9f05"]}
                        start={{x:0.6,y:-0.5,}}
                        style={{borderRadius: 20}}>
                            <Text style={globalStyles.checkoutButtonText}>Checkout</Text>
                        </LinearGradient>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

const mapStateToProps = state =>{
  return {
    food: state.food
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    loginUser: (user)=> dispatch(ACTIONS.loginUser(user)),
    clearCart: ()=> dispatch(ACTIONS.clearCart())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PaymentWindow);