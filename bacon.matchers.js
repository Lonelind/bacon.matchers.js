var Observable,
  __slice = [].slice;

Observable = Bacon.Observable;

Observable.prototype.self = function() {
  return this;
};

Observable.prototype["in"] = function(xs) {
  return this.map(function(x) {
    return Bacon._.contains(xs, x);
  });
};

Observable.prototype.equals = function(y) {
  return this.map(function(x) {
    return x === y;
  });
};

Observable.prototype.isArray = function() {
  return this instanceof Array;
};

Observable.prototype.is = function() {
  var args, matcher, _ref;

  matcher = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
  return (_ref = this[matcher]) != null ? _ref.apply(this, args) : void 0;
};

Observable.prototype.not = function() {
  var args, negate;

  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  negate = !this.is.apply(this, args);
  return Bacon.constant(negate);
};

Observable.prototype.matches = function(re) {
  return this.map(function(x) {
    return re != null ? re.test(x) : void 0;
  });
};

Observable.prototype.field = function(k) {
  return this.map("." + k);
};

Observable.prototype.inRange = function(a, b) {
  if (a === b) {
    return this.equals(a);
  } else {
    return this.map(function(x) {
      if (a < b) {
        return (a <= x && x <= b);
      } else {
        return (b <= x && x <= a);
      }
    });
  }
};

Observable.prototype.isBetween = function(a, b) {
  if (a === b) {
    return this.equals(a);
  } else {
    return this.map(function(x) {
      if (a < b) {
        return (a < x && x < b);
      } else {
        return (b < x && x < a);
      }
    });
  }
};

Observable.prototype.toNumber = function() {
  return this.map(function(x) {
    if (isFinite(x)) {
      return parseFloat(x);
    } else {
      return x;
    }
  });
};
