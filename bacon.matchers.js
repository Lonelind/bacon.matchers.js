(function() {
  var Observable;

  Observable = Bacon.Observable;

  Observable.prototype.self = function() {
    return this;
  };

  Observable.prototype.is.equal = function(y) {
    return this.self.map(function(x) {
      return x === y;
    });
  };

  Observable.prototype.where.equal = function(y) {
    return this.self.filter(function(x) {
      return x === y;
    });
  };

  Observable.prototype.matches = function(re) {
    return this.map(function(x) {
      if (re != null ? re.test(x) : void 0) {
        return x;
      } else {
        return [];
      }
    });
  };

  Observable.prototype.field = function(k) {
    return this.map("." + k);
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

  Observable.prototype["in"] = function(xs) {
    return this.map(function(x) {
      return Bacon._.contains(xs, x);
    });
  };

  Observable.prototype.isArray = function() {
    return this.map(function(x) {
      return x instanceof Array;
    });
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
    if (b == null) {
      b = 0;
    }
    if (a === b) {
      return this.equals(a);
    } else {
      return this.map(function(x) {
        var test;

        test = a < b ? (a < x && x < b) : (b < x && x < a);
        if (test) {
          return x;
        } else {
          return [];
        }
      });
    }
  };

}).call(this);
