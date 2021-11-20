import React,{useEffect,useState} from 'react';
import {View,Text,TouchableOpacity,Keyboard} from 'react-native'
import {globalStyles} from '../global/styles'
import { Ionicons } from '@expo/vector-icons';
import {connect} from 'react-redux'
import * as ACTIONS from '../global/store/actions'


function Logo(props) {

    useEffect(()=>{
        Keyboard.addListener("keyboardDidShow",()=>{
            props.setShow(true)
        })
        Keyboard.addListener('keyboardDidHide',()=>{
            props.setShow(false)
        })
    },[])
    return (
        <View style={globalStyles.logoContainer}>
        <TouchableOpacity>
          <Ionicons onPress={props.changeWindow} name="grid" size={30} color="black" style={{marginTop:5,marginLeft: 15}} />
        </TouchableOpacity>
        <View style={globalStyles.backgroundLogo}></View>
        <View style={globalStyles.backgroundLogo1}></View>
        <View style={globalStyles.backgroundLogo2}></View>
        <View style={globalStyles.backgroundLogo3}></View>
        <Text style={{marginTop: props.food.show ? 115 : 250,...globalStyles.textLogo}}>Meal<Text style={{color:"black"}}>Deal</Text></Text>
        <Text style={{
           marginLeft: 43,
        }}>{props.chatMessage}</Text>
    </View>
    )
}

const mapStateToProps = state =>{
    return {
        food: state.food
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        setShow: (type)=> dispatch(ACTIONS.setShow(type))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Logo);