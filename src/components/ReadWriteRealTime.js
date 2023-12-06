import React, { useState, useEffect } from 'react';
import { database } from '../db'; // Replace with the correct path
import { ref, onValue, off, set } from 'firebase/database';

const ReadWriteRealTime = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const countRef = ref(database, 'count');

    const handleCountUpdate = (snapshot) => {
      if (snapshot.val() !== null) {
        setCount(snapshot.val());
      }
    };

    onValue(countRef, handleCountUpdate);

    return () => {
      // Unsubscribe from real-time updates when the component unmounts
      off(countRef, 'value', handleCountUpdate);
    };
  }, []); // Run only on component mount and unmount

  const handleSetInitialValue = () => {
    // Reference to the count node
    const countRef = ref(database, 'count');

    // Use set to set the initial value
    set(countRef, 1)
      .then(() => {
        // Success
        console.log('Write operation succeeded');
      })
      .catch((error) => {
        // Log the error details
        console.error('Write operation failed:', error);
      });
    // Set the initial value to 1 or any other value you prefer
  };

  const handleIncrement = () => {
    // Reference to the count node
    const countRef = ref(database, 'count');

    set(countRef, new Date().getSeconds());
  };

  return (
    <div>
      <h1>Count: {count ? count : 'Loading...'}</h1>
      <button onClick={handleSetInitialValue}>Set Initial Value</button>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default ReadWriteRealTime;
