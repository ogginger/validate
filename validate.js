//validate.js: Functional Logic.

define([
	"jquery",
	"underscore"
], function(
	$,
	_
) {
  return function( Input ) {
	if (_.has( Input, "Validate" ) === false) {
		throw { "message": "Error: No input validation was given!" };
	} else if (_.isFunction( Input.Validate ) === false) {
		throw { "message": "Error: Input validation type was not function!" };
	} else {
		Input.Validate( Input );
	}
  };
});
