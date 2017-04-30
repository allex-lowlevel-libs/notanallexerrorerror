function createNotAnAllexErrorError(AllexError,inherit){
  function NotAnAllexErrorError(error){
    var ret = new AllexError('NOT_AN_ALLEX_ERROR','Error thrown is not an AllexError');
    ret.error = error;
  }
  inherit(NotAnAllexErrorError,AllexError);
  return NotAnAllexErrorError;
}

module.exports = createNotAnAllexErrorError;
