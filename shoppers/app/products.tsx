import storage from '../storage/index'
import { iProduct } from '@/interfaces';

import { Text, View, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

import Header from '@/components/Header/index';


function Products() {
    const router = useRouter()

    const container = storage.map((el: iProduct) =>
        <View key={el.id} >
            <View style={styles.item} >
                {el?.img}
                <Text style={{ textAlign: 'center', marginTop: 10 }}>{el?.title}</Text>
                <Text style={{ textAlign: 'center' }}>{el?.price}</Text>
            </View>
        </View>
    )

    return <>
    {/* <Header/> */}
    <View style={{ gap: 62, flex: 1 }}>
        <View style={{ flexDirection: 'row', gap: 60, justifyContent: 'center', flexWrap: 'wrap' }}>
            {container}
        </View>

    </View>
    {/* <Button title='Back' onPress={()=>router.back()}/> */}
    </>
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        width: 134,
        height: 180,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4
    }
})

export default Products;