//validate_Data_ValidationNotArray_ThrowsErrorValidationNotArray.js.js: Testing logic.

define([ "validate" ], function( validate ) {
	return {
		"Name":"validate_Data_ValidationNotArray_ThrowsErrorValidationNotArray.js",
		"Input": {
			"Data" : "abc",
			"Validation": undefined
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
		"ExpectedOutput": { "message": "Error: Validation type was not array!" },
		"Comparator": {
			"Object": true,
			"Debug": false
		}
	};
});
