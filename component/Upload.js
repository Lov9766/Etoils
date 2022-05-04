import React from 'react'
import { storage } from '../db/dbconfig';
import {  ref ,uploadBytes} from "firebase/storage";


const Upload = () => {
  const uploadfile = (e) => { 
const file = e.target.files[0];
const storgaerRef = ref(storage, file.name);
// const fileRef = storgaerRef.child(file.name);
    uploadBytes(storgaerRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  }
  return (
    <input type="file" onChange={uploadfile} />
  )
}

export default Upload;