//validate_Data_ValidationNotArray_ThrowsErrorValidationNotArray.js.js: Testing logic.

define([ "validate" ], function( validate ) {
	return {
		"Name":"validate_Data_ValidationNotArray_ThrowsErrorValidationNotArray.js",
		"Input": {
			"Data" : "abc",
			"Validation": undefined
		},
		"Function": function( Input ) {
			validate( Input );
			return false;
		},
		"ExceptionTest": true,
		"ExpectedOutput": { "message": "Error: Validation type was not array!" },
		"Debug": true
	};
});
