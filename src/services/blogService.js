import { onSnapshot, collection, addDoc } from "@firebase/firestore";
import db from '../firebase';

export const getAllArticles = () => {
    let articles = [];

    onSnapshot(collection(db, 'articles'),
        (snapshot) => snapshot.docs.forEach((doc) => {
            let article = { ...doc.data(), id: doc.id };
            articles.unshift(article);
        }));

    return articles;
}

export const createNewArticle = async (title, imageUrl, content, categoryId,) => {
        const collectionRef = collection(db, "articles");
        let payload = { title, imageUrl, categoryId, content };

        await addDoc(collectionRef, payload);
    }