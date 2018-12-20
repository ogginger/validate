//test_validate.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "Functions/bIsObjectEqual",
  "validate",
  "tests/validate_Data_EmptyValidation_ThrowsNoError",
  "tests/validate_Data_ValidationNotArray_ThrowsErrorValidationNotArray",
  "tests/validate_Data_ValidationArrayMemberNotFunction_ThrowsErrorValidationArrayMemberNotFunction",
  "tests/validate_Data_SimpleValidationFails_ThrowsError",
  "tests/validate_Data_MultipleValidationsFail_ThrowsErrorFirstError",
  "tests/validate_Data_AllValidationsPass_ReturnsTrue"
], function(
  TestSuite,
  log,
  bIsObjectEqual,
  validate,
  validate_Data_EmptyValidation_ThrowsNoError,
  validate_Data_ValidationNotArray_ThrowsErrorValidationNotArray,
  validate_Data_ValidationArrayMemberNotFunction_ThrowsErrorValidationArrayMemberNotFunction,
  validate_Data_SimpleValidationFails_ThrowsError,
  validate_Data_MultipleValidationsFail_ThrowsErrorFirstValidationError,
  validate_Data_AllValidationsPass_ReturnsTrue
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_validate initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "validate" );


	xTestSuite.add( validate_Data_EmptyValidation_ThrowsNoError );
//throws unknown error:	xTestSuite.add( validate_Data_ValidationNotArray_ThrowsErrorValidationNotArray );
//	xTestSuite.add( validate_Data_ValidationArrayMemberNotFunction_ThrowsErrorValidationArrayMemberNotFunction );
//	xTestSuite.add( validate_Data_SimpleValidationFails_ThrowsError );
//	xTestSuite.add( validate_Data_MultipleValidationsFail_ThrowsErrorFirstValidationError );
	xTestSuite.add( validate_Data_AllValidationsPass_ReturnsTrue );
	

      xTestSuite.test();
    }
  });
});
