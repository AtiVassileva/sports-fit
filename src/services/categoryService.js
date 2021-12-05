import { collection, getDocs } from "@firebase/firestore";
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