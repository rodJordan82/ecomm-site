import firestore from "../config/firestore";

const cleanDocument = (doc) => ({ id: doc.id, ...doc.data() });

// Get all Rodents
export const getAllTshirts = async () => {
    const raw = await firestore.collection("tshirts").get();
    console.log(raw); // QuerySnapshot
    console.log(raw.docs); // [QueryDocumentSnapshot]
    console.log(raw.docs[0].id, raw.docs[0].data()); // string, tshirt object

    const cleaned = raw.docs.map(cleanDocument);

    return cleaned;
};

// Get tshirt by id
export const findByIdTshirt = async (id) => {
    const documentSnapshot = await firestore
        .collection("tshirts")
        .doc(id)
        .get();

    if (!documentSnapshot.exists) {
        return null;
    }

    const cleaned = cleanDocument(documentSnapshot);

    console.log(cleaned);

    return cleaned;
};

// Creating a tshirt record
export const createRecordTshirt = async (data) => {
    await firestore.collection("tshirts").add(data);
};
