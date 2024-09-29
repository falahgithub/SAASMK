"use client";


import AddModal from '@/components/modals/add-modal';
import {useState, useEffect} from 'react';

export const AddModalProvider = ()=>{
  const [isMounted, setIsMounted] = useState(false);

  useEffect(()=>{
    setIsMounted(true);
  }, []);

  if(!isMounted)
  {return null}

  return (<>
    <AddModal />
  </>)
}
