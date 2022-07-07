import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "react-oidc-context";
import { AuthProviderProps } from "react-oidc-context";

const oidcConfig: AuthProviderProps = {
  authority: "https://accounts.google.com/",

  client_id:
    "1285332583-puist3lq14110bkrj8l5708s1gck2ujo.apps.googleusercontent.com",
  redirect_uri: "https://localhost:3000/auth/callback",
  scope: "profile openid email",
  response_type: "code",
  client_secret: "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",
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AuthProvider {...oidcConfig}>
    <App />
  </AuthProvider>
);

reportWebVitals();
