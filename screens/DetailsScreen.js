import { useRoute,useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect } from "react";
import { View, Text,StyleSheet, ScrollView, Image} from "react-native";


const DetailsScreen = ({navigation}) => {
    const {params} = useRoute()
    // const navigation = useNavigation()


    useEffect(()=>{
        navigation.setOptions({
            title: params ? `${params.strCategory} - ${params.strGlass}` : 'Details' ,
        })

    },[navigation])


  return (
    <View className="bg-white">
    <ScrollView className=' bg-white' showsVerticalScrollIndicator={false}   >
        <View className="w-full h-[340px]">
            <Image source={{uri:params.strDrinkThumb}} className='w-full h-full shadow-xl'  resizeMode="cover"  />
        </View>

        <View className="flex-row items-center bg-white justify-between -mt-8 px-3 rounded-3xl pt-8">
            <Text className="text-xl font-bold text-white bg-pink-400 tracking-[1px] p-2 rounded-lg">Category :</Text>
            <Text className="text-xl font-bold text-gray-800 ">{params.strCategory}</Text>
        </View>
        <View className="flex-row items-center bg-white justify-between mt-4 px-3">
            <Text className="text-xl font-bold text-white bg-pink-400 tracking-[1px] p-2 rounded-lg">Glass :</Text>
            <Text className="text-xl font-bold text-gray-800 ">{params.strGlass}</Text>
        </View>
        <View className="flex-row items-center bg-white mb-10 justify-between mt-4 px-3">
            <Text className="text-xl font-bold text-white bg-pink-400 tracking-[1px] p-2 rounded-lg">Type :</Text>
            <Text className="text-xl font-bold text-gray-800 ">{params.strAlcoholic}</Text>
        </View>
        <View className="items-center  mt-1 px-3">
            <Text className="text-xl font-bold text-white bg-pink-400 tracking-[1px] p-2 rounded-lg">Instructions :</Text>
            <Text className="text-xl font-bold text-gray-600 mt-6">{params.strInstructions}</Text>
        </View>
        <View className="flex-row items-center bg-white mb-5 justify-between mt-5 px-3">
            <Text className="text-xl font-bold text-white bg-pink-400 tracking-[1px] p-2 rounded-lg">Ingredient1 :</Text>
            <Text className="text-xl font-bold text-gray-800 ">{params?.strIngredient1}</Text>
        </View>
        <View className="flex-row items-center bg-white mb-5 justify-between mt-1 px-3">
            <Text className="text-xl font-bold text-white bg-pink-400 tracking-[1px] p-2 rounded-lg">Ingredient2 :</Text>
            <Text className="text-xl font-bold text-gray-800 ">{params?.strIngredient2}</Text>
        </View>
        <View className="flex-row items-center bg-white mb-10 justify-between mt-1 px-3">
            <Text className="text-xl font-bold text-white bg-pink-400 tracking-[1px] p-2 rounded-lg">Ingredient3 :</Text>
            <Text className="text-xl font-bold text-gray-800 ">{params?.strIngredient3}</Text>
        </View>
      
    </ScrollView>

    </View>
  );
};

const styes = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default DetailsScreen;
