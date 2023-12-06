import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc ,doc } from 'firebase/firestore';
import { firedb as db } from '../db'; // Replace with your Firebase configuration

const ReadWriteFireStore = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const collectionRef = collection(db, 'counts'); // Replace with your collection name

      // Subscribe to real-time updates
      const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
        const updatedData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setData(updatedData);
      });

      return () => {
        // Unsubscribe when the component unmounts
        unsubscribe();
      };
    };

    fetchData();
  }, []); // Run only on component mount and unmount

  const addInitialData = async () => {
    try {
      // Add initial data to Firestore
      await addDoc(collection(db, 'counts'), { count: 1 });
      console.log('Initial data added successfully');
    } catch (error) {
      console.error('Error adding initial data:', error);
    }
  };

  // Update data function (similar to previous example)
  const updateData = async (itemId) => {
    try {
      // Update data in Firestore
      const dataDocRef = doc(db, 'counts', itemId); // Replace with your collection name
      await updateDoc(dataDocRef, { count: new Date().getSeconds() }); // Adjust the update logic
      console.log('Data updated successfully');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const deleteDate = async (itemId) => {
    try {
        const docData = doc(db,"counts",itemId)
        await deleteDoc(docData)
        console.log("Data is deleted")
    } catch (error) {
        console.error("Error on delete",error)
    }  
  }

  return (
    <div>
      <h1>Real-time Data:</h1>
      <button onClick={addInitialData}>Add Initial Data</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.count}
            <button onClick={() => updateData(item.id)}>Update</button>
            <button onClick={() => deleteDate(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReadWriteFireStore;

