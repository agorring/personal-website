import { Amplify } from "aws-amplify";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
import RootLayout from "./root/RootLayout";
import Home from "./pages/Home";
import Stocks from "./pages/Stocks";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.VITE_AUTH_USER_POOL_ID,
      userPoolClientId: process.env.VITE_AUTH_USER_POOL_CLIENT_ID,
      identityPoolId: process.env.VITE_AUTH_IDENTITY_POOL_ID,
    },
  },
});

export default function App() {
  return (
    <main className="flex h-screen w-screen">
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/update-post/:id" element={<EditPost />} /> */}
        </Route>
      </Routes>
    </main>
  );
}
