import {initializeApp} from "firebase/app"
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from "firebase/auth"

import{getFirestore,doc,getDoc,setDoc} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyD0_gHl3oYWwSbcvpkVfJJK3FmzrjQORr0",
    authDomain: "gaurav-clothing.firebaseapp.com",
    projectId: "gaurav-clothing",
    storageBucket: "gaurav-clothing.appspot.com",
    messagingSenderId: "240675416820",
    appId: "1:240675416820:web:426cb6ca6ace0dc528cca1"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({
    prompt:"select_account"
  })

  export const auth= getAuth();
  export const signInWithGooglePopup=()=>signInWithPopup(auth,provider) ;
  export const db=getFirestore() 

 export  const createUserDocumentFromAuth=async (userAuth)=>{
    const userDocRef=doc(db,'users',userAuth.uid)
   //database //usercollection here 
    console.log(userDocRef)

    const userSnapshot=await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const{displayName,email}=userAuth;
        const createdAt=new Date();

        try { await setDoc(userDocRef,{
            displayName,email,createdAt
        });
            
        } catch (error) {
            console.log('error creating the user',error.message);
        }
    }
    return userDocRef;
  }

  