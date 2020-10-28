module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/react",
        "prettier/@typescript-eslint",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        project: "./tsconfig.json",
    },
    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            "webpack": {
                "config": "./webpack.config.js"
            }
        },
    },
    rules: {
        "react/jsx-props-no-spreading": 2,
        "react/button-has-type": 0,
        "react/jsx-props-no-spreading": 0,
        "react/prop-types": 0,
        "react/no-danger": 0,
        "react-hooks/exhaustive-deps": 0,
        "react/jsx-boolean-value": [2, "always"],
        "import/prefer-default-export": 2,
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/no-empty-interface": 1,
        "no-plusplus": 0,
        "@typescript-eslint/no-empty-interface": 0,
        "no-extra-boolean-cast": 0,
        "@typescript-eslint/no-explicit-any": 1,
        "max-classes-per-file": ["error", 2],
    },
};