module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"], // Ensure the path is correct
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!@testing-library)",
  ],
};