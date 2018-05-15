module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: './src/index.ts',
    output: {
        filename: './bundle.js'
    },
    devServer: {
        contentBase: "./dist",
        compress: true,
        port: 9000
    },
    watch: true,
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
}