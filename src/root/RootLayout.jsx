import LeftSidebar from "../components/LeftSidebar";
import { Outlet } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";

const RootLayout = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => {
        return (
          <div className="w-full flex">
            <LeftSidebar className="flex-1" />

            <section className="flex flex-1 items-center justify-center h-full">
              <Outlet />
            </section>
          </div>
        );
      }}
    </Authenticator>
  );
};

export default RootLayout;
