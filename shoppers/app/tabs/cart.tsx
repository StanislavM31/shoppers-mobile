import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
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
      <View style={{ flex: 1, alignItems: "center", gap: 62 }}>
        <Header />

        <ScrollView style={{ width: "100%" }}>
          <View
            style={{gap: 40,flexWrap: "wrap",justifyContent: "center",width: "90%", marginLeft: "5%"}}>
            {goods.map((el: iProduct, index) => (
              <View key={index} style={styles.item}>
                <View style={{width: 136, height: 113, borderRadius: 25, overflow: "hidden"}}>
                  {el?.img}
                </View>
                <View style={{ gap: 13 }}>
                  <Text style={[styles.text, {marginRight: "2%" }]}>{el?.title}</Text>
                  <View
                    style={{flexDirection: "row",gap: 10,alignItems: "center",justifyContent: "center"}}
                  ></View>

                  <Text style={[styles.text, {  marginRight: "2%" }]}>Rs. {el?.price}</Text>
                </View>
              </View>
            ))}
          </View>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.titleSing}>CHECKOUT</Text>
          </TouchableOpacity>
        </ScrollView>
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
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 40,
    alignItems: "center",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 4,
  },
  text: {
    fontFamily: "InterSemiBold",
    fontSize: 12,
    color: "black",
  },
  textSmall: {
    fontFamily: "InterSemiBold",
    fontSize: 12,
    color: "#827D7D",
  },
  titleSing: {
    fontFamily: "InterBold",
    fontSize: 14,
    color: "#000000",
  },
});
