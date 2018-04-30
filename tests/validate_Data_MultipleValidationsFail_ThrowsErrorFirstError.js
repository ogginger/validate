//validate_Data_MultipleValidationsFail_ThrowsErrorFirstError.js: Testing logic.

define([ "validate", "underscore" ], function( validate, _ ) {
	return {
		"Name":"validate_Data_MultipleValidationsFail_ThrowsErrorFirstError",
		"Input": {
			"Data": 1,
			"Validation": [ 
				function( Input ) {
					throw { "message": "Error: First Error!" };
				}, function( Input ) {
					throw { "message": "Error: Second Error!" };
				} 
			]
		},
		"Function": function( Input ) {
			var Result = { "message": "No Error Thrown!" };
			try {
				validate( Input );
			} catch ( Error ) {
				Result = Error;
			} finally {
				return Result;
			}
		},
		"ExpectedOutput": { "message": "Error: First Error!" },
		"Comparator": {
			"Object": true,
			"Debug": false
		}
	};
});
