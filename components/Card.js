import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View,Text, Image, TouchableOpacity} from 'react-native';


const Card = ({item}) => {
    const {navigate} = useNavigation()

    const handlePress = () => {
        navigate('Details', {...item})
    }

    return (
        <View className='w-1/2 rounded-xl m-[3px]  rounded-t-lg rounded-b-xl pb-10 bg-white mb-5' style={{elevation:20}} >
        <Image className='w-full h-32 mb-3 rounded-t-lg' resizeMode='cover' source={{uri:item.strDrinkThumb}}  />

        <View className="flex-row items-center justify-between px-3">
            <Text className=' font-light'>Category:</Text>
            <Text className='font-light'>{item.strCategory}</Text>
        </View>

        {/* <View className="flex-row mt-3 items-center justify-between px-3">
            <Text className='font-light'>Glass:</Text>
            <Text className='font-light'>{item.strGlass}</Text>
        </View> */}

        <View className="w-full mt-4 flex-row justify-center ">
            <TouchableOpacity onPress={handlePress} >
                <View  className="px-4 py-1 bg-amber-300 rounded-xl shadow-2xl">
                <Text className='font-light uppercase text-white tracking-[2px]'>Details</Text>
                </View>
            </TouchableOpacity>
        </View>

        </View>
    );
};


export default Card;