import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useState } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ToastAndroid  } from 'react-native';
 //import BeeSting from './screens/BeeSting';
import Splash from './screens/Splash';
//  import CprChild from './screens/CprChild';
  import Home from './screens/Home';
  import Faint1 from './screens/Faint1';
  import Signin from './screens/SignIn';
  import SignUp from './screens/SignUp';
  import ChildBreathYes from './screens/ChildBreathYes';

import Faint2 from './screens/Faint2';
import Faint3 from './screens/Faint3';
import SugarAndPressure from './screens/SugarAndPressure';
import BitesQuestion from './screens/BitesQuestion'
import DogBite from './screens/Dog'
import CatBite from './screens/Cat'

import StingQuestion from './screens/StingsQuestion'
import BeeSting from './screens/BeeSting'
import SnakeSting from './screens/SnakeSting'

import BlockQuestion from './screens/BlockQuestion'
import CprQuestion from './screens/BlockAdult'
 import BreathYes from './screens/BlockBreatheYes'
 import CprChild from './screens/CprChild'
 import BreathNo from './screens/BlockBreatheNo'
 import Home2 from './screens/Home2'

 import FractionQuestion from './screens/FractionQuestion'
 import FingerFraction from './screens/Finger'
 import Foot from './screens/Foot'
 import Vertebral from './screens/Vertebral';
