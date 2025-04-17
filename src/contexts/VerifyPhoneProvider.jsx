// import React, { useState } from "react";
// import VerifyPhoneContext from "./VerifyPhoneContext";

// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { auth } from "../../firebase";

// const VerifyPhoneProvider = ({ children }) => {
//   const setUpRecaptcha = (phone) => {
//     const recapchaVerifier = new RecaptchaVerifier(
//       auth,
//       "recaptcha-container",
//       {}
//     );

//     // render captha

//     recapchaVerifier.render();

//     // after user click the captcha and tickmart come then firebase call below function

//     return signInWithPhoneNumber(auth, phone, recapchaVerifier);
//   };

//   return (
//     <VerifyPhoneContext.Provider value={{ recapchaVerifier, setUpRecaptcha }}>
//       {children}
//     </VerifyPhoneContext.Provider>
//   );
// };

// export default VerifyPhoneProvider;

import React from "react";
import VerifyPhoneContext from "./VerifyPhoneContext";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase"; // ✅ Import auth from firebase.js

const VerifyPhoneProvider = ({ children }) => {
  const setUpRecaptcha = (phone) => {
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      { size: "invisible" }
    );

    return signInWithPhoneNumber(auth, phone, recaptchaVerifier);
  };

  return (
    <VerifyPhoneContext.Provider value={{ setUpRecaptcha }}>
      {children}
    </VerifyPhoneContext.Provider>
  );
};

export default VerifyPhoneProvider;
