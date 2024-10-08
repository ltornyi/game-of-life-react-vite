# React + TypeScript + Vite + SWC

This app was generated by `npm create vite` with the react-ts-swc template. The plugin [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.

## Expanding the ESLint configuration

- Configured the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replaced `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked`
- Installed [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)

```bash
npm install eslint-plugin-react --save-dev
```

  and added `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Jest

    npm install jest --save-dev
    npm install @testing-library/react --save-dev
    npm install ts-jest @types/jest --save-dev
    npm install ts-node @testing-library/jest-dom --save-dev
    npm install jest-environment-jsdom

In package.json, add `"test": "jest"`.

Add jest.config.ts

    export default {
        preset: 'ts-jest',
        testEnvironment: 'jest-environment-jsdom',
        transform: {
            "^.+\\.tsx?$": "ts-jest" 
        // process `*.tsx` files with `ts-jest`
        },
        moduleNameMapper: {
            '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
        },
    }