import { Amplify } from "aws-amplify";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
import RootLayout from "./root/RootLayout";
import Home from "./pages/Home";
import Stocks from "./pages/Stocks";
import News from "./pages/News";

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
    <main className="flex h-screen w-screen bg-black">
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/news" element={<News />} />
          {/* <Route path="/update-post/:id" element={<EditPost />} /> */}
        </Route>
      </Routes>
    </main>
  );
}
