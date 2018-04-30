//validate_Data_EmptyValidation_ThrowsNoError.js: Testing logic.

define([ "validate" ], function( validate ) {
	return {
		"Name":"validate_Data_EmptyValidation_ThrowsNoError",
		"Input": {
			"Data": "abc",
			"Validation": []
		},
		"Function": function( Input ) {
			var Result = { "message": "No Error Thrown." };
			try {
				validate( Input );
			} catch ( Error ) {
				Result = Error;
			} finally {
				return Result;
			}
		},
		"ExpectedOutput": { "message": "No Error Thrown." },
		"Comparator": {
			"Object": true,
			"Debug": false
		}
	};
});
