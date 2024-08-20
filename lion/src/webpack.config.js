module.exports = {
    // ... outras configurações
    module: {
      rules: [
        // ... outras regras
        {
          test: /\.(jpg|jpeg|png|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash:8].[ext]',
                outputPath: 'images/',
                publicPath: 'images/',
              },
            },
          ],
        },
      ],
    },
  };
  