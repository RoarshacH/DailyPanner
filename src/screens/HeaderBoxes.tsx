import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Platform  } from "react-native";



const Header = ()=>{

    return(

        <SafeAreaView style ={styles.wrapper} >
            <Text> Select your Task Priority</Text>
        </SafeAreaView>

    )

} 

const styles = StyleSheet.create({

    wrapper:{
        
        width:'100%',
        height:'10%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#eee"
 
      },

  });



export default Header