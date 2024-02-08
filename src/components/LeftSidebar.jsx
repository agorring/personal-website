import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import "../styles.css";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { sidebarLinks } from "../constants/index";
import { NavLink } from "react-router-dom";

const LeftSidebar = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  return (
    <NavigationMenu.Root
      orientation="vertical"
      className="h-full ml-10 mt-10 pr-20"
    >
      <NavigationMenu.List className="flex flex-col gap-5">
        <NavigationMenu.Item className="">
          <NavigationMenu.Link className="rounded font-bold text-3xl text-white">
            <div className="flex gap-5 items-center mb-10 pl-3">
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
                  {React.cloneElement(link.icon, {
                    fill: isActive ? "white" : "#737373",
                  })}
                  {link.label}
                </div>
              )}
            </NavLink>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default LeftSidebar;
