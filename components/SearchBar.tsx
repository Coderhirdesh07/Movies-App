import { View, Text, TextInput } from 'react-native'
import React from 'react'


interface Props{
  placeholder:string;
  onPress?:()=>void;
}

const SearchBar = ({placeholder,onPress}:Props) => {
  return (
    <View className="flex-row items-center bg-blend-darken rounded-full px-5 py-4">
      
      <TextInput 
         onPress={onPress} 
         placeholder={placeholder} 
         value="" onChangeText={()=>{}} 
         placeholderTextColor=""
         className="flex-1 ml-2 text-white"
         />
    </View>
  )
}

export default SearchBar