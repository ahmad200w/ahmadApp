import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';
const IntroToApp = () => {
  const navigation =useNavigation()
    const onboardingRef = useRef(null);

    const pages = [
        {
          backgroundColor: '#332C39',
          image: <Image  style={styles.image} source={require('../assets/image/intorPhoto/mobile.png')} />,
          title: 'HI!',
          subtitle: ' Premium Phones ',
        },
        {
          backgroundColor: '#332C39',
          image: <Image style={styles.image} source={require('../assets/image/intorPhoto/handsfree.png')} />,
          title: 'Upgrade Your Tech',
          subtitle: 'Headphones',
        },
        {
          backgroundColor: '#332C39',
          image:<Image style={styles.image} source={require('../assets/image/intorPhoto/watch.png')} />,
          title:'and Watches',
          subtitle:  <TouchableOpacity onPress={()=>navigation.navigate('login')}><Text style={styles.pressText}>Login</Text></TouchableOpacity>,
        },
      ];
      const goToLastPage = () => {
        if (onboardingRef.current) {
          onboardingRef.current.goToPage(pages.length - 1);
        }
      };
    
      // füge diese Funktion in 'onskip' ein
      const handleSkip = () => {
        goToLastPage();
      };

  return (
    <View style={{ flex: 1 }}>
<Onboarding
      ref={onboardingRef}
pages={pages}
onDone={() => console.log('Done')}
onSkip={handleSkip}
showSkip={true}
skipLabel="Skip"
doneLabel="Get Started"/>
</View>
  )
}

export default IntroToApp

const styles = StyleSheet.create({
    image:{width:400,
        height:400
    },pressText:{
      color:'#fff',
      fontSize:30,
      fontWeight:'800'
    },
})