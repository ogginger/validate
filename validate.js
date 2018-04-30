//validate.js: Functional Logic.

define([
	"underscore",
	"log"
], function(
	_,
	log
) {
  return function( Input ) {
	if (
		_.has( Input, "Validation" )
	) {
		if (_.isArray( Input.Validation ) === false) {
			throw { "message": "Error: Validation type was not array!" };
		} else if (
			_.every( Input.Validation, function( Validation ) {
				return _.isFunction( Validation );
			}) === false &&
			_.isEmpty( Input.Validation ) === false
		) {
			throw { "message": "Error: Validation element type was not function!" };
		} else {
			return _.every( Input.Validation, function( Element ) {
				return Element( Input.Data );
			});
		}		
	}
  };
});
