module.exports = function noerr(callback) {
  try {
    return callback.apply(null, Array.prototype.slice.call(arguments, 1));
  } catch (e) {
    if (e.constructor !== TypeError) {
      throw e;
    }
  }
};
