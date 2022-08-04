import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import google from "../../../images/icon/google.png";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  let errorElemtnt;

  if (error) {
    
    errorElemtnt = <div>
        <p className="text-danger ">Error: {error.message}</p>
      </div>
   
  }
  if (user) {
    navigate("/home");
  }

  return (
    <div>
      <div>
        {errorElemtnt}
        <button onClick={()=> signInWithGoogle()} className="btn btn-dark mt-3">
          <img className="mr-1" style={{ width: "30px" }} src={google} alt="" />
          Google Login
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
