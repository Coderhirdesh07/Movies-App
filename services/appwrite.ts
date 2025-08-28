import {Client,Databases,ID,Query} from "react-native-appwrite";
const DATABASE_ID=process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID;

const client = new Client()
                .setEndpoint()
                .setProject();

const databse = new Databases(client)
export const updateSearchCount = async (query:string,movie:Movie) => { ... }               

// export const getTrendingMovies = async() : Promise<TrendingMovie[] | undefined>{
//   try{

//   }
//   catch(error){
//     console.log('Error occured');
//   }
// }