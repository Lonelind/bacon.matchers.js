Bacon.Observable.prototype.self = function() {
  return this;
};

Bacon.Observable.prototype["in"] = function(list) {
  return this.map(function(v) {
    return Bacon._.contains(list, v);
  });
};

Bacon.Observable.prototype.equalsTo = function(test) {
  return this.map(function(v) {
    return v === test;
  });
};

Bacon.Observable.prototype.isArray = function() {
  return this instanceof Array;
};
