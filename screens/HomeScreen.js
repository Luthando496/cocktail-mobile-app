import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  ActivityIndicator
} from "react-native";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import Card from "../components/Card";

const HomeScreen = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchRandom = async () => {
      try {
        const { data } = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
        );
        setCocktails(data.drinks);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRandom();
  }, []);

  return (
    <SafeAreaView className='bg-white' style={style.flex}>
      <View className="mt-8  flex-1 pb-20 mb-20">
        <View
          style={{ elevation: 20 }}
          className="flex-row px-4 justify-between rounded-b-xl py-2 items-center bg-pink-100 w-full"
        >
          <Text className="text-2xl text-amber-500  uppercase font-bold">
            Cock{" "}tails
          </Text>
          <View className="h-16 w-16">
            <Image
              className="w-full h-full rounded-full"
              source={{
                uri: "https://i.pinimg.com/564x/e4/9d/5b/e49d5b9c4388127413a462ff6e7fcb7c.jpg",
              }}
            />
          </View>
        </View>

        {/* search bar */}
        <View className="flex-row mt-3 items-center mx-4 pb-2">
          <View className="flex-row flex-1 items-center p-3 rounded-full border-amber-400 border">
            <Feather name="search" size={27} color="gray" />
            <TextInput
              placeholder="Search Your favourite Cocktails"
              className="ml-3 flex-1 text-gray-500"
            />
          </View>
        </View>
        {/* end */}

        <View className="mt-4 w-full   px-1">
          {cocktails.length > 0 ? (
            <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={<View className='w-10' ></View>}
              numColumns={2}
              data={cocktails}
              keyExtractor={(item) => item.idDrink}
              renderItem={({ item }) => {
                return <Card item={item} />;
              }}
            ></FlatList>
          ) : (
            <View className="justify-center flex-1 mt-20 items-center">
                <ActivityIndicator   size="large" color="#00ff00"  />
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default HomeScreen;
