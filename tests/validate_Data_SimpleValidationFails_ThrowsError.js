//validate_Data_SimpleValidationFails_ThrowsError.js: Testing logic.

define([ "validate", "underscore" ], function( validate, _ ) {
	return {
		"Name":"validate_Data_SimpleValidationFails_ThrowsError",
		"Input": {
			"Data": 1,
			"Validation": [ 
				function( Input ) {
					if (_.isString( Input )) {
						return true;
					} else {
						throw { "message": "Error: Input type was not string!" };
					}
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
		"ExpectedOutput": { "message": "Error: Input type was not string!" },
		"Comparator": {
			"Object": true,
			"Debug": false
		}
	};
});
