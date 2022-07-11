import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "react-oidc-context";
import { AuthProviderProps } from "react-oidc-context";

const oidcConfig: AuthProviderProps = {
  authority: "https://apidemo.energenious.net",
  client_id: "PvGxUR6pkj6oEJNtfevAPv8mKK9bmSi1pjt4WrAncJ4",
  client_secret: "S4TXncX0KykNic3XMlLQJXmdaUmRuJsDtH034nkY4YQ",
  redirect_uri: "https://localhost:3000/auth/callback",
  scope: "profile openid email",
  response_type: "code",
  metadata: {
    authorization_endpoint: "https://api.energenious.net/oauth/authorize",
    token_endpoint: "https://api.energenious.net/oauth/token",
    revocation_endpoint: "https://api.energenious.net/oauth/revoke",
    introspection_endpoint: "https://api.energenious.net/oauth/introspect",
    userinfo_endpoint: "https://api.energenious.net/oauth/userinfo",
    jwks_uri: "https://api.energenious.net/oauth/discovery/keys",
  },
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
