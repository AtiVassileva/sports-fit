import { collection, addDoc, getDocs, doc, getDoc } from "@firebase/firestore";
import db from '../firebase';

export const getAllExercises = async () => {
    let exercises = [];

    const querySnapshot = await getDocs(collection(db, 'exercises'));

    querySnapshot.forEach((doc) => {
        let exercise = { ...doc.data(), id: doc.id };
        exercises.unshift(exercise);
    });

    return exercises;
}

export const createNewExercise = async (name, imageUrl, categoryId, description) => {
    const collectionRef = collection(db, "exercises");
    let payload = { name, imageUrl, categoryId, description };

    await addDoc(collectionRef, payload);
}

export const findExercise = async (id) => {
    const docRef = doc(db, "exercises", id);
    const docSnap = await getDoc(docRef);

    let exercise = docSnap.data();
    
    return exercise;
}