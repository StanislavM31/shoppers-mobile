import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from '@/components/Header'
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function cart() {

    
    return <>
    <View style={{ flexDirection: 'row', gap: 60, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Text>this is cart page</Text>
        <TouchableOpacity style={styles.btn}>
					<Text style={styles.titleSign}>CHECKOUT</Text>
				</TouchableOpacity>
        </View>

    </>
}

const styles = StyleSheet.create({
    btn: {
        width: '70%',
        borderRadius: 40,
        backgroundColor: '#F9EF05',
        padding: 15,
        alignItems: 'center',
    },
    titleSign: {
        fontFamily: 'InterBold',
        fontSize: 14,
        color: ' #000000',

    },
})