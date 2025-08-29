import {Client,Databases,ID,Query} from "react-native-appwrite";

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

const client = new Client()
                .setEndpoint('https://syd.cloud.appwrite.io/v1')
                .setProject(process.env.EXPO_APPWRITE_PROJECT_ID);

const database = new Databases(client);
export const updateSearchCount = async (query:string,movie:Movie) => { 
  const result = await database.listDocuments(DATABASE_ID,COLLECTION_ID,[
     Query.equal('searchTerm',query)
  ]);
   console.log(result);
   if(result.documents.length>0){
      const existingMovie = result.documents[0];
      await database.updateDocument(DATABASE_ID,COLLECTION_ID,existingMovie,{count:existingMovie.count + 1});
   }
   else{
      await database.createDocument(DATABASE_ID,COLLECTION_ID,ID.unique())
   }
 }   

