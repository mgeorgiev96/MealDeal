import React,{useState} from 'react'
import { View, Text,ScrollView,TouchableOpacity ,FlatList, RefreshControl} from 'react-native'
import {globalStyles} from '../global/styles'
import {Image} from 'react-native-elements'
import uuid from 'uuid/v4'
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import InfoItem from '../screens/InfoItem'
import HeaderComp from '../components/HeaderComp'
import {connect} from 'react-redux'
import { FontAwesome5 } from '@expo/vector-icons'; 


const AppScreen = (props) => {
    const [value,setValue] = useState(0)
    const [infoItem,setInfoItem] = useState("")
    const [showItem,setShowItem] = useState(true)
    const [refreshing, setRefreshing] = React.useState(false);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      }

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(1000).then(() => setRefreshing(false));
    }, []);

    const [routes] = useState([
      { key: 0, title: 'Burgers' , uri:"https://img.icons8.com/ios-filled/50/ffffff/hamburger.png" },
      { key: 1, title: 'Sides' ,uri:"https://img.icons8.com/ios-filled/50/ffffff/french-fries.png"},
      { key: 2, title: 'Pizza',uri:"https://img.icons8.com/ios-filled/50/ffffff/pizza-five-eighths.png" },
      { key: 3, title: 'Drinks', uri: "https://img.icons8.com/ios-filled/50/ffffff/soda-cup.png"},
      { key: 4, title: 'Salads', uri: "https://img.icons8.com/ios-filled/50/ffffff/salad.png"},
      { key: 5, title: 'Desserts',uri: "https://img.icons8.com/ios-filled/50/ffffff/cupcake.png" }
    ]);
    const sendInfo = (item)=>{
        setInfoItem(item)
        setShowItem(false)
    }
    return (
                <View style={globalStyles.menuContainer}>
                    <LinearGradient
                     colors={["black","black"]}>

                      {showItem  ? <HeaderComp
                       headerColor={"black"}
                       leftComponent={<Ionicons onPress={()=>props.navigation.toggleDrawer()}  name="grid" size={28} color="white" style={{marginHorizontal: 15,marginTop:5}}/>}
                       centerComponent={{ text: 'MealDeal', style: { color: 'white' ,fontSize:28,fontFamily: "Montserrat_600SemiBold"} }}
                    /> :
                    <HeaderComp 
                       headerColor={"black"}
                       leftComponent={<Ionicons onPress={()=>setShowItem(true)} name="arrow-back-sharp" size={28} color="white" style={{marginHorizontal: 15,marginTop:5}} />}
                       centerComponent={{ text: 'MealDeal', style: { color: 'white' ,fontSize:28,fontFamily: "Montserrat_600SemiBold"} }}
                    />}
                    {showItem ? <View>
                    <View style={{width:'100%',backgroundColor:'black',paddingBottom: 30}}>
                            <ScrollView horizontal={true} contentContainerStyle={{width:'150%',justifyContent:'space-around',paddingHorizontal:5}}>
                                {routes.map(item=>{
                                    return <LinearGradient
                                    key={uuid()}
                                    colors={item.key === value ? ["#ff4e00","#ec9f05"] : ["#000","#000"]}
                                    start={{x:0.9,y:-0.3,}}
                                    style={item.key === value ? globalStyles.activeTab : globalStyles.menuBarItem}>
                                     <TouchableOpacity
                                    onPress={()=> setValue(item.key)}>
                                    <View style={globalStyles.menuBarItemContent} key={uuid()}>
                                        <Image style={globalStyles.menuImage} source={{uri:item.uri}}/>
                                        <Text style={globalStyles.menuBarText}>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>

                                    </LinearGradient>
                                })}
                            </ScrollView>
                        </View>
                        <View style={globalStyles.foodItemsContainer}>
                                <FlatList
                                refreshControl={<RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                  />}
                                    data={ props.menu.menu[value] }
                                    renderItem={ ({item}) =>
                                    <TouchableOpacity onPress={()=> sendInfo(item)} style={{flex: 1}}>

                                        <LinearGradient
                                             style={globalStyles.infoItem}
                                            start={{x:0.8,y:0.9,}}
                                            colors={["rgba(0,0,0,0.6)","transparent"]}
                                            >
                                                <View style={{width: '100%'}}>
                                                    <View style={{alignItems: 'center'}}>
                                                        <Image resizeMode='contain' style={globalStyles.menuItemImage} source={item.img}/>
                                                    </View>
                                                    <View style={globalStyles.infoItemBox}>
                                                        <Text style={globalStyles.infoItemBoxTitle}>{item.name}</Text>
                                                        <Text style={{color:'white',alignSelf:'center',fontSize: 15}}>{item.subtitle}</Text>
                                                        <Text style={{color:'white',alignSelf:'center',fontSize: 15}}><Text style={{fontSize: 15,color:"white",fontWeight:'bold'}}>$</Text>{item.price}</Text>
                                                    </View>
                                                </View>
                                                <LinearGradient
                                                        colors={["#ff4e00","#ec9f05"]}
                                                        start={{x:0.8,y:-0.2,}}
                                                        style={{width:"100%",
                                                        height:5,
                                                        marginVertical: 20,
                                                        borderBottomLeftRadius:35,
                                                        borderBottomRightRadius:35
                                                        }}>

                                                </LinearGradient>
                                            </LinearGradient>
                                    </TouchableOpacity> }
                                    numColumns={2}
                                />
                            </View>
                    </View> : <InfoItem item={infoItem}/>}
                    </LinearGradient>
                </View>
    )
}

const mapStateToProps = state =>{
    return {
        menu: state.food
    }
}

export default connect(mapStateToProps)(AppScreen)
