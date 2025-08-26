import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import useFetch from '@/services/useFetch';
import { fetchMovies } from '@/services/api';
import MoviesDetails from '../movies/[id]';


const Search = () => {
  const router = useRouter();
  const {
    data:movies,
    loading:moviesLoading,
    error:moviesError
  } = useFetch(()=>fetchMovies({query:''}))

  return (
    <View className="flex-1 bg-purple-50">


      <FlatList data={movies} 
      renderItem={({item})=> <MoviesDetails {... item}}/>}
      keyExtrator={(item)=> item.id.toString()}
      className='px-5'
      numColumns={3}
      columnWrapperStyle={{
        justifyContent:'center',
        gap:16,
        marginVertical:16,
      }}
      />
    
    </View>
  )
}

export default Search