//validate_Data_AllValidationsPass_ReturnsTrue.js: Testing logic.

define([ "validate" ], function( validate ) {
	return {
		"Name":"validate_Data_AllValidationsPass_ReturnsTrue",
		"Input": {
			"Data": "abc",
			"Validation": [ 
				_.isString, 
				function( Input ) { return Input === "abc"; }
			]
		},
		"Function": validate,
		"ExpectedOutput": true
	};
});
