"use client";


import AddReviewModal from '@/components/modals/add-review-modal';
import {useState, useEffect} from 'react';

export const AddReviewModalProvider = ()=>{
  const [isMounted, setIsMounted] = useState(false);

  useEffect(()=>{
    setIsMounted(true);
  }, []);

  if(!isMounted)
  {return null}

  return (<>
    <AddReviewModal />
  </>)
}
