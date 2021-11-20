import React,{useState} from 'react';
import {Input} from 'react-native-elements'
import {View,TouchableWithoutFeedback,Keyboard, TouchableOpacity, Text,ActivityIndicator} from 'react-native'
import {globalStyles} from '../global/styles'
import {connect} from 'react-redux'
import {Formik} from 'formik'
import Logo from '../components/Logo'
import * as yup from 'yup'
import Parse from "parse/react-native.js";
import CryptoES from 'crypto-es'


const ReviewSchema = yup.object({
    username: yup.string().min(6).required(),
    password: yup.string().min(8).required()
})


function Signup(props) {
    const [error,setError] = useState(false)
    const [create,setCreate] = useState(false)

     const fetchPerson =  async (username,password)=> {
        const Person = Parse.Object.extend('Person');

        const query = new Parse.Query(Person);

        const currentPerson = await query.findAll()
        const usernames = currentPerson.map(i=>i.get("username"))
        if(!usernames.includes(username)){
            addNewPerson(username,password)
            props.navigation.navigate("Login")
        }else{
            setError(true)
        }
      }

    const addNewPerson = async(username,password) => {
        try {

          const Person = Parse.Object.extend('Person');
          const newPerson = new Person();
          const salt = CryptoES.lib.WordArray.random(128/8);

          newPerson.set('username', username);
          newPerson.set('salt', salt);
          newPerson.set('orders', []);
          newPerson.set('address',[])
          newPerson.set('password', await CryptoES.PBKDF2(password,salt,{ keySize: 512/32, iterations: 1000}).toString());

          await newPerson.save();
          setCreate(false)
        } catch (error) {
          console.log('Error saving new user: ', error);
        }
      }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {create ? <View style={{...globalStyles.container,backgroundColor: "black",justifyContent:"center"}}>
                <ActivityIndicator size={100} color="orange" />
            </View> : <View style={globalStyles.container}>
                <Logo chatMessage="Create Account" changeWindow={()=>props.navigation.toggleDrawer()}/>
                <Formik
                style={globalStyles.logoContainer}
                initialValues={{username:"",password:""}}
                validationSchema={ReviewSchema}
                onSubmit={(values)=>{
                    setCreate(true)
                    fetchPerson(values.username,values.password)
                    values.username = ""
                    values.password = ""
                }}>
                            {(formik) => (
                            <View style={globalStyles.formContainer}>
                                <Input
                                onTextInput={()=>setError(false)}
                                onChangeText={formik.handleChange('username')}
                                onBlur={formik.handleBlur('username')}
                                value={formik.values.username}
                                placeholder="Username..."
                                leftIcon={{ type: 'font-awesome-5', name: 'user'}}
                                />
                                <Text style={globalStyles.errorText}>{formik.touched.username && formik.errors.username}{error && !formik.errors.username ?<Text>Username is taken !</Text>: null}</Text>
                                <Input
                                onTextInput={()=>setError(false)}
                                onChangeText={formik.handleChange('password')}
                                onBlur={formik.handleBlur('password')}
                                value={formik.values.password}
                                placeholder="Password..."
                                leftIcon={{ type: 'font-awesome-5', name: 'lock'}}
                                type="password"
                                secureTextEntry={true}
                                />
                                <Text style={globalStyles.errorText}>{formik.touched.password && formik.errors.password}</Text>
                                <TouchableOpacity onPress={formik.handleSubmit} style={globalStyles.submitButton}>
                                    <Text>Sign Up</Text>
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


export default connect(mapStateToProps)(Signup);