// import Breath from './screens/BlockQuestion'
// import BlockQuestion from './screens/BlockQuestion'
//  import PoisoningYes from './screens/PoisoningYes';
// import Test1 from './screens/Test1';
import PoisonQuestion from './screens/PoisonQuestion';
import GazPoisonYes from './screens/GazPoisonYes';
import GazPoisonNo from './screens/GazPoisonNo';
import FoodPoisonNo from './screens/FoodPoisonNo';
import FoodPoisonYes from './screens/FoodPoisonYes';
import WheatPoison from './screens/WheatPoison';
import PressureOrNot from './screens/PressureOrNot';
import HeartAttackQuestion from './screens/HeartAttackQuestion';
import Order1HeartAttack from './screens/Order1HeartAttack';
import Order2HeartAttack from './screens/Order2HeartAttack';
import Burn1 from './screens/Burn1';
import Burn2 from './screens/Burn2';
import Burn3 from './screens/Burn3';
import HeartAttakLearn from './screens/HeartAttakLearn';
import PoisonLearning from './screens/PoisonLearning';
import StingsLearning from './screens/StingsLearning';
import BitesLearning from './screens/BitesLearning';
import Burnlearn from './screens/Burnlearn';
import Faintinglearn from './screens/Faintinglearn';
import BlockLearning from './screens/BlockLearning';
import FractionsLearn from './screens/FractionsLearn';
import DownBar from './screens/DownBar';
import { useNavigation } from '@react-navigation/native';
import Settings from './screens/Setting'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Setting from './screens/Setting';


 function Home_Stack({LearningState }) {

  const Stack = createNativeStackNavigator();
  // const [LearningState , SetLearningState] = useState(false)
  //const navigation = useNavigation();

  return (

    <>
 


      <Stack.Navigator>
     
      <Stack.Screen name='Home' >
      {(props) => <Home {...props} LearningState={LearningState} />}
      </Stack.Screen>
    
    
      
      
      <Stack.Screen name='Home2' component={Home2} />
      <Stack.Screen name='CprChild' component={CprChild} />

      {/* Registration*/}
  
      <Stack.Screen name='Sign Up' component={SignUp} />
        

        {/* Bites */}
      <Stack.Screen name='BitesQuestion' component={BitesQuestion} />
      <Stack.Screen name='DogBite' component={DogBite} />
      <Stack.Screen name='CatBite' component={CatBite} />
      <Stack.Screen name='BitesLearning' component={BitesLearning} />

      {/* Stings   */}
      <Stack.Screen name='StingQuestion' component={StingQuestion} />
      <Stack.Screen name='SnakeSting' component={SnakeSting} />
      <Stack.Screen name='BeeSting' component={BeeSting} />
      <Stack.Screen name='StingsLearning' component={StingsLearning} />

      {/* Breathing   */}
      <Stack.Screen name='BlockQuestion' component={BlockQuestion} />
      <Stack.Screen name='CprQuestion' component={CprQuestion} />
      <Stack.Screen name='BreathYes' component={BreathYes} />  
      <Stack.Screen name='BreathNo' component={BreathNo} />  

      <Stack.Screen name='BlockLearning' component={BlockLearning} />  


      {/* Fractions   */}
      <Stack.Screen name='FractionQuestion' component={FractionQuestion} />
      <Stack.Screen name='Foot' component={Foot} />
      <Stack.Screen name='Vertebral' component={Vertebral}/>
      <Stack.Screen name='FingerFraction' component={FingerFraction}/>

      <Stack.Screen name='FractionsLearn' component={FractionsLearn}/>
        

      {/* Faints */}
        <Stack.Screen name='Faint' component={Faint1} />
        <Stack.Screen name='Faint2' component={Faint2} />
        <Stack.Screen name='Faint3' component={Faint3} />
        <Stack.Screen name='SugarAndPressure' component={SugarAndPressure} />
        <Stack.Screen name='PressureOrNot' component={PressureOrNot} />

        <Stack.Screen name='Chbreath' component={ChildBreathYes} />

        <Stack.Screen name='Faintinglearn' component={Faintinglearn} />
        
      {/* Posioning */}

      <Stack.Screen name='Poison_Question'  component={PoisonQuestion} />
      <Stack.Screen name='GazPoisonYes' component={GazPoisonYes} />
      <Stack.Screen name='GazPoisonNo' component={GazPoisonNo}/>
      <Stack.Screen name='FoodPoisonYes' component={FoodPoisonYes} />
      <Stack.Screen name='FoodPoisonNo' component={FoodPoisonNo}/>
      <Stack.Screen name='WheatPoison' component={WheatPoison}/>

      <Stack.Screen name='PoisonLearning' component={PoisonLearning}/>


      {/* Heart Attack */}
      <Stack.Screen name='HeartAttackQuestion'  component={HeartAttackQuestion} />
      <Stack.Screen name='Order1HeartAttack'  component={Order1HeartAttack} />
      <Stack.Screen name='Order2HeartAttack'  component={Order2HeartAttack} />
      <Stack.Screen name='HeartAttakLearn'  component={HeartAttakLearn} />

      {/* Burns */}

      <Stack.Screen name='Burn1'  component={Burn1} />
      <Stack.Screen name='Burn2'  component={Burn2} />
      <Stack.Screen name='Burn3'  component={Burn3} />
      <Stack.Screen name='Burnlearn'  component={Burnlearn} />

      <Stack.Screen name='Setting'  component={Settings} />

      </Stack.Navigator>

 
   
   
   

      

   </>
    // <View style={styles.container}>
    //   <Text>Open up App.js to startsd working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}




const Tab = createBottomTabNavigator()

 function TabNavigation(){
  const [LearningState , SetLearningState] = useState(false)
  return (
  
      
      <Tab.Navigator initialRouteName='Learning'  screenOptions={({route}) => ({
        tabBarIcon:({focused , color, size}) => {
          let iconName;

          if(route.name == "Learning" || route.name == "Emergency"){
            iconName= route.name == "Emergency" ? "briefcase-medical" : "book-open"  

            return    <FontAwesome5 name={iconName} size={32} style={{ color: color }} />
          }else{
            return  <Ionicons name='settings' size={32} style={{ color: color }} />
          }

          
        },
        // tabBarBackground:"#159DA9",
        tabBarActiveTintColor:"white",
        tabBarInactiveTintColor:"lightblue",
        tabBarStyle:StyleSheet.create({paddingVertical:5 , paddingBottom:5 , height:68 , backgroundColor:"#159DA9"})
        
        
      })}>
    
    <Tab.Screen name="Settings" component={Setting} options={{tabBarLabel:""}} />




      <Tab.Screen name="Learning"   options={{  tabBarLabel:"",headerShown:false}}>
      {(props) => <Home_Stack {...props} LearningState={true}  />}

      </Tab.Screen>
    
      <Tab.Screen name="Emergency" options={{tabBarLabel:"" , headerShown:false}}>
      {(props) => <Home_Stack {...props} LearningState={false}  />}

      </Tab.Screen>


    </Tab.Navigator>

   
  )
}

const AuthStack = createNativeStackNavigator()

export default function App () { 

  return (
    <NavigationContainer>
      <AuthStack.Navigator>

        <AuthStack.Screen  name='Login' component={Signin} />
        <AuthStack.Screen name='register' component={SignUp} />
        <AuthStack.Screen options={{headerShown:false}} name='rest' component={TabNavigation} />
     
      </AuthStack.Navigator>
    </NavigationContainer>
  )

 }