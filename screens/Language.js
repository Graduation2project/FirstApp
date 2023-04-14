import * as React from 'react'
import  { useState } from 'react'
//import ImagePicker from 'react-native-image-crop-picker'
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, StatusBar, TextInput, TouchableOpacity, Dimensions , Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const { width, height } = Dimensions.get('window')
import RadioGroup from 'react-native-radio-buttons-group';

export default class Language extends React.Component {
   
    constructor(props){
        super(props)
        this.state = {
            EnglisCheckBox: false,
            ArabicCheckBox: false,
            radioButtons: [
                {
                    id: '1', // acts as primary key, should be unique and non-empty string
                    label: 'العربية',
                    value: 'Arabic'
                },
                {
                    id: '2',
                    label: 'الانجليزية',
                    value: 'English'
                }
            ]
        }
    }


    onPressRadioButton = (radioButtonsArray) => {
        this.setState({radioButtons: radioButtonsArray});
    }
    

  render() {
    return (
      <>
        <View style={{ backgroundColor: "#fff", flex: 1 }}>


          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}>

            <Image source={require("../images/medicine.png")}
              style={{ width: 321, height: 329, opacity: 0.1 }} />

          </View>

          <View style={{
            position: "absolute",
            width: "100%",
            height: height - 68,
          
          }}>
           <View style={{marginTop:50,flexDirection:"row",width:"100%",alignItems:"flex-end",justifyContent:"flex-end",paddingHorizontal:"5%"}}>
             <Icon name='arrow-right' size={30}  style={{color:"black"}}/> 
             </View>
             <Text style={{fontSize:20,fontWeight:"bold",color:"black",textAlign:"center",marginTop:"5%"}}>الإعدادات</Text>

             <TouchableOpacity   style={{width:"90%",alignSelf:"center",borderWidth:.2,marginTop:"5%",flexDirection:"row",alignItems:"flex-end",justifyContent:"flex-end",paddingHorizontal:"5%"}}>
                <Text style={{fontSize:20,color:'black',marginRight:20,marginBottom:"1%"}}>اللغة</Text>
                <Icon name='flag' size={30} style={{color:'black'}}/>
             </TouchableOpacity>
            
             <TouchableOpacity   style={{width:"90%",alignSelf:"center",borderWidth:.2,marginTop:"5%",flexDirection:"row",alignItems:"flex-end",justifyContent:"flex-end",paddingHorizontal:"5%"}}>
                <Text style={{fontSize:20,color:'black',marginRight:20,marginBottom:"1%"}}>تسجيل الخروج</Text>
                <Icon name='user' size={30} style={{color:'black'}}/>
             </TouchableOpacity>

             <TouchableOpacity   style={{width:"90%",alignSelf:"center",borderWidth:.2,marginTop:"5%",flexDirection:"row",alignItems:"flex-end",justifyContent:"flex-end",paddingHorizontal:"5%"}}>
                <Text style={{fontSize:20,color:'black',marginRight:20,marginBottom:"1%"}}>مشاركة</Text>
                <Icon name='share' size={30} style={{color:'black'}}/>
             </TouchableOpacity>

             <TouchableOpacity   style={{width:"90%",alignSelf:"center",borderWidth:.2,marginTop:"5%",flexDirection:"row",alignItems:"flex-end",justifyContent:"flex-end",paddingHorizontal:"5%"}}>
                <Text style={{fontSize:20,color:'black',marginRight:20,marginBottom:"1%"}}>تواصل معنا</Text>
                <Icon name='messages' size={30} style={{color:'black'}}/>
             </TouchableOpacity>


              
          </View>




        

          <View style={{ position: 'absolute', bottom: 2, left: 10, backgroundColor: "#f00", width: 50, height: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name='phone-alt' size={25} style={{ color: '#fff', }} />

          </View>
          <View style={{
            position: "absolute",
             width: "100%",
             height: "100%",
             backgroundColor: "rgba(0,0,0,0.2)",
             alignItems: 'center',
             justifyContent: 'center',
           }}>

             <View style={{
               width:"80%",
              // paddingVertical: 20,
               backgroundColor: "#39A9B3",
               alignItems:'center'
               ,borderRadius:10
               ,height:"15%"
               ,justifyContent:"center"
               //paddingHorizontal:"5%"
               
             }}>

<RadioGroup 
            radioButtons={this.state.radioButtons} 
            onPress={this.onPressRadioButton} 
            layout='row'


        />


             </View>

             </View>
        </View>
      </>
    )
  }
}
const styles = StyleSheet.create({
  titel: {
    marginTop: '10%',
    marginBottom:'3%',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 1,
    color: '#159da9'
  },
  text: {
   marginTop: '8%',
    fontSize: 16,
    marginRight: 20,
    color: '#000'

  }

})
