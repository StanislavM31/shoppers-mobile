import Pngwing from '@/assets/Pngwing';

import { Link, Stack, useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


export default function NotFoundScreen({ navigation }: any) {
    const router = useRouter();
    return (
        <TouchableOpacity
           onPress={()=>{router.replace('/login')}}
            style={{
                flex: 1,
                backgroundColor: '#F9EF05',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 41,
            }}>
            <Text style={styles.text}>WELCOME to ShOPPERS</Text>
            <Pngwing />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Inter',
        fontSize: 36,
        fontWeight: 600,
        textAlign: 'center',
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
});
