import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { rules } from "eslint-plugin-react/configs/all";


export default [
  {files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"]},
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReactConfig,
  {extends:['eslint:recommended','plugin:react/recomended','plugin:react/jsx-runtime',"plugin:react-hooks/recommended"]},
  {rules:{"no-console":"warn"}}
];