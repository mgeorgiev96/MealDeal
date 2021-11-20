import React,{useState,useEffect} from 'react';
import {Input} from 'react-native-elements'
import {View,TouchableWithoutFeedback,Keyboard, TouchableOpacity, Text,ActivityIndicator,StatusBar} from 'react-native'
import {globalStyles} from '../global/styles'
import {connect} from 'react-redux'
import {Formik} from 'formik'
import Logo from '../components/Logo'
import * as ACTIONS from '../global/store/actions'
import Parse from "parse/react-native.js";
import CryptoES from 'crypto-es'
import moment from 'moment'
import AsyncStorage from '@react-native-async-storage/async-storage'






function Login(props) {
    const [errorSubmit,setErrorSubmit] = useState(false)
    const [errorMsg,setErrorMsg] = useState("")
    const [authenticate,setAuthenticate] = useState(false)

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem("session")
          if(value){
                const Person = Parse.Object.extend('Person');
                const query = new Parse.Query(Person);
                let elapsed = 50

                const currentPerson = await query.findAll()
                
                const usernames = currentPerson.filter(i=>i.get("username") === value)


                if(usernames[0]){
                        usernames[0].get("orders").map(i=> elapsed > moment.duration(moment().diff(i.time,Date.now())).asMinutes() ? elapsed = moment.duration(moment().diff(i.time,Date.now())).asMinutes() : null)
                        if(elapsed < 45){
                            props.trackOrder(elapsed)
                        }
                        props.loginUser({
                            username: usernames[0].get("username"),
                            orders: usernames[0].get("orders"),
                            address: usernames[0].get("address")
                        })
                }

                props.setSession(value)
          }
        } catch(e) {
            console.log(e)
        }
      }
      const saveSession = async (value) => {
        try {
          await AsyncStorage.setItem('session', value)
          props.setSession(value)
        } catch (e) {
          console.log(e)
        }
      }

      useEffect(()=>{
          getData()
      },[])

    const fetchPerson =  async (username,password)=> {
        const Person = Parse.Object.extend('Person');
        const query = new Parse.Query(Person);
        let elapsed = 50

        const currentPerson = await query.findAll()
        
        const usernames = currentPerson.filter(i=>i.get("username") === username)
        if(usernames[0]){
            const hashPass = await CryptoES.PBKDF2(password,usernames[0].get("salt"),{ keySize: 512/32, iterations: 1000}).toString()
            if(usernames[0].get("password") === hashPass){
                usernames[0].get("orders").map(i=> elapsed > moment.duration(moment().diff(i.time,Date.now())).asMinutes() ? elapsed = moment.duration(moment().diff(i.time,Date.now())).asMinutes() : null)
                if(elapsed < 45){
                    props.trackOrder(elapsed)
                }
                saveSession(username)
                props.loginUser({
                    username: usernames[0].get("username"),
                    orders: usernames[0].get("orders"),
                    address: usernames[0].get("address")
                })
            }else{
                setErrorSubmit(true)
                setErrorMsg("password")
                setAuthenticate(false)
            }
        }else{
            setErrorSubmit(true)
            setErrorMsg("username")
            setAuthenticate(false)
        }
      }
    return (
        
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {authenticate ?  <View style={{...globalStyles.container,backgroundColor: "black",justifyContent:"center"}}>
                <ActivityIndicator size={100} color="orange" />
            </View> :
            <View style={{flex: 1,paddingTop: StatusBar.currentHeight}}>
            <Logo changeWindow={()=>props.navigation.toggleDrawer()}/>
            <Formik
            style={globalStyles.logoContainer}
            initialValues={{username:"",password:""}}
            onSubmit={(values)=>{
                setAuthenticate(true)
                fetchPerson(values.username,values.password)
            }}>
                        {(formik) => (
                        <View style={globalStyles.formContainer}>
                            <Input
                            onTextInput={()=>setErrorSubmit(false)}
                            onChangeText={formik.handleChange('username')}
                            onBlur={formik.handleBlur('username')}
                            value={formik.values.username}
                            placeholder="Username..."
                            leftIcon={{ type: 'font-awesome-5', name: 'user'}}
                            />
                            {errorSubmit ? <Text style={globalStyles.errorText}>Wrong {errorMsg}!</Text>:null}
                            <Input
                            onTextInput={()=>setErrorSubmit(false)}
                            onChangeText={formik.handleChange('password')}
                            onBlur={formik.handleBlur('password')}
                            value={formik.values.password}
                            placeholder="Password..."
                            leftIcon={{ type: 'font-awesome-5', name: 'lock'}}
                            type="password"
                            secureTextEntry={true}
                            />
                            <TouchableOpacity onPress={formik.handleSubmit} style={globalStyles.submitButton}>
                                <Text>LOGIN</Text>
                            </TouchableOpacity>
                        </View>
                        )}
            </Formik>
            
        </View>}
        </TouchableWithoutFeedback>
    );
}

const mapStateToProps = state =>{
    return {
        food: state.food
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        loginUser: (user)=> dispatch(ACTIONS.loginUser(user)),
        trackOrder: (time) => dispatch(ACTIONS.trackOrder(time)),
        setSession: (data)=> dispatch(ACTIONS.setSession(data))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login);

