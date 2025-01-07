import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Share from "@/assets/images/share";
import ImgBack from "@/assets/images/ImgBack";
import Product from "@/assets/images/Product";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import storage from '../../storage/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from "expo-router";
import { iProduct } from "@/interfaces";
import { useSearchParams } from "expo-router/build/hooks"; //??



export default function Detail() {
    const params: any = useLocalSearchParams();
    const [product, setProduct] = useState<any>([]);

    useEffect(() => {
        const filterStorage = storage.filter((el: iProduct) => {
            return el.id == params.id
        })
        setProduct(filterStorage[0]);
    }, [])
    const basket = [];

    const addToBasket = async () => {
        try {
            basket.push(product)
            console.log('');
            
        } catch (error: any) {
            console.error(error.message)
        }

    }


    return <>
        <View style={{ flex: 1, marginHorizontal: 30, alignItems: 'center' }}>
        <View style={{
    /* position: 'absolute', */
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 52,
/*     borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid'  */
}}>
            <TouchableOpacity onPress={() => router.replace(`/tabs/products`)}><ImgBack /></TouchableOpacity>
            <Share />
        </View>
            <View style={{ width: '100%', height: 390 }}>{product?.img}</View>
            <View style={{ gap: 14, marginBottom: 38, width: '90%', alignSelf: 'center' }}>
                <Text style={{ fontFamily: 'InterBold', fontSize: 20, }}>{product?.title}</Text>
                <Text style={{ fontFamily: 'InterBold', fontSize: 20, }}>Rs. {product?.price}</Text>
            </View>

            <TouchableOpacity style={styles.btn} onPress={addToBasket}>
                <Text style={{ fontFamily: 'InterBold', fontSize: 14, color: '#4D1717', }}>Add to Cart</Text>
            </TouchableOpacity>

            <View style={{ gap: 16 }}>
                <Text style={{ fontFamily: 'InterBold', fontSize: 14, }}>More Details</Text>
                <Text style={styles.description} > Gear up with the latest collections from
                    adidas Originals, Running, Football, Training.
                    With over 20,000+ products, you will never
                    run out of choice. Grab your favorites now.
                    Secure Payments. 100% Original Products.
                    Gear up with adidas.
                </Text>
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