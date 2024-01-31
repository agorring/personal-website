import { Amplify } from "aws-amplify";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
import { PublicPage } from "./pages/PublicPage";
import { ProtectedPage } from "./pages/ProtectedPage";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.VITE_AUTH_USER_POOL_ID,
      userPoolClientId: process.env.VITE_AUTH_USER_POOL_CLIENT_ID,
    },
  },
});

export default function App() {
  return (
    <main>
      <div>
        <h2>React Router with AWS Amplify Cognito UI</h2>
      </div>
      <Routes>
        <Route index element={<PublicPage />} />
        <Route path="/protected" element={<ProtectedPage />} />
      </Routes>
    </main>
  );
}
