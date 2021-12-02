import { onSnapshot, collection } from "@firebase/firestore";
import db from '../firebase';

export const getAllCategories = () => {
    let categories = [];

    onSnapshot(collection(db, 'Categories'),
        (snapshot) => snapshot.docs.forEach((doc) => {
            let category = { ...doc.data(), id: doc.id };
            categories.unshift(category);
        }));

    return categories;
}