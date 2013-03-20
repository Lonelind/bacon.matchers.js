var __slice = [].slice;

Bacon.Observable.prototype.self = function() {
  return this;
};

Bacon.Observable.prototype["in"] = function(list) {
  return this.map(function(v) {
    return Bacon._.contains(list, v);
  });
};

Bacon.Observable.prototype.equal = function(test) {
  return this.map(function(v) {
    return v === test;
  });
};

Bacon.Observable.prototype.isArray = function() {
  return this instanceof Array;
};

Bacon.Observable.prototype.is = function() {
  var args, handler;

  handler = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
  return this[handler].apply(this, args);
};

Bacon.Observable.prototype.not = function() {
  var args, negate;

  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  negate = !this.is.apply(this, args);
  return Bacon.constant(negate);
};

Bacon.Observable.prototype.matches = function(re) {
  return this.map(function(v) {
    return re.test(v);
  });
};

Bacon.Observable.prototype.field = function(key) {
  return this.map("." + key);
};

Bacon.Observable.prototype.inRange = function(a, b) {
  if (a === b) {
    return this.equal(a);
  }
  return this.map(function(v) {
    if (typeof a === "number" && typeof b === "number") {
      if (a < b) {
        return (a <= v && v <= b);
      } else {
        return (b <= v && v <= a);
      }
    } else {
      throw new Error("Argument(s) is not a number");
    }
  });
};

Bacon.Observable.prototype.isBetween = function(a, b) {
  if (a === b) {
    return this.equal(a);
  }
  return this.map(function(v) {
    if (typeof a === "number" && typeof b === "number") {
      if (a < b) {
        return (a < v && v < b);
      } else {
        return (b < v && v < a);
      }
    } else {
      throw new Error("Argument(s) is not a number");
    }
  });
};

Bacon.Observable.prototype.toNumber = function() {
  return this.map(function(v) {
    if (v << 0 === v) {
      return parseInt(v, 10);
    } else {
      return parseFloat(v);
    }
  });
};
