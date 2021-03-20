import React from 'react'
import "../css/login.css"
import Button from '@material-ui/core/Button';
import {auth, provider} from "../firebase.js"
import {actionTypes} from "../reducer.js"
import {useStateValue} from "../StateProvider.js"
function Login(props) {
  const [state , dispatch] = useStateValue();
  const signIn = () =>{
    auth.signInWithPopup(provider)
    .then(result =>{

      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      })


      console.log(result)
    }).catch(error=>{
      alert(error.message)
    })
  }
  return(
    <div className="login">
      <div className="login_logo">
        <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png" alt="" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ2Gp3tb2oJKzaOLCirP7VdJmV-H4SSMD-LA&usqp=CAU&ec=45771800" alt="" />
      </div>
      <Button type="submit" onClick={signIn} variant="contained" color="primary">
        Sign In
      </Button>
    </div>
  )
}
export default Login
