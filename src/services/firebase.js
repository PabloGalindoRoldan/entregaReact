
import { initializeApp } from "firebase/app";
import { getFirestore, writeBatch, documentId, collection, getDocs, getDoc, doc, query, where, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBC2IJfez7WhPyhQjpPRrhGIwqICSlyOBA",
    authDomain: "vegania-7afde.firebaseapp.com",
    projectId: "vegania-7afde",
    storageBucket: "vegania-7afde.appspot.com",
    messagingSenderId: "677645305647",
    appId: "1:677645305647:web:8e1a5de96a0a4278c603da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)

export async function obtenerProductos() {

    const productsRef = collection(database, "products");
    const snapshot = await getDocs(productsRef)
    const productos = snapshot.docs.map(elem => {
        let object = elem.data();
        object.id = elem.id;
        return object
    })
    return productos
}

export async function productDetail(idParams) {
    const productsRef = collection(database, "products");
    const docRef = doc(productsRef, idParams);
    const snapshot = await getDoc(docRef);
    return { ...snapshot.data(), id: snapshot.id }
}

export async function getCategory(categoryUrl) {
    const productsRef = collection(database, "products");
    const q = query(productsRef, where("tipo", "==", categoryUrl));
    const snapshot = await getDocs(q);
    const resultado = snapshot.docs.map((elem) => {
        let producto = elem.data();
        producto.id = elem.id;
        return producto;
    })
    return resultado
}

export async function createOrder(order) {
    const orderRef = collection(database, "order");
    let respuesta = await addDoc(orderRef, order);
    return respuesta.id;
}

export async function createOrder_WithStockControl(order) {
    const orderRef = collection(database, "order");
    const productsRef = collection(database, "products");
    const batch = writeBatch(database);
    const arrayIds = order.items.map((item) => item.id);
    const q = query(productsRef, where(documentId(), "in", arrayIds));
    const querySnaphot = await getDocs(q);
    const docsToUpdate = querySnaphot.docs;
    let itemsSinStock = [];

    docsToUpdate.forEach((doc) => {
        let cantidad = doc.data().cantidad;
        let itemInCart = order.items.find((item) => item.id === doc.id);
        let countInCart = itemInCart.count;
        let nuevaCantidad = parseInt(cantidad - countInCart);
        if (nuevaCantidad < 0) {
            itemsSinStock.push(doc.id);
        } else {
            batch.update(doc.ref, { cantidad: nuevaCantidad });
        }
    });
    if (itemsSinStock.length >= 1)
        throw new Error(
            `Stock no disponible para el producto para los productos ${itemsSinStock}`
        );

    await batch.commit();

    let newOrder = await addDoc(orderRef, order);
    return newOrder.id;
}

export default database

