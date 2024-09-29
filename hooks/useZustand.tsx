import {create} from 'zustand';

interface useZustandProps{
  isOpen: boolean;
  onOpen: ()=>void;
  onClose:()=>void;
  isNewReviewOpen: boolean;
  onNewReviewOpen: ()=>void;
  onNewReviewClose:()=>void;
}

export const useZustand = create<useZustandProps>((set)=>({
  isOpen: false,
  onOpen:()=>set({isOpen:true}),
  onClose:()=>set({isOpen:false}),
  isNewReviewOpen: false,
  onNewReviewOpen:()=>set({isNewReviewOpen:true}),
  onNewReviewClose:()=>set({isNewReviewOpen:false})
}));

