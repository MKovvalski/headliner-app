module.exports = {
    presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/react"],
    plugins: [
        [
            "@babel/plugin-transform-runtime",
            {
                regenerator: true,
            },
        ],
        "react-hot-loader/babel",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-proposal-export-default-from",
    ],
};
