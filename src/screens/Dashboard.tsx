import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView
} from "react-native";
import Header from "../components/Header";
import Section from "../components/Section";

const DashboardView = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <Header></Header>
            <View style={styles.wrapper}> 
            <Section></Section>
            <Section></Section>
            <Section></Section>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex:1,
        backgroundColor : 'white'
    }
});

export default DashboardView;