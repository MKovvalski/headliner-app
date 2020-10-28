module.exports = {
    presets: [
        ["@babel/preset-env", { corejs: 3, useBuiltIns: "usage" }],
        "@babel/preset-typescript",
        "@babel/react",
    ],
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
