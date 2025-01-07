import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ImgBack from "@/assets/images/ImgBack";
import { Router } from "expo-router";
import { iProduct } from "@/interfaces";
import arrBasket from "@/storage/basket";

export default function basket() {
  const [goods, setGoods] = useState<iProduct[]>([]);

  useEffect(() => {
    setGoods(arrBasket);
  }, []);
  const router = useRouter();

  return (
    <>
      <Header />
      <View style={{ flex: 1, alignItems: "center", gap: 62 }}>
        <View style={{ flexDirection: "column", gap: 60, justifyContent: "center", flexWrap: "wrap"}}>
          <View style={{  flexDirection: "column", justifyContent: "space-between" }}>
            {goods.map((item, index) => (
              <div key={index}>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
              </div>
            ))}
          <TouchableOpacity style={[styles.btn, { padding: 10}]}>
            <Text style={styles.titleSign}>CHECKOUT</Text>
          </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => router.replace(`/tabs/products`)}>
          <ImgBack />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 40,
    backgroundColor: "#F9EF05",
    padding: 15,
    alignItems: "center",
  },
  titleSign: {
    fontFamily: "InterBold",
    fontSize: 14,
    color: " #000000",
  },
});
