import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

function removeDataTestid(node: any) {
  if (node.type === 1 /* NodeTypes.ELEMENT */) {
    node.props = node.props.filter((prop: any) =>
      prop.type === 6 ? prop.name !== "data-testid" : true
    );
  }
}

const prod = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          nodeTransforms: prod ? [removeDataTestid] : [],
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
