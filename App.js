import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


  import Signin from './screens/SignIn';
  import SignUp from './screens/SignUp';
  
import DownBar from './Navigation/DownBar';










const AuthStack = createNativeStackNavigator()

export default function App () { 

  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        
      <AuthStack.Screen options={{headerShown:false}} name='rest' component={DownBar} />
        <AuthStack.Screen  name='Login' component={Signin} />
        <AuthStack.Screen name='register' component={SignUp} />
       


      </AuthStack.Navigator>
    </NavigationContainer>
  )

 }