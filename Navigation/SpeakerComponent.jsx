
import * as Speech from 'expo-speech'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import  innerText  from 'react-innertext';

export default function SpeakerComponent({Custom_ref , styles}){
   const speaker_func = async () => {

   
        if( await Speech.isSpeakingAsync()){
          await Speech.stop()
          return
        }
        
        Speech.speak( innerText(Custom_ref.current._internalFiberInstanceHandleDEV.memoizedProps.children), {
          language:"ar-SA"
        })
      }
    return (
        <FontAwesome5 onPress={speaker_func} name='volume-up'
        size={30} style={styles ? styles : { color: '#159da9', marginTop: 35, marginLeft: 20 }} />
    )
 
}