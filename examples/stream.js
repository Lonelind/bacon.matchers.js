(function() {
  var number, random, seq, seqEs;

  random = function(min, max) {
    if (!((min != null) || (max != null))) {
      max = 1;
    }
    min = +min || 0;
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + (Math.random() * ((+max || 0) - min + 1)) << 0;
  };

  number = random(0, 4);

  seq = Bacon.repeatedly(200, [number]);

  seqEs = seq.take(14).scan(number, function() {
    return number = random(0, 4);
  }).toProperty().toEventStream();

  console.log(seqEs.is.self);

  seqEs.is.equal(2).assign(function(x) {
    return console.log("Result for is is " + x);
  });

  seqEs.where.equal(2).assign(function(x) {
    return console.log("Result for when is " + x);
  });

}).call(this);
