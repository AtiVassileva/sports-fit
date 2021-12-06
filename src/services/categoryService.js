import { collection, getDocs, doc, getDoc } from "@firebase/firestore";
import db from '../firebase';

export const getAllCategories = async () => {
    let categories = [];

    const querySnapshot = await getDocs(collection(db, 'Categories'));

    querySnapshot.forEach((doc) => {
        let category = { ...doc.data(), id: doc.id };
        categories.unshift(category);
    });

    return categories;
}

export const findCategory = async (id) => {
    const docRef = doc(db, "Categories", id);
    const docSnap = await getDoc(docRef);

    let category = docSnap.data();
    
    return category;
}