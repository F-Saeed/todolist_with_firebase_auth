// React
import { useEffect, useState } from 'react';

// Firebase
import { db } from '../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';

const useCollection = (col) => {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, col), (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });

      setDocuments(results);
    });

    return () => unsub();
  }, [col]);

  return { documents };
};

export default useCollection;
