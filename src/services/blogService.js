import { db } from '../firebase';
import { collection, doc, addDoc, getDocs, getDoc, setDoc, updateDoc, deleteDoc, arrayUnion, arrayRemove }
    from "@firebase/firestore";
import * as idGenerator from '../utils/idGenerator';

export const getAllArticles = async () => {

    let articles = [];

    const querySnapshot = await getDocs(collection(db, 'articles'));

    querySnapshot.forEach((doc) => {
        let article = { ...doc.data(), id: doc.id };
        articles.unshift(article);
    });

    return articles;
}

export const createNewArticle = async (title, imageUrl, content, categoryId, author, date) => {
    const collectionRef = collection(db, "articles");
    let payload = { title, imageUrl, comments: [], categoryId, content, author, date };

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

    findArticle(id)
        .then(article => {
            const payload = { ...article, title, imageUrl, content };
            setDoc(docRef, payload);
        });
}

export const deleteArticle = async (id) => {
    await deleteDoc(doc(db, "articles", id));
}

export const addCommentToArticle = async (articleId, author, content) => {
    const docRef = doc(db, "articles", articleId);
    let id = idGenerator.generateId();

    let payload = { id, author, content };

    await updateDoc(docRef, {
        comments: arrayUnion(payload)
    });
}

export const extractComments = async (articleId) => {
    return findArticle(articleId)
        .then(article => article.comments);
}

export const deleteComment = async (articleId, commentId) => {
    const docRef = doc(db, "articles", articleId);

    extractComments(articleId)
        .then(comments => {
            let comment = comments.find(c => c.id === commentId);
            updateDoc(docRef, {
                comments: arrayRemove(comment)
            });
        });
}