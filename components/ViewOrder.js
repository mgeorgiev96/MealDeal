import React,{useRef,useEffect, useState} from 'react'
import {Text, View,Animated} from 'react-native'
import { globalStyles } from '../global/styles';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { PieChart } from 'react-native-svg-charts'
import {connect} from 'react-redux'
import moment from 'moment'


function ViewOrder(props) {
    const data = [10, 10, 10, 10]
    const fadeAnim = useRef(new Animated.Value(0)).current
    const [startVal,setStartVal] = useState(0)
    let message = "Sorting Order"
    let processIcon = "clipboard-list"
    let elapsed = 50
    props.food.user.orders.map(i=> elapsed > moment.duration(moment().diff(i.time,Date.now())).asMinutes() ? elapsed = moment.duration(moment().diff(i.time,Date.now())).asMinutes() : null)
    
      const FadeInView = (props) => {
        const fadeAnim = useRef(new Animated.Value(startVal)).current  // Initial value for opacity: 0
      
        useEffect(() => {
            if(startVal === 1){
                Animated.timing(
                    fadeAnim,
                    {
                      toValue: 0,
                      duration: 1000,
                      useNativeDriver: true
                    }
                  ).start(finish=>{
                      setStartVal(0)
                  })
            }else{
                 Animated.timing(
                    fadeAnim,
                    {
                      toValue: 1,
                      duration: 1000,
                      useNativeDriver: true
                    }
                  ).start(finish=>{
                    setStartVal(1)
                })
                  
            }
        }, [fadeAnim])
      
        return (
          <Animated.View
            style={{
              ...props.style,
              opacity: fadeAnim,
            }}
          >
            {props.children}
          </Animated.View>
        );
    }
 
    const randomColor = (index) => {
      if(index === 0){
        message = "Sorting Order"
        return "#ff4e00" 
      }else if(elapsed > 15 && index === 1){
        message = "Preparing"
        processIcon = "knife"
        return "#ff4e00"
      }else if(elapsed > 25 && index === 2){
        message = "Delivering"
        processIcon = "truck"
        return "#ff4e00"
      }else if(elapsed > 40 && index === 3 ){
        message = "Delivery Complete"
        processIcon = "check"
        return "#ff4e00"
      }else{
        return "#ffaf16"
      }
    }
    const pieData = data
    .filter((value) => value > 0)
    .map((value, index) => ({
        value,
        svg: {
            fill: randomColor(index),
        },
        key: `pie-${index}`,
    }))


    return (
        <View style={{...globalStyles.container,backgroundColor: "black",alignItems:'center'}}>

        <View>
            <FadeInView style={{width: 250, height: 75, backgroundColor: 'black',marginVertical: 20}}>
                <Text style={{fontSize: 32, textAlign: 'center', margin: 10,color:'white',fontFamily: "Montserrat_600SemiBold",}}>{message}</Text>
            </FadeInView>
            </View>
            <PieChart innerRadius={125} style={{ height: 350,width: 350,backgroundColor:'black',borderRadius: 175}} data={pieData}>
                 <MaterialCommunityIcons style={{position:'absolute',top:120,left: 120}} size={110} color="white" name={processIcon}/>
            </PieChart>
        </View>
    )
}


const mapStateToProps = state =>{
      return {
        food: state.food
      }
}

export default connect(mapStateToProps)(ViewOrder);