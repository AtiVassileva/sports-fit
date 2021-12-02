import { onSnapshot, collection, addDoc } from "@firebase/firestore";
import db from '../firebase';

export const getAllDiets = () => {
    let diets = [];

    onSnapshot(collection(db, 'diets'),
        (snapshot) => snapshot.docs.forEach((doc) => {
            let diet = { ...doc.data(), id: doc.id };
            diets.unshift(diet);
        }));

    return diets;
}

export const createNewDiet = async (name, imageUrl, description) => {
    const collectionRef = collection(db, "diets");
    let payload = { name, imageUrl, description };

    await addDoc(collectionRef, payload);
}