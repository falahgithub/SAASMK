"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ModalProps{
  title:string;
  isOpen:boolean;
  onClose: ()=> void;
  children?: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({
  title, isOpen, onClose, children
}) => {
  const onChange = (open: boolean) =>{
    if(!open){
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
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