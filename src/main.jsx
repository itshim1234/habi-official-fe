import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import VerifyPhoneProvider from "./contexts/VerifyPhoneProvider";

createRoot(document.getElementById("root")).render(
  <VerifyPhoneProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </VerifyPhoneProvider>
);
