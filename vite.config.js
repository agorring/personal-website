import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.VITE_AUTH_USER_POOL_ID": JSON.stringify(
        env.VITE_AUTH_USER_POOL_ID
      ),
      "process.env.VITE_AUTH_USER_POOL_CLIENT_ID": JSON.stringify(
        env.VITE_AUTH_USER_POOL_CLIENT_ID
      ),
    },
    plugins: [react()],
  };
});
