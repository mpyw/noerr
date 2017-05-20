module.exports = function (callback) {
  try {
    return callback.apply(null, Array.prototype.slice.call(arguments, 1));
  } catch (e) {}
};
