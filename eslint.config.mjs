// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import unusedImports from "eslint-plugin-unused-imports";

export default withNuxt({
  plugins: {
    "unused-imports": unusedImports,
  },
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
  },
});
