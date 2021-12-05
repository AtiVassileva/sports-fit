import { collection, addDoc, getDocs } from "@firebase/firestore";
import db from '../firebase';

export const getAllDiets = async () => {
    let diets = [];

    const querySnapshot = await getDocs(collection(db, 'diets'));

    querySnapshot.forEach((doc) => {
        let diet = { ...doc.data(), id: doc.id };
        diets.unshift(diet);
    });

    return diets;
}

export const createNewDiet = async (name, imageUrl, description) => {
    const collectionRef = collection(db, "diets");
    let payload = { name, imageUrl, description };

    await addDoc(collectionRef, payload);
}