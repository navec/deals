import { collection, doc, getDoc, getDocs } from "@firebase/firestore";
import { firestore } from "./firebase";

export enum Collection {
  PRODUCTS = "products",
}

const getAllDocs = async (collectionName: Collection) => {
  const result: any[] = [];
  const querySnapshot = await getDocs(collection(firestore, collectionName));
  querySnapshot.forEach((doc) => {
    result.push(doc.data());
  });

  return result;
};

const getOneDoc = async (
  collectionName: Collection,
  documentId: string
): Promise<any> => {
  const docSnap = await getDoc(doc(firestore, collectionName, documentId));
  return docSnap.data();
};

export { getAllDocs, getOneDoc };
