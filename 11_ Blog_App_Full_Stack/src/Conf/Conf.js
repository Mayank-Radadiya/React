const conf = {
  AppWriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  AppWriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  AppWriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  AppWriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  AppWriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};
// Now we can use this all backend id in access react through this javaScript File.
//

export default conf;
