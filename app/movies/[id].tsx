import { View, Text, ScrollView,Image} from 'react-native'
import React from 'react'
import useFetch from '@/services/useFetch';
import { fetchMoviesDetails } from '@/services/api';
import { useLocalSearchParams } from 'expo-router';

const MoviesDetails = () => {
  const {id} = useLocalSearchParams();
  const {data:movie,loading} = useFetch(() => fetchMoviesDetails(id as string));
  return (
    <View className='bg-purple-50 flex-1'>
      <ScrollView contentContainerStyle={{paddingBottom:80}}>
      <View> 
        <Image className = 'w-full h-[550px]' resizeMode="stretch" source={{uri:`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}}/>
        <View>
          
          
        </View>
      </View>
      </ScrollView>
    </View>
  )
}

export default MoviesDetails