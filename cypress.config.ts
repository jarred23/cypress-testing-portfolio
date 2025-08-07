import { defineConfig } from 'cypress';
import webpackPreprocessor from '@cypress/webpack-preprocessor';

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    specPattern: 'cypress/e2e/**/*.cy.{ts,tsx,js}',
    defaultCommandTimeout: 60000,
    setupNodeEvents(on, config) {
      const options = {
        webpackOptions: {
          resolve: {
            extensions: ['.ts', '.js'],
          },
          module: {
            rules: [
              {
                test: /\.ts$/,
                exclude: [/node_modules/],
                use: [
                  {
                    loader: 'ts-loader',
                  },
                ],
              },
            ],
          },
        },
      };
      on('file:preprocessor', webpackPreprocessor(options));
      return config;
    },
  },
});
