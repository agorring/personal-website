import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./"),
      },
    },
  };
});
