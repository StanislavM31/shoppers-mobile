import { Link } from 'expo-router'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Login() {

    return (
        <>
            <View style={{ alignItems: 'center', gap: 67, backgroundColor: 'white', flex: 1 }}>
                <View style={{ width: '90%', alignContent: 'center', marginLeft: 40, marginTop: 120 }}>
                    <Text style={{ fontFamily: 'InterRegular', fontSize: 24, color: '#000000' }}>Welcome back!</Text>
                    <Text style={{ fontFamily: 'InterRegular', fontSize: 12, color: '#606060' }}>Login with username & password</Text>
                </View>
                <View style={styles.wrapperInp}>
                    <Text style={{ gap: 12, width: '100%' }}>Username</Text>
                    <TextInput style={styles.inp}></TextInput>
                    <Text style={{ fontFamily: 'InterBold', fontSize: 14, color: '#000000' }}>Password</Text>
                    <TextInput style={styles.inp} secureTextEntry={false}></TextInput>
                </View>

                <View style={{ gap: 12, width: '100%' }}>
                    
                </View>

                <TouchableOpacity style={styles.btn} >
                    <Text style={styles.titleSign}>SiGN IN</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, justifyContent: 'center' }}>
                    <Text style={[styles.textFooter, { color: '#000000' }]}>Create a new account?</Text>
                    <Link href={'/signup'}>
                        <Text style={[styles.textFooter, { color: '#120EDB', textDecorationLine: 'underline' }]}>Sign Up</Text>
                    </Link>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    wrapperInp: {
        width: '90%',
        alignItems: 'flex-start',
        borderRadius: 20,
        borderColor: '#CECECE',
        borderWidth: 3,
        gap: 24,
        paddingHorizontal: 36,
        paddingVertical: 36,
    },
    inp: {
        width: '100%',
        borderRadius: 20,
        borderColor: '#CECECE',
        borderWidth: 2,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    btn: {
        width: '100%',
        borderRadius: 40,
        backgroundColor: '#F9EF05',
        padding: 15,
        alignItems: 'center',
    },
    titleSign: {
        fontFamily: 'InterBold',
        fontSize: 14,
        color: '#D04444',
    },
    textFooter: {
        fontFamily: 'InterLight',
        fontSize: 14,
    }
})

