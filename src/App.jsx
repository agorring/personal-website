import { Amplify } from "aws-amplify";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
import { PublicPage } from "./pages/PublicPage";
import { ProtectedPage } from "./pages/ProtectedPage";
import RootLayout from "./root/RootLayout";

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
    <main className="flex h-screen">
      <Routes>
        {/* <Route index element={<PublicPage />} /> */}
        {/* <Route path="/protected" element={<ProtectedPage />} /> */}
        <Route element={<RootLayout />}>
          <Route index element={<PublicPage />} />
          <Route path="/protected" element={<ProtectedPage />} />
          {/* <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} /> */}
        </Route>
      </Routes>
    </main>
  );
}
