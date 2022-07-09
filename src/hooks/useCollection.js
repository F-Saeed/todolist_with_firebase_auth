// React
import { useEffect, useRef } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { tasksFetched } from '../features/tasks/tasksSlice';

// Firebase
import { db } from '../firebase/config';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

const useCollection = (col, _q) => {
  const dispatch = useDispatch();
  const tasksState = useSelector((state) => state);

  // set up query
  const q = useRef(_q).current;

  useEffect(() => {
    let ref = collection(db, col);

    if (q) {
      ref = query(ref, where(...q));
    }

    const unsub = onSnapshot(ref, (snapshot) => {
      const results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });

      dispatch(tasksFetched(results));
    });

    return () => unsub();
  }, [col, q, dispatch]);

  const tasksReturned = tasksState.tasks.taskList;

  return { tasksReturned };
};

export default useCollection;
