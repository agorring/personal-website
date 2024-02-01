import { Routes, Link, useMatch, Route } from "react-router-dom";

export const ProtectedPage = () => {
  const match = useMatch({
    path: "/protected", // Replace this with your actual path
    end: false, // Replace with the appropriate option for your use case
    caseSensitive: false, // Replace with the appropriate option for your use case
  });

  if (!match) {
    throw new Error("No match found!"); // Handle the case when no match is found
  }

  return (
    <div>
      <div>{/* <button onClick={signOut}>Sign out</button> */}</div>
      <h3>Protected Page</h3>
      <div>{/* <span>Hi, {user.username}</span> */}</div>
    </div>
  );
};
