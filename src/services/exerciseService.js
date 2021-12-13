import { db } from '../firebase';
import { collection, addDoc, getDocs, doc, getDoc, setDoc, deleteDoc, updateDoc, arrayUnion, arrayRemove }
    from "@firebase/firestore";
import * as idGenerator from '../utils/idGenerator';

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

    findExercise(id)
        .then(exercise => {
            const payload = { ...exercise, name, imageUrl, description };
            setDoc(docRef, payload);
        });
}

export const deleteExercise = async (id) => {
    await deleteDoc(doc(db, "exercises", id));
}

export const addCommentToExercise = async (exerciseId, author, content) => {
    const docRef = doc(db, "exercises", exerciseId);
    let id = idGenerator.generateId();

    let payload = { id, author, content };

    await updateDoc(docRef, {
        comments: arrayUnion(payload)
    });
}

export const extractComments = async (exerciseId) => {
    return findExercise(exerciseId)
        .then(exercise => exercise.comments);
}

export const deleteComment = async (exerciseId, commentId) => {
    const docRef = doc(db, "exercises", exerciseId);

    extractComments(exerciseId)
        .then(comments => {
            let comment = comments.find(c => c.id === commentId);
            updateDoc(docRef, {
                comments: arrayRemove(comment)
            });
        });
}