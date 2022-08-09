import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "react-oidc-context";
import { AuthProviderProps } from "react-oidc-context";

const oidcConfig: AuthProviderProps = {
  authority: "https://apidemo.energenious.net",
  client_id: "RGWixnmLVuIpqEcz4pt56_B1xOaZZw0BpKJRRRrXGsI",
  client_secret: "QjE6d1T5ZhSZP98Iu5ruj_mfexTWRO8zbH5L5AQQ2qo",
  redirect_uri: "https://localhost:3000/auth/callback",
  scope: "profile openid email",
  response_type: "code",
  metadata: {
    authorization_endpoint: "https://apidemo.energenious.net/oauth/authorize",
    token_endpoint: "https://apidemo.energenious.net/oauth/token",
    revocation_endpoint: "https://apidemo.energenious.net/oauth/revoke",
    introspection_endpoint: "https://apidemo.energenious.net/oauth/introspect",
    userinfo_endpoint: "https://apidemo.energenious.net/oauth/userinfo",
    jwks_uri: "https://apidemo.energenious.net/oauth/discovery/keys",
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
