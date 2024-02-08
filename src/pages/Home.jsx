import React from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";

const Home = () => {
  const { signOut } = useAuthenticator((context) => [context.user]);

  return (
    <div className="flex flex-col gap-10">
      Home page under construction...
      <button className="font-bold" onClick={signOut}>
        Sign out
      </button>
    </div>
  );
};

export default Home;
