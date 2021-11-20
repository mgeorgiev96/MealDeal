import { LinearGradient } from 'expo-linear-gradient';
import React,{useState} from 'react'
import { View, Image, TouchableOpacity,Text,ScrollView } from 'react-native'
import { globalStyles } from '../global/styles';
import { Entypo,MaterialCommunityIcons } from '@expo/vector-icons'; 
import * as ACTIONS from '../global/store/actions'
import {connect} from 'react-redux'

function InfoItem(props) {
    const [numberItems,setNumberItems] = useState(1)
    return (
                <ScrollView>
            <View style={globalStyles.infoItemMainContainer}>

                    <LinearGradient
                    colors={["black","black"]}
                    start={{x:0.8,y:-0.2,}}
                    style={globalStyles.infoItemContainer}>
                        <Image style={globalStyles.infoItemImage} resizeMode='contain' source={props.item.img}/>
                        <Text style={globalStyles.purchaseTitleText}>{props.item.name}</Text>
                            <LinearGradient
                            style={globalStyles.rangeInput}
                                colors={["#ff4e00","#ec9f05"]}
                                start={{x:0.8,y:-0.2,}}>
                                <TouchableOpacity onPress={()=> numberItems > 1 ? setNumberItems(numberItems - 1) : null}>
                                        <MaterialCommunityIcons name="minus" size={20} color="white" />
                                </TouchableOpacity>
                                <Text style={globalStyles.rangeInputText}>{numberItems}</Text>
                                <TouchableOpacity onPress={()=>setNumberItems(numberItems + 1)}>
                                        <MaterialCommunityIcons name="plus" size={20} color="white" />
                                </TouchableOpacity>
                            </LinearGradient>
                        <View style={globalStyles.purchaseDetails}>
                            <View style={globalStyles.detailsTag}>
                                <LinearGradient
                                    colors={["#ff4e00","#ec9f05"]}
                                    start={{x:0.8,y:-0.2,}}
                                    style={globalStyles.detailsIcons}>
                                        <MaterialCommunityIcons name="fire" size={20} color="white" />
                                </LinearGradient>
                                <Text style={globalStyles.detailsTagText}>{props.item.calories}</Text>
                            </View>
                            <View style={globalStyles.detailsTag}>
                                <LinearGradient
                                    colors={["#ff4e00","#ec9f05"]}
                                    start={{x:0.8,y:-0.2,}}
                                    style={globalStyles.detailsIcons}>
                                        <MaterialCommunityIcons name="weight-gram" size={20} color="white" />
                                </LinearGradient>
                                <Text style={globalStyles.detailsTagText}>{props.item.weight}</Text>
                            </View>
                            <View style={globalStyles.detailsTag}>
                                <LinearGradient
                                    colors={["#ff4e00","#ec9f05"]}
                                    start={{x:0.8,y:-0.2,}}
                                    style={globalStyles.detailsIcons}>
                                        <Entypo name="star" size={20} color="white" />
                                </LinearGradient>
                                <Text style={globalStyles.detailsTagText}>{props.item.rating}/5</Text>
                            </View>
                        </View>
                        <Text style={globalStyles.purchaseDescText}>{props.item.desc}</Text>
                        <TouchableOpacity style={globalStyles.purchaseButton} onPress={()=>props.addItem({item:props.item,numberItems})}>
                            <LinearGradient
                            colors={["#ff4e00","#ec9f05"]}
                            start={{x:0.6,y:-0.5,}}
                            style={{borderRadius: 10}}>
                                <Text style={globalStyles.purchaseButtonText}>Buy for <Text style={{fontSize: 16}}>$</Text>{(props.item.price * numberItems).toFixed(2)}</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </LinearGradient>
        </View>
                </ScrollView>
    )
}

const mapStateToProps = state =>{
    return {
        food: state.food
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        addItem: (item)=> dispatch(ACTIONS.addItem(item))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(InfoItem);
