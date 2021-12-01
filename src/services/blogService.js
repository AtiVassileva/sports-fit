import { collection, addDoc } from "@firebase/firestore";
import db from '../firebase';

export const createNewArticle = 
async (title, imageUrl, content, categoryId, ) => {
    const collectionRef = collection(db, "articles");
    let payload = { title, imageUrl, categoryId, content };

    await addDoc(collectionRef, payload);
}