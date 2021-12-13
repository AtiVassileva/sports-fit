import {db} from '../firebase';
import { collection, addDoc, getDocs, doc, getDoc, setDoc, deleteDoc, arrayUnion, arrayRemove, updateDoc } from "@firebase/firestore";
import * as idGenerator from '../utils/idGenerator';


export const getAllDiets = async () => {
    let diets = [];

    const querySnapshot = await getDocs(collection(db, 'diets'));

    querySnapshot.forEach((doc) => {
        let diet = { ...doc.data(), id: doc.id };
        diets.unshift(diet);
    });

    return diets;
}

export const createNewDiet = async (name, imageUrl, description, author, date) => {
    const collectionRef = collection(db, "diets");
    let payload = { name, imageUrl, description, author, date };

    return await addDoc(collectionRef, payload);
}

export const findDiet = async (id) => {
    const docRef = doc(db, "diets", id);
    const docSnap = await getDoc(docRef);

    let diet = docSnap.data();

    return diet;
}

export const getLatestDiets = async () => {
    return await getAllDiets()
        .then(diets => diets.slice(0, 3));
}

export const editDiet = async (id, name, imageUrl, description) => {
    const docRef = doc(db, "diets", id);

    findDiet(id)
    .then(diet => {
        const payload = { ...diet, name, imageUrl, description};
        setDoc(docRef, payload);
    });
}

export const deleteDiet = async (id) => {
    await deleteDoc(doc(db, "diets", id));
}

export const addCommentToDiet = async (dietId, author, content) => {
    const docRef = doc(db, "diets", dietId);
    let id = idGenerator.generateId();
    
    let payload = { id, author, content };

    await updateDoc(docRef, {
        comments: arrayUnion(payload)
    });
}

export const extractComments = async (dietId) => {
    return findDiet(dietId)
        .then(diet => diet.comments);
}

export const deleteComment = async(dietId, commentId) => {
    const docRef = doc(db, "diets", dietId);

    extractComments(dietId)
    .then(comments => {
        let comment = comments.find(c => c.id === commentId);
        updateDoc(docRef, {
            comments: arrayRemove(comment)
        });
    });
}