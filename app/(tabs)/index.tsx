import SearchBar from "@/components/SearchBar";
import "../../global.css"
import { Image, ScrollView, Text, View } from "react-native";
import { useRouter } from "expo-router";
 
export default function App() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-purple-50">
      {/* TODO: image source is missing */}
       {/* <Image source={} className="absolute w-full z-0"/> */}

    <ScrollView className="flex-1 px-5" 
     showsVerticalScrollIndicator={false} 
     contentContainerStyle={{minHeight:"100%" , paddingBottom:10}}>
      {/* <Image source={} className="w-12 h-10 mt-20 mb-5 mx-auto"/> */}
      <View className="flex-1 mt-5">
      <SearchBar 
       onPress = { () => router.push("/(tabs)/Search")}
        placeholder = "Search for a movie"
        />
      </View>
    </ScrollView>

    </View>
  );
}