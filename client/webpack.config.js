const path = require('path');

module.exports = {
    mode: 'development', // or 'production'
    entry: './src/index.js', // Adjust this to your entry point
    output: {
        filename: 'bundle.js', // Output bundle file name
        path: path.resolve(__dirname, 'dist'), // Output directory
    },
    resolve: {
        fallback: {
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "util": require.resolve("util/"),
            "zlib": require.resolve("browserify-zlib"),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // If you're using Babel
                },
            },
            // Add other loaders as needed
        ],
    },
    devtool: 'source-map', // Optional: for debugging
};