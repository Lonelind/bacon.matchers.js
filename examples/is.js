(function() {
  Bacon.constant(2).equalsTo(1).log();

  Bacon.constant(2)["in"]([1, 2, 3]).log();

}).call(this);
