"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ReviewModalProps{
  title:string;
  isNewReviewOpen:boolean;
  onNewReviewClose: ()=> void;
  children?: React.ReactNode;
};

export const ReviewModal: React.FC<ReviewModalProps> = ({
  title, isNewReviewOpen, onNewReviewClose, children
}) => {
  const onChange = (open: boolean) =>{
    if(!open){
      onNewReviewClose();
    }
  };

  return (
    <Dialog open={isNewReviewOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {/* <DialogDescription>{desc}</DialogDescription> */}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )

}