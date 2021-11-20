import React,{useEffect} from 'react'
import { View, Text } from 'react-native'
import {connect} from 'react-redux'
import * as ACTIONS from '../global/store/actions'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Logout = (props) => {
    const killSession = async ()=>{
        try{
            const value = await AsyncStorage.setItem("session","")
            props.logoutUser()
            props.setSession("")
        }catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        killSession()
    },[])
    return (
        <View>
            <Text>Logout</Text>
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
        logoutUser: ()=> dispatch(ACTIONS.logoutUser()),
        setSession: (data)=> dispatch(ACTIONS.setSession(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Logout)

