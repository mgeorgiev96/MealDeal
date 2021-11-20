import React,{useState} from 'react'
import {Image, Text, View, TouchableOpacity, RefreshControl } from 'react-native'
import { globalStyles } from '../global/styles'
import { LinearGradient } from 'expo-linear-gradient';
import HeaderComp from '../components/HeaderComp'
import { Ionicons,FontAwesome5} from '@expo/vector-icons';
import {connect} from 'react-redux'
import * as ACTIONS from '../global/store/actions'
import {Picker} from '@react-native-community/picker';
import {Divider} from 'react-native-elements'
import AddAddress from '../components/AddAdress'
import uuid from 'uuid/v4'
import PaymentWindow from '../components/PaymentWindow'
import { ScrollView } from 'react-native-gesture-handler';
import {MaterialCommunityIcons } from '@expo/vector-icons'; 

function Cart(props) {
    
    const [selectedValue, setSelectedValue] = useState("");
    const [refreshing, setRefreshing] = React.useState(false);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      }

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(1000).then(() => setRefreshing(false));
    }, []);

    let sumTotal = 0
    props.food.cart.map(i=>sumTotal += i.price*i.qty)
    return (
        <View style={{...globalStyles.container,backgroundColor: 'black'}}>
            <HeaderComp
                         headerColor={"black"}
                         leftComponent={<Ionicons onPress={()=>props.navigation.toggleDrawer()} name="grid" size={28} color="white" style={{marginHorizontal: 15,marginTop:5}} />}
                         centerComponent={{ text: 'Cart', style: { color: 'white' ,fontSize:28,fontFamily: "Montserrat_600SemiBold"} }}
                         />
            <View style={globalStyles.cartContainer}>
                <ScrollView
                        refreshControl={<RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                />}>
                    {
                        props.food.cart.map((l, i) => (
                            <LinearGradient
                            key={i} bottomDivider
                            colors={["#242424","#242424"]}
                            start={{x:0.8,y:-0.2,}}
                            style={globalStyles.cartContainerItem}>
                                 <LinearGradient
                                            style={globalStyles.rangeInputCart}
                                            colors={["#ff8c00","#ff8c00"]}
                                            start={{x:0.8,y:-0.2,}}>
                                            <TouchableOpacity onPress={()=>props.changeNumber(l)} style={{marginVertical:5}}>
                                                    <MaterialCommunityIcons name="plus" size={16} color="white" />
                                            </TouchableOpacity>
                                            <Text style={globalStyles.rangeInputTextCart}>{l.qty}</Text>
                                            <TouchableOpacity style={{marginVertical:5}} onPress={()=> l.qty > 1 ? props.reduceNumber(l) : null}>
                                                    <MaterialCommunityIcons name="minus" size={16} color="white" />
                                            </TouchableOpacity>

                                </LinearGradient>
                                <View style={{marginLeft: '12%'}}>
                                <Image style={globalStyles.cartContainerImage} resizeMode="contain" source={l.img}/>
                                </View>
                                    <View style={globalStyles.cartContainerItemInfo}>
                                        <Text style={globalStyles.cartContainerItemText}>{l.name}</Text>
                                        <Text style={globalStyles.cartContainerItemText}><Text>$</Text>{(l.price * l.qty).toFixed(2)}
                                        </Text>
                                    </View>

                                    
                                    <TouchableOpacity onPress={()=> props.removeItem(l.name)} style={globalStyles.deleteIconOpen}> 
                                        <LinearGradient
                                        colors={["#ff8c00","#ff8c00"]}
                                        start={{x:0.8,y:-0.2,}}
                                        style={globalStyles.deleteIconOpen}>
                                            <FontAwesome5 name="times" size={15} color="white" style={{marginHorizontal: 15,marginTop:7}} />
                                        </LinearGradient>
                                    </TouchableOpacity>

                        </LinearGradient>
                        ))
                    }
                </ScrollView>
            </View>
            <LinearGradient
                        bottomDivider
                        colors={["#242424","#242424"]}
                        start={{x:0.8,y:-0.2,}}
                        style={globalStyles.checkoutSection}>
                            <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
                                <Text style={globalStyles.addressText}>Address - </Text>
                                <View style={globalStyles.addressPicker}>
                                    <Picker
                                            selectedValue={selectedValue}
                                            onValueChange={(itemValue, itemIndex) =>
                                                setSelectedValue(itemValue)
                                            }>
                                            {props.food.user.address.map(item=> <Picker.Item key={uuid()} label={item} value={item}/>)}
                                    </Picker>
                                </View>
                                <AddAddress/>
                            </View>
                    <View style={{flexDirection: 'row',justifyContent: 'space-between',marginHorizontal: '20%'}}>
                        <Text style={globalStyles.checkoutTextSecond}>Delivery</Text>
                        <Text style={globalStyles.checkoutTextSecond}>${sumTotal > 0 ? 2.00 : 0}</Text>
                    </View>
                    <View style={{flexDirection: 'row',justifyContent: 'space-between',marginHorizontal: '20%',marginVertical: 5}}>
                        <Text style={globalStyles.checkoutTextSecond}>Order</Text>
                        <Text style={globalStyles.checkoutTextSecond}>${sumTotal.toFixed(2)}</Text>
                    </View>
                    <Divider style={{height:2}}/>
                    <View style={{flexDirection: 'row',justifyContent: 'space-between',marginHorizontal: '20%',marginVertical:10}}>
                        <Text style={globalStyles.checkoutText}>Total</Text>
                        <Text style={globalStyles.checkoutText}>${sumTotal > 0 ? (sumTotal + 2).toFixed(2) : sumTotal.toFixed(2)}</Text>
                    </View>
                    <PaymentWindow/>
            </LinearGradient>
            
        </View>
    )
}

const mapStateToProps = state=>{
    return {
        food: state.food
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeOption: (name)=> dispatch(ACTIONS.changeOption(name)),
        removeItem: (name)=> dispatch(ACTIONS.removeItem(name)),
        changeNumber: (item)=> dispatch(ACTIONS.changeNumber(item)),
        reduceNumber: (item)=> dispatch(ACTIONS.reduceNumber(item))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)



