import {StyleSheet,StatusBar} from 'react-native'


export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    formContainer:{
      width: '75%',
      flex: 1,
      paddingTop: 50,
      marginLeft: 30,
      alignItems:'center'
    },
    logoContainer:{
      flex: 1,

    },
    submitButton: {
      backgroundColor:'#FFA500',
      paddingVertical: 10,
      paddingHorizontal: 20,
      fontWeight:'bold',
      borderRadius: 2,
      marginVertical: 15
    },
    textLogo:{
      color: 'orange',
      letterSpacing: 1,
      fontSize: 35,
      marginLeft: 40,
      fontFamily: "Montserrat_500Medium"
    },
    backgroundLogo:{
      width: 500,
      height: 500,
      borderRadius: 800,
      backgroundColor: '#FFA500',
      position: 'absolute',
      right: -200,
      top: -170,
    },
    backgroundLogo1: {
      width: 300,
      height: 300,
      borderRadius: 800,
      backgroundColor: 'black',
      position: 'absolute',
      right: -150,
      top: 5,
    },
    backgroundLogo2: {
      width: 300,
      height: 300,
      borderRadius: 800,
      borderColor: 'black',
      borderWidth: 5,
      position: 'absolute',
      left: -170,
      bottom: -530,
    },
    backgroundLogo3: {
      width: 300,
      height: 300,
      borderRadius: 900,
      borderWidth: 5,
      borderColor: '#FFA500',
      position: 'absolute',
      left: -195,
      bottom: -560,
    },
    errorText: {
      color: 'red',
      fontSize: 15
    },
    searchText:{
      fontSize: 20,
      marginVertical: 20
    },
    searchContainer:{
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: StatusBar.currentHeight,
      alignItems: 'center',
      justifyContent: 'center'
    },
    searchFormContainer:{
      width: '75%',
      justifyContent:'center',
      alignItems:'center'
    },
    menuItem:{
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 10,
      position:"relative",
      width: '50%'
    },
    menuItemImage:{
      width: 120,
      height:120,
    },
    activeTab: {
      backgroundColor: 'rgba(255,165,0,0.5)',
      paddingVertical: 10,
      flex: 1,
      height: 85,
      justifyContent: 'center',
      marginVertical: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'white',
      alignSelf:'center'
    },
    menuImage: {
      width: 40,
      height: 40,
      alignSelf:'center',
      marginVertical: 2,
    },
    menuIconTab:{
      marginVertical: 10
    },
    menuContainer:{
      flex: 1,
      alignItems: 'flex-start',
      height: '100%',
      backgroundColor: "black"
    },
    menuBarItem:{
      paddingVertical: 10,
      marginVertical: 10,
      flex: 1,
      height: 85,
      justifyContent: 'center',
      color:"#fff"
    },
    menuBarText:{
      alignSelf: 'center',
      marginBottom: 10,
      color: 'white',
      fontFamily: "Montserrat_700Bold",
      fontSize:15
    },
    menuBarItemContent:{
      justifyContent: 'center',
      alignItems: 'center'
    },
    infoItemBox:{
      width:'100%',
      alignContent: 'center',
      
    },
    infoItemBoxTitle:{
      color:'white',
      alignSelf:'center',
      fontSize:17,
    },
    infoItem:{
      flex: 1,
      borderRadius: 10,
      marginHorizontal: 5,
      marginVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10
    },
    foodItemsContainer:{
      height: '70%',
      justifyContent: "center",
      borderBottomColor: 'white',
      backgroundColor:"black",
    },
    infoItemImage:{
      width: 200,
      height: 150,
      alignSelf: 'center',
      marginTop: 20
    },
    infoItemMainContainer:{
      flex: 1,
      height: '100%',
    },
    purchaseButton:{
      width: '50%',
      alignSelf: 'center',
      marginTop: 15,
      marginBottom: 10
    },
    purchaseButtonText: {
      paddingVertical: 5,
      paddingHorizontal: 15,
      color: "white",
      textAlign: 'center',
      marginVertical: 10,
      fontSize: 20,
      borderRadius: 15,

    },
    confirmButtonText:{
      paddingHorizontal: 2,
      color: "white",
      textAlign: 'center',
      fontSize: 16,
      borderRadius: 10,
      fontFamily: "Montserrat_600SemiBold",
      paddingVertical: 5
    },
    purchaseTitleText:{
      color: 'white',
      textAlign: 'center',
      fontSize: 30,
      fontFamily: "Montserrat_700Bold",
      marginBottom: 25
    },
    purchaseDescText:{
      color: 'white',
      textAlign: 'center',
      paddingHorizontal: 30,
      marginVertical: 20,
      fontSize: 17,
      fontFamily: "Montserrat_500Medium"
    },
    infoItemContainer:{
      height: '100%',
    },
    purchaseDetails: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 10
    },
    detailsIcons:{
      borderRadius: 20,
      padding: 10,
      marginVertical: 2
    },
    detailsTag:{
      alignItems: 'center',
      marginHorizontal: 20
    },
    detailsTagText: {
      fontWeight: 'bold',
      fontSize: 20,
      color: 'white',
      marginVertical: 5
    },
    rangeInput:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      paddingVertical:10,
      paddingHorizontal: 15,
      borderRadius: 25,
      marginBottom: 20
    },
    rangeInputCart:{
      flexDirection: 'column',
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      marginBottom: 15,
      left:0,
      height:'104%',
      top:-1.5,
      position:'absolute',
      borderTopLeftRadius: 15,
      borderBottomLeftRadius: 15,
      paddingHorizontal:3,
      paddingVertical: 10
    },
    rangeInputText:{
      fontWeight: 'bold',
      fontSize: 20,
      color: 'white',
      paddingHorizontal: 5,
      marginHorizontal: 10
    },
    rangeInputTextCart:{
      fontWeight: 'bold',
      fontSize: 17,
      color: 'white',
      paddingHorizontal: 5,
      marginHorizontal: 10,
    },
    cartContainer:{
      flex: 3,
      backgroundColor: 'black',
      paddingTop: 25
    },
    cartContainerImage: {
      width: 80,
      height: 80,
      marginRight: 15
    },
    cartContainerItem:{
      width: '90%',
      paddingHorizontal: 20,
      marginVertical: 10,
      alignSelf: 'center',
      borderRadius: 15,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: "#ff8c00",
      borderRadius: 15
    },

    cartContainerItemText:{
      color: 'white',
      fontSize: 17
    },
    deleteIcon: {
      backgroundColor: 'rgba(0,0,0,0)',
      justifyContent:'center',
      position:'absolute',
      right:0,
      height:'100%',
      top:0,
      borderTopRightRadius: 15,
      borderBottomRightRadius: 15,
      width: 10,
    },
    deleteIconOpen: {
      backgroundColor: 'white',
      justifyContent:'center',
      position:'absolute',
      right:0,
      height:'101.5%',
      top:-0.5,
      borderTopRightRadius: 15,
      borderBottomRightRadius: 15,
      width: 40,
    },
    checkoutSection: {
      flex: 2,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: "black"
    },
    checkoutButtonText:{
      paddingHorizontal: 15,
      color: "white",
      textAlign: 'center',
      fontSize: 20,
      borderRadius: 10,
      fontFamily: "Montserrat_600SemiBold",
      paddingVertical: 10
    },
    checkoutButton: {
      width: '80%',
      alignSelf: 'center'
    },

    addressPicker: {
      backgroundColor: 'white',
      color: 'black',
      borderWidth: 2,
      borderColor: 'white',
      alignSelf: 'center',
      width: '50%',
      borderRadius: 10,
      height: 20,
      justifyContent: 'center'
    },
    orderPicker: {
      backgroundColor: 'white',
      color: 'black',
      borderWidth: 2,
      borderColor: 'white',
      alignSelf: 'center',
      width: '75%',
      borderRadius: 5,
      height: 40,
      justifyContent: 'center'
    },
    addressText: {
      color: 'white',
      marginHorizontal: 10,
      fontSize: 15,
      fontFamily: "Montserrat_500Medium",
    },
    checkoutText: {
      color: 'white',
      fontFamily: "Montserrat_500Medium",
      fontSize: 18
    },
    checkoutTextSecond: {
      color: 'ghostwhite',
      fontSize: 15,
    },
    addressTitle: {
      fontSize: 20,
      alignSelf: "center",
      fontFamily: "Montserrat_600SemiBold",
      marginVertical: 15
    },
    openModalIcon:{
      borderRadius: 20,
      padding: 10,
      marginVertical: 2,
      marginHorizontal: 10
    },
    ordersEvent: {
      width: 120,
      height: 120,
      borderRadius: 60,
      backgroundColor:'black',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    ordersLine:{
      width: 5,
      height: 70,
      alignSelf: 'center'
    },
    ordersLabel:{
      width: '100%',
      alignSelf: 'center',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
    },
    ordersTab: {
      justifyContent: 'center',
      alignItems: "center",
      flex: 1,
      marginHorizontal: 10
    },
    ordersLabelText:{
      alignSelf: 'center',
      color:"white",
      fontFamily: "Montserrat_700Bold",
      fontSize: 15,
      marginVertical: 10
    },
    ordersDirectionContainer:{
      flex: 1,
      justifyContent:'center',
    },
    orderChart: {
      width: 250,
      height: 250,
      borderRadius: 125,
      justifyContent:"center",
      alignItems: 'center'
    },
    cartContainerItemInfo:{
      alignSelf:'center'
    }
  });