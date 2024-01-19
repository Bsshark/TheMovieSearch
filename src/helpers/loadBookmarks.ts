import { BookmarkData } from './../interfaces/movieInterfaces';
import { collection, getDocs } from "firebase/firestore/lite";
import {  FirebaseDB } from "../firebase/config";


export const loadBookmarks = async(uid: string) => {
    if(!uid) throw new Error('El usuario no está establecido');
    console.log(uid)
    const collectionRef = collection(FirebaseDB, `${uid}/bookmarks/moviesId`);
    const docs = await getDocs(collectionRef);

    const bookmarks = [] as BookmarkData[];
    docs.forEach(doc => {
        bookmarks.push({id:doc.data().movieId, title:doc.data().title});
    });
    return bookmarks;
}
