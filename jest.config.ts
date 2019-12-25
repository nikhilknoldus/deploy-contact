module.exports = {
	roots: ["<rootDir>/src"],
	transform: {
		"^.+\\.tsx?$": "ts-jest"
	},
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	// Setup Enzyme
	snapshotSerializers: ["enzyme-to-json/serializer"],
	setupTestFrameworkScriptFile: "<rootDir>/src/setupTests.ts"
};
