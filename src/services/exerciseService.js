import { onSnapshot, collection, addDoc } from "@firebase/firestore";
import db from '../firebase';

export const getAllExercises = () => {
    let exercises = [];

    onSnapshot(collection(db, 'exercises'),
        (snapshot) => snapshot.docs.forEach((doc) => {
            let exercise = { ...doc.data(), id: doc.id };
            exercises.unshift(exercise);
        }));

    return exercises;
}

export const createNewExercise = async (name, imageUrl, categoryId, description) => {
    const collectionRef = collection(db, "exercises");
    let payload = { name, imageUrl, categoryId, description };

    await addDoc(collectionRef, payload);
}