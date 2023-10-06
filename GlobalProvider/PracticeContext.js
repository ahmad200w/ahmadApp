import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'

const PracticeContext = ({childern}) => {
    const Context =useContext();
    const [isLoding ,setIsLoding]=useState(false)
  return (
    <Context.provider value={{
        isLoding,setIsLoding

    }} >
      {childern}
   
      </Context.provider>
  )
}

export default PracticeContext

const styles = StyleSheet.create({})