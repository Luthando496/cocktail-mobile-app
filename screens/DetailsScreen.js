import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text,StyleSheet, ScrollView, Image} from "react-native";

const DetailsScreen = () => {


    const {params} = useRoute()
  return (
    <ScrollView>
        <View className="w-full h-[200px]">
            <Image source={{uri:params.strDrinkThumb}} className='w-full h-full'  resizeMode="cover"  />
        </View>
      
    </ScrollView>
  );
};

const styes = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default DetailsScreen;
