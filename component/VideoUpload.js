import React, { useEffect} from "react";
import { StyleSheet, TouchableOpacity, Image, Text, View } from "react-native";
import {storage} from "../db/dbconfig"
// import DocumentPicker from "react-native-document-picker";
import * as DocumentPicker from "expo-document-picker";
import Constants from "expo-constants";
import { ref, uploadBytes } from "firebase/storage";

function Video({ navigation }) {

   useEffect(() => {
     (async () => {
       if (Constants.platform.ios) {
         const cameraRollStatus =
           await DocumentPicker.requestMediaLibraryPermissionsAsync();
         // const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
         if (
           cameraRollStatus.status !== "granted"
           // cameraStatus.status !== "granted"
         ) {
           alert("Sorry, we need these permissions to make this work!");
         }
       }
     })();
   }, []);
  
  // const [singleFile, setSingleFile] = useState("");
  const selectOneFile = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.getDocumentAsync({
        // type: [DocumentPicker.types.video],
      });
      // const res = await DocumentPicker.pick({
      //   type: [DocumentPicker.types.allFiles]
      //   //There can me more options as well
      //   // DocumentPicker.types.allFiles
      //   // DocumentPicker.types.images
      //   // DocumentPicker.types.plainText
      //   // DocumentPicker.types.audio
      //   // DocumentPicker.types.pdf
      // });
      // Printing the log realted to the file
      console.log("res : " + JSON.stringify(res));
      console.log("URI : " + res.uri);
      console.log("Type : " + res.type);
      console.log("File Name : " + res.name);
      console.log("File Size : " + res.size);
      // Setting the state to show single file attributes
      uploadfile(res);
    
      
    } catch (err) {
      //Handling any exception (If any)
      // if (DocumentPicker.isCancel(err)) {
      //   //If user canceled the document selection
      //   alert("Canceled from single doc picker");
      // } else {
      //   //For Unknown Errorr
        alert("Unknown Error: " + JSON.stringify(err));
        throw err;
      // }
    }
  };


  const uploadfile = async (res) => {
  
    // const pick = await DocumentPicker.pick({
    //   type: [DocumentPicker.types.allFiles],
    // });
    // console.log("res : " + JSON.stringify(res));
    const file = res;
  const storgaerRef = ref(storage, file.name);
  const fileRef = storgaerRef.child(file.name);
  uploadBytes(storgaerRef, bytes).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });
};



  return (
    <View
      style={{
        marginTop: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 60,
          color: "black",
          marginBottom: 30,
        }}
      >
        Create Video
      </Text>
      {/* <View style={{ borderWidth: 1, padding: 30, borderRadius: 20 }}>
        <Image 
          style={{ width: 200, height: 200, borderWidth: 1 }}
          source={require("./g1.jpg")}
        />
      </View> */}
      {/* <input type="file" onChange={uploadfile} /> */}

      <TouchableOpacity
        onPress={() => {
          selectOneFile();
        }}
      >
        <Image
          style={{ width: 200, height: 200, borderWidth: 1 }}
          source={require("./g1.jpg")}
        />
        {/* <input type="file" /> */}
      </TouchableOpacity>

      <TouchableOpacity onPress={uploadfile}>
        <Text
          style={{
            elevation: 5,
            margin: 30,
            marginTop: 20,
            paddingHorizontal: 40,
            paddingVertical: 7,
            backgroundColor: "yellow",
            color: "black",
            borderRadius: 40,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Upload
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default Video;
