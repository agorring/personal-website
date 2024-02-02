import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import "../styles.css";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { sidebarLinks } from "../constants";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const LeftSidebar = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  return (
    <NavigationMenu.Root
      orientation="vertical"
      className="h-full ml-10 mt-10 pr-10"
    >
      <NavigationMenu.List className="flex flex-col gap-5">
        <NavigationMenu.Item className="">
          <NavigationMenu.Link className="rounded font-bold text-3xl text-white">
            <div className="flex gap-5 items-center mb-10">
              <img src={"src/assets/logo.svg"} />
              a.m.gorring
            </div>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        {sidebarLinks.map((link) => (
          <NavigationMenu.Item key={link.label} className="">
            <NavLink to={link.route}>
              {({ isActive, isPending, isTransitioning }) => (
                <div
                  className={`${
                    isActive
                      ? "text-white font-extrabold bg-zinc-900"
                      : "text-neutral-500 hover:text-neutral-400"
                  } font-semibold flex gap-5 items-center pl-3 py-3 rounded-lg`}
                >
                  <img src={link.imgURL} />
                  {link.label}
                </div>
              )}
            </NavLink>
          </NavigationMenu.Item>
        ))}

        {/* <NavigationMenu.Item className="NavigationMenuItem">
          <NavLink
            to="/profile" // Update with the correct path
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isPending ? "pending" : "",
                isActive ? "active" : "",
                isTransitioning ? "transitioning" : "",
              ].join(" ")
            }
          >
            <div className="flex gap-5 items-center">
              <img src={"src/assets/profile.svg"} alt="Profile" />
              <p>Profile</p>
            </div>
          </NavLink>
        </NavigationMenu.Item> */}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default LeftSidebar;
