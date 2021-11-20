import React, { useState } from 'react';
import {Overlay ,Input} from 'react-native-elements';
import {View,Text,TouchableOpacity,ActivityIndicator} from 'react-native'
import {Formik} from 'formik'
import {globalStyles} from '../global/styles'
import { LinearGradient } from 'expo-linear-gradient';
import {MaterialCommunityIcons } from '@expo/vector-icons';
import {MASTER_KEY} from '@env'
import Parse from "parse/react-native.js";
import {connect} from 'react-redux'
import * as ACTIONS from '../global/store/actions'

const AddAddress = (props) => {
  const [visible, setVisible] = useState(false);
  const [saving,setSaving] =  useState(false)

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const addNewAddress =  async (address)=> {
    const Person = Parse.Object.extend('Person');
    Parse.masterKey = MASTER_KEY
    const query = new Parse.Query(Person);
    setSaving(true)
    const currentPerson = await query.findAll({useMasterKey: true})
    
    const usernames = currentPerson.filter(i=>i.get("username") === props.food.user.username)
    usernames[0].get("address").push(address)
    
    usernames[0].set("address",usernames[0].get("address"))
    usernames[0].save()

    const newPerson = await query.findAll({useMasterKey: true})
    let user = newPerson.filter(i=>i.get("username") === props.food.user.username)
    
    props.loginUser({
        username: user[0].get("username"),
        orders: user[0].get("orders"),
        address: user[0].get("address")}
    )
    setSaving(false)
    toggleOverlay()
  }


  return (
    <View>
        <TouchableOpacity onPress={toggleOverlay}>
            <LinearGradient
                colors={["#ff4e00","#ec9f05"]}
                start={{x:0.8,y:-0.2,}}
                style={globalStyles.openModalIcon}>
                    <MaterialCommunityIcons name="plus" size={20} color="white" />
            </LinearGradient>
        </TouchableOpacity>

      <Overlay overlayStyle={{width: '90%',height:'90%'}} isVisible={visible} onBackdropPress={toggleOverlay}>
          {saving ?<View style={{...globalStyles.container,justifyContent: 'center'}}><ActivityIndicator size={50} color="orange"/></View> : <View style={globalStyles.container}>
            <Text style={globalStyles.addressTitle}>Add a new address</Text>
      <Formik
                style={globalStyles.logoContainer}
                initialValues={{address:""}}
                onSubmit={(values)=>{
                    addNewAddress(values.address)
                }}>
                            {(formik) => (
                            <View style={globalStyles.formContainer}>
                                <Input
                                onChangeText={formik.handleChange('address')}
                                onBlur={formik.handleBlur('address')}
                                value={formik.values.address}
                                placeholder="Search..."
                                />
                                <TouchableOpacity onPress={formik.handleSubmit} style={globalStyles.submitButton}>
                                    <Text>Save</Text>
                                </TouchableOpacity>
                            </View>
                            )}
                </Formik>
          </View>}
      </Overlay>
    </View>
  );
};

const mapStateToProps = state =>{
    return {
        food: state.food
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        loginUser: (user)=> dispatch(ACTIONS.loginUser(user))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddAddress);