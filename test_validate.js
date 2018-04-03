//test_validate.js: Testing Logic.

define([
  "TestSuite",
  "Functions/log",
  "Functions/bIsObjectEqual",
  "validate"
], function(
  TestSuite,
  log,
  bIsObjectEqual,
  validate
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_validate initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "validate" );

      xTestSuite.add({
        "Name": "validate_Data_Validate_DoesNotThrowErrors",
        "Input": {
                "Data": "abc",
                "Validate": function( Input ) {
			//ThrowsNoErrors
		}
        },      
        "Function": function( Input ) {
                var bResult = true;

                try {   
                        validate( Input );
                } catch( Error ) {
                        bResult = false;
                }
                
                return bResult;
        },
        "ExpectedOutput": true
      });

      xTestSuite.add({
        "Name": "validate_InputValidationIsNotFunction_throwsErrorValidationNotFunction",
        "Input": {
                "Data": undefined,
                "Validate": undefined
        },      
        "Function": function( Input ) {
                var bResult = false;

                try {
                        validate( Input );
                } catch( Error ) {
                        if (
                                bIsObjectEqual(
                                        Error,
                                        { "message": "Error: Input validation type was not function!" }
                                )
                        ) {
                                bResult = true;
                        }
                }

                return bResult;
        },
        "ExpectedOutput": true
      });

      
      xTestSuite.add({
        "Name": "validate_InputHasNoValidationMethod_throwsErrorNoValidation",
        "Input": {
		"Data": undefined
	},
        "Function": function( Input ) {
		var bResult = false;
		
		try {
			validate( Input );
		} catch( Error ) {
			if (
				bIsObjectEqual(
					Error,
					{ "message": "Error: No input validation was given!" }
				)
			) {
				bResult = true;
			}
		}

		return bResult;
	},
        "ExpectedOutput": true
      });
      
      xTestSuite.test();
    }
  });
});
