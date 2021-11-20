import React,{useState} from 'react'
import {View,Text} from 'react-native'
import { globalStyles } from '../global/styles';
import HeaderComp from '../components/HeaderComp'
import { Ionicons} from '@expo/vector-icons';
import uuid from 'uuid/v4'
import ViewOrder from '../components/ViewOrder'
import {Picker} from '@react-native-community/picker';


function Orders(props) {

    return (
        <View style={{...globalStyles.container,backgroundColor: "black"}}>
            <HeaderComp
                headerColor={"black"}
                leftComponent={<Ionicons onPress={()=>props.navigation.toggleDrawer()} name="grid" size={28} color="white" style={{marginHorizontal: 15,marginTop:5}} />}
                centerComponent={{ text: 'Order', style: { color: 'white' ,fontSize:28,fontFamily: "Montserrat_600SemiBold"} }}
            />
            <ViewOrder/>
        </View>
    )
}

export default Orders;
