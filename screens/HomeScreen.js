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
import {Searchbar} from 'react-native-paper'
// import { SearchBar } from "react-native-screens";




const HomeScreen = () => {
  const [cocktails, setCocktails] = useState([]);
  const [search, setSearch] = useState('');
  let result;
  
  useEffect(() => {
    const fetchRandom = async () => {
      try {
        const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search ? search  : 'margarita'}`
        );
       if(data.drinks === null){
        setCocktails([])
        return;
       }else{
        setCocktails(data.drinks);

       }
      } catch (err) {
        console.log(err);
      }
    };
    fetchRandom();
  }, [search]);

  const handleChange =async(name)=>{
    setSearch(name)
  }




  if(cocktails.length > 0){
    result = <FlatList
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
    />
  }else if(cocktails.length === 0){
    result = <View className="justify-center  mt-20 items-center">
                <Text className='text-2xl font-extrabold text-red-500'>No result Found!!</Text>
            </View>
  }else{
    result = <View className="justify-center flex-1 mt-20 items-center">
                <ActivityIndicator   size="large" color="#00ff00"  />
            </View>
  }




  

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

        <View  className="flex-row  items-center px-4 py-2 bg-pink-100">
            <Searchbar
              placeholder="Search Your favourite Cocktails"
              value={search}
              onChangeText={handleChange}
              className="ml-3 flex-1 text-sky-500 border border-sky-400"
            />
        </View>
        {/* end */}

        <View className="mt-4 w-full   px-1">
          {result}
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
