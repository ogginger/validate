//validate_Data_EmptyValidation_ThrowsNoError.js: Testing logic.

define([ "validate" ], function( validate ) {
	return {
		"Name":"validate_Data_EmptyValidation_ThrowsNoError",
		"Input": {
			"Data": "abc",
			"Validation": []
		},
		"Function": validate,
		"ExpectedOutput": true,
		"Debug": false
	};
});
