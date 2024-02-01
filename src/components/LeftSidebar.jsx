import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import "../styles.css";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { sidebarLinks } from "../constants";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  return (
    <NavigationMenu.Root orientation="vertical" className="h-full ml-10 mt-10">
      <NavigationMenu.List className="flex flex-col gap-11">
        <NavigationMenu.Item className="">
          <NavigationMenu.Link className="rounded font-bold text-3xl text-white">
            a.m.gorring
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        {sidebarLinks.map((link) => (
          <NavigationMenu.Item key={link.label} className="">
            <Link to={link.route} className="font-semibold">
              <div className="flex gap-5 items-center">
                <img src={link.imgURL} />
                {link.label}
              </div>
            </Link>
          </NavigationMenu.Item>
        ))}

        <NavigationMenu.Item className="">
          <NavigationMenu.Link onSelect={signOut} className="font-semibold">
            <div className="flex gap-5 items-center">
              <img src={"src/assets/profile.svg"} />
              <p>Profile</p>
            </div>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default LeftSidebar;
