
import { signInWithGooglePopup ,signInWithGoogleRedirect,
    createUserDocumentFromAuth,} from "../../utils/firebase/firebase.utils";
    import SignUpForm from "../../sign-up-form/sign-up-form.components";
    

 const SignIn=()=> {

  
    

    const logGoogleuser= async()=>{
        const {user}=await signInWithGooglePopup();
        const userDocRef= await createUserDocumentFromAuth(user)

    };
   

   
    
    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleuser}>Sign in With Google Pop Up</button>
            <SignUpForm/>
            
        </div>
    )
}

export default SignIn;