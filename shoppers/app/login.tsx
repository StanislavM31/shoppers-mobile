import { Link, Stack } from 'expo-router';
import { StyleSheet, Text } from 'react-native';

export default function login() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />

        <Link href="/" style={styles.link}>
          <Text >u r in login page</Text>
        </Link>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
