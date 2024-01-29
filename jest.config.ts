export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",

  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__ mocks __/fileMock.js",
    "^#utils/(.*)$": "<rootDir>/src/utils/$1",
    "^#contexts/(.*)$": "<rootDir>/src/contexts/$1",
    "^#components/(.*)$": "<rootDir>/src/components/$1",
    "^#constants/(.*)$": "<rootDir>/src/constants/$1",
    "^#types/(.*)$": "<rootDir>/src/types/$1",
    "^#hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^#assets/(.*)$": "<rootDir>/src/assets/$1",
    "^#views/(.*)$": "<rootDir>/src/views/$1",
  },
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        diagnostics: {
          ignoreCodes: [1343],
        },
        astTransformers: {
          before: [
            {
              path: "node_modules/ts-jest-mock-import-meta",
              options: {
                metaObjectReplacement: { url: "https://www.url.com" },
              },
            },
          ],
        },
      },
    ],
  },
};
