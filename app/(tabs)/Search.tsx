import { View, Text, FlatList,Image} from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import useFetch from '@/services/useFetch';
import { fetchMovies } from '@/services/api';
import MoviesDetails from '../movies/[id]';
import SearchBar from '@/components/SearchBar';
import { ActivityIndicator } from 'react-native';


const Search = () => {
  const router = useRouter();
  const [searchQuery,setSeachQuery] = useState('');
  const {
    data:movies,
    loading:moviesLoading,
    error:moviesError
  } = useFetch(()=>fetchMovies({query:searchQuery}),false);

  return (
    <View className="flex-1 bg-primary">
      <Image source={} className="flex-1 absolute w-full z-0" resizeMode="cover"/>
     <FlatList data = {movies} 
      renderItem={({items})=><MoviesCard{... item}/>}
      keyExtractor={(item)=>item.id.toString()}
      className="px-5"
      numColumns={3}
      columnWrapperStyle={{
        justifyContent:'center',
        gap:16,
        marginVertical:16
      }}
      contentContainerStyle={{paddingBottom:100}}
      ListHeaderComponent={
        <>
        <View className="w-full flex-row justify-center mt-20 items-center">
          {/* <Image source={} className="w-12 h-10"/> */}
        </View>
        <View className="my-5">
          <SearchBar 
          placeholder="Search Movies ..."
          value={searchQuery}
          onChangeText={(text:string)=>setSeachQuery}
          />
        </View>
        {moviesLoading && (
          <ActivityIndicator size="large" color="#0000fff" className="my-3"/>
        )}
        {moviesError && (
          <Text className="text-red-500 px-5 my-3">
            Error:{moviesError.message}
            </Text>
        )}
        {!moviesLoading && !moviesError && 'SEARCH TERM'.trim() && movies?.length>0}
        </>
      }
      />
    
    </View>
  )
}

export default Search