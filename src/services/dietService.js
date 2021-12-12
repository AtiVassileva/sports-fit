import { collection, addDoc, getDocs, doc, getDoc, setDoc, deleteDoc } from "@firebase/firestore";
import {db} from '../firebase';

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