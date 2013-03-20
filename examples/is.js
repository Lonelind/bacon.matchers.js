(function() {
  console.log("Bacon.constant(2).equal(1)");

  Bacon.constant(2).equal(1).log();

  console.log("Bacon.constant(2).in([1,2,3])");

  Bacon.constant(2)["in"]([1, 2, 3]).log();

  console.log("Bacon.constant(2).is(\"equal\", 1)");

  Bacon.constant(2).is("equal", 1).log();

  console.log("Bacon.constant(\"STR\").matches(/.*S/)");

  Bacon.constant("STR").matches(/.*S/).log();

  console.log("Bacon.constant(2).inRange(0,2)");

  Bacon.constant(2).inRange(0, 2).log();

  console.log("Bacon.constant(2).isBetween(0,2)");

  Bacon.constant(2).isBetween(0, 2).log();

  console.log("Bacon.constant(1.9999999).isBetween(0,2)");

  Bacon.constant(1.9999999).isBetween(0, 2).log();

  console.log("Bacon.constant({a : \"12\", b : \"223434\"}).field(\"a\").toNumber().isBetween(10,15)");

  Bacon.constant({
    a: "12",
    b: "223434"
  }).field("a").toNumber().isBetween(10, 12).log();

}).call(this);
