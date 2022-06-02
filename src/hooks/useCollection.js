// React
import { useEffect, useRef, useState } from 'react';

// Firebase
import { db } from '../firebase/config';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

const useCollection = (col, _q) => {
  const [documents, setDocuments] = useState(null);

  // set up query
  const q = useRef(_q).current;

  useEffect(() => {
    let ref = collection(db, col);

    if (q) {
      ref = query(ref, where(...q));
    }

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });

      setDocuments(results);
    });

    return () => unsub();
  }, [col, q]);

  return { documents };
};

export default useCollection;
