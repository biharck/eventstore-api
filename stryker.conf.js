module.exports = function(config) {
  config.set({
    testRunner: "mocha",
    mutator: "javascript",
    transpilers: [],
    reporters: ["html", "progress", "dashboard"],
    packageManager: "npm",
    testFramework: "mocha",
    coverageAnalysis: "off",
    mutate: ["app/routes/*.js"]
  });
};
