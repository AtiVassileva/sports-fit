import { collection, addDoc, getDocs, doc, getDoc, setDoc, deleteDoc} 
from "@firebase/firestore";
import {db} from '../firebase';

export const getAllExercises = async () => {
    let exercises = [];

    const querySnapshot = await getDocs(collection(db, 'exercises'));

    querySnapshot.forEach((doc) => {
        let exercise = { ...doc.data(), id: doc.id };
        exercises.unshift(exercise);
    });

    return exercises;
}

export const createNewExercise = async (name, imageUrl, categoryId, description, author, date) => {
    const collectionRef = collection(db, "exercises");
    let payload = { name, imageUrl, categoryId, description, author, date };

    return await addDoc(collectionRef, payload);
}

export const findExercise = async (id) => {
    const docRef = doc(db, "exercises", id);
    const docSnap = await getDoc(docRef);

    let exercise = docSnap.data();
    
    return exercise;
}

export const getLatestExercises = async () => {
    return await getAllExercises()
    .then(exercises => exercises.slice(0, 3));
}

export const editExercise = async (id, name, imageUrl, description) => {
    const docRef = doc(db, "exercises", id);
    const payload = { name, imageUrl, description};
    
    setDoc(docRef, payload);
}

export const deleteExercise = async (id) => {
    await deleteDoc(doc(db, "exercises", id));
}