import {auth, provider} from '../firebase-config.js'
import {signInWithPopup, signInWithRedirect} from 'firebase/auth'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

export const Auth = () => {
    const signInWithGoogle = async () => {
    try{    
    const result = await signInWithRedirect(auth, provider);
    cookies.set("auth-token", result.user.refreshToken)
    } catch(err){
        console.error(err)
    }
}
    return <div className="auth">
        <p>Sign In with Google To Continue</p>
        <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
}