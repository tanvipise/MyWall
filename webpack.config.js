module.exports = {
    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'],
                        // plugins: ['@babel/plugin-transform-class-properties']
                    }
                }
            },

            {
                test: /\.css$/,
                loader: ["style-loader", "css-loader"]
            }


        ]
    }
}