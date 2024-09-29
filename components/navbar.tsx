"use client";

import { useZustand } from "@/hooks/useZustand";
import { Button } from "./ui/button";

const Navbar = () => {

  const store = useZustand();
  

  return ( 
  <div className="flex justify-between py-3 px-7 gap-3 bg-gray-200 text-center items-center">
    <h1 className="text-gray-900 font-medium">MOVIECRITIC</h1>
  <div className="flex gap-3">
    <Button variant="outline" color="primary" onClick={store.onOpen}>Add new movie</Button>
    <Button onClick={store.onNewReviewOpen}>Add new review</Button>

  </div>
  </div> );
}
 
export default Navbar;