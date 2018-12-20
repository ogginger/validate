//validate_Data_ValidationArrayElementNotFunction_ThrowsErrorValidationElementNotFunction.js: Testing logic.

define([ "validate" ], function( validate ) {
	return {
		"Name": "validate_Data_ValidationArrayElementNotFunction_ThrowsErrorValidationElementNotFunction",
		"Input": {
			"Data": "abc",
			"Validation": [ true ]
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
		"ExpectedOutput": { "message": "Error: Validation element type was not function!" },
		"Debug": true,
		"Comparator": { "Object": true }
	};
});
