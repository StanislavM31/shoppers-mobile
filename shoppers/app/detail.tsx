import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Share from "@/assets/images/share";
import ImgBack from "@/assets/images/ImgBack";
import Product from "@/assets/images/Product";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import storage from '../storage/index';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Detail() {
    /* 25:10 */
    return <>
        <View style={{ flex: 1, marginHorizontal: 30, alignItems: 'center' }}>
            <View>
            <Product style={{ width: 100, height: 100 }} />

                <ImgBack/>
                <Share/>
            </View>
        </View >
    </>
}

const styles = StyleSheet.create({
    btn: {
        marginTop: 68,
        marginBottom: 42,
        borderRadius: 40,
        backgroundColor: '#F9EF05',
        alignContent: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        alignItems: 'center',
        width: '90%',
    },
    description: {
        fontFamily: 'InterLight',
        fontSize: 14,
        color: '#AAA8A8',
        paddingHorizontal: 12,
    }
})