import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const SRC_DIR = path.resolve(__dirname, "./src");
const PUBLIC_DIR = path.resolve(__dirname, "./public");
const BUILD_DIR = path.resolve(__dirname, "./dist");
import svgr from "vite-plugin-svgr";

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    assetsInclude: ["**/*.png", "**/*.svg"],
    plugins: [react(), svgr()],
    root: SRC_DIR,
    base: "",
    publicDir: PUBLIC_DIR,
    build: {
      cssMinify: "lightningcss",
      reportCompressedSize: true,
      target: "esnext",
      sourcemap: false,
      outDir: BUILD_DIR,
      assetsInlineLimit: 0,
      emptyOutDir: true,
      minify: true,
      modulePreload: false,
      polyfillModulePreload: false,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          },
          // assetFileNames: "assets/[name].[hash][extname]",
          chunkFileNames: "assets/[name].[hash].js",
          entryFileNames: "assets/[name].[hash].js",
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/global.scss" as *;',
        },
      },
    },
    resolve: {
      alias: {
        "@": SRC_DIR,
      },
    },
    server: {
      host: true,
    },
  });
};
