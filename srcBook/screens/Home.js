import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS,FONTS,images,SIZES,icons } from '../constants'
import TextView from '../components/TextView'

const Home = () => {

    const profileData = {
        name: 'Username',
        point: 200
    }

  return (
    <SafeAreaView style={styles.container}>
    {/* Header Section */}
    <View style={{ height: 200 }}>
        <TextView name={profileData.name}
        point={profileData.point}/>
       
    </View>

    {/* Body Section */}
    <ScrollView style={{ marginTop: SIZES.radius }}>
        {/* Books Section */}
        <View>
           
        </View>

        {/* Categories Section */}
        <View style={{ marginTop: SIZES.padding }}>
            <View>
              
            </View>
            <View>
                
            </View>
        </View>
    </ScrollView>
</SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{ 
        flex: 1,
         backgroundColor: COLORS.black
         }
})