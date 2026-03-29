import React, { useState, useEffect } from "react";
import {Logo} from "../utils/Logo";


export default function Topbar(){
 
  

  return (
    <div className="bg-[#F3F4F6] shadow-md px-12 py-5 flex justify-between items-center  relative">
     
           <Logo/>

     
    </div>
  );
};


