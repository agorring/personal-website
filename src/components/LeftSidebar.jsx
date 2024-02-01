import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import "../styles.css";
import { useAuthenticator } from "@aws-amplify/ui-react";

const LeftSidebar = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  return (
    <NavigationMenu.Root orientation="vertical" className="LeftSidebar">
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Home
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            {/* Content for Item 1 */}
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Stocks
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            {/* Content for Item 2 */}
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Crypto
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            {/* Content for Item 3 */}
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            News
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            {/* Content for Item 4 */}
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Profile
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            {/* Content for Item 5 */}
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            onSelect={signOut} // Attach the function to the onSelect prop
            className="NavigationMenuTrigger"
          >
            Sign out
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default LeftSidebar;
