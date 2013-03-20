Bacon.Observable::self = -> @

Bacon.Observable::in = (list) -> @map (v) -> Bacon._.contains list, v

Bacon.Observable::equal = (test) -> @map (v) -> v is test

Bacon.Observable::isArray = -> @ instanceof Array

Bacon.Observable::is = (handler, args...) -> @[handler].apply(@, args)

Bacon.Observable::not = (args...) ->
  negate = !@is.apply(@, args)
  Bacon.constant negate

Bacon.Observable::matches = (re) -> @map (v) -> re.test(v)

Bacon.Observable::field = (key) -> @map ".#{key}"

#Gets a <= x <= b
Bacon.Observable::inRange = (a, b) ->
  return @equal(a) if a is b
  @map (v) ->
    if typeof a is "number" and typeof b is "number"
      if a < b then a <= v <= b else b <= v <= a
    else
      throw new Error "Argument(s) is not a number"

#Gets a < x < b
Bacon.Observable::isBetween = (a, b) ->
  return @equal(a) if a is b
  @map (v) ->
    if typeof a is "number" and typeof b is "number"
      if a < b then a < v < b else b < v < a
    else
      throw new Error "Argument(s) is not a number"

Bacon.Observable::toNumber = ->
  @map (v) ->
    if v << 0 is v
      parseInt(v, 10)
    else
      parseFloat(v)


