import { collection, doc, addDoc, getDocs, getDoc, setDoc, deleteDoc } 
from "@firebase/firestore";
import db from '../firebase';

export const getAllArticles = async () => {

    let articles = [];

    const querySnapshot = await getDocs(collection(db, 'articles'));

    querySnapshot.forEach((doc) => {
        let article = { ...doc.data(), id: doc.id };
        articles.unshift(article);
    });

    return articles;
}

export const createNewArticle = async (title, imageUrl, content, categoryId) => {
    const collectionRef = collection(db, "articles");
    let payload = { title, imageUrl, categoryId, content };

    return await addDoc(collectionRef, payload);
}

export const findArticle = async (id) => {
    const docRef = doc(db, "articles", id);
    const docSnap = await getDoc(docRef);

    let article = docSnap.data();
    
    return article;
}

export const editArticle = async (id, title, imageUrl, content) => {
    const docRef = doc(db, "articles", id);
    const payload = { title, imageUrl, content};
    
    setDoc(docRef, payload);
}

export const deleteArticle = async (id) => {
    await deleteDoc(doc(db, "articles", id));
}