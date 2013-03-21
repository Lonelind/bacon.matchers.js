Observable = Bacon.Observable 

Observable::self = -> @

Observable::in = (xs) -> @map (x) -> Bacon._.contains xs, x

Observable::equals = (y) -> @map (x) -> x is y

Observable::isArray = -> @ instanceof Array

Observable::is = (matcher, args...) -> @[matcher]?.apply @, args

Observable::not = (args...) ->
  negate = !@is.apply(@, args)
  Bacon.constant negate

Observable::matches = (re) -> @map (x) -> re?.test x

Observable::field = (k) -> @map ".#{k}"

Observable::inRange = (a, b) ->
  if a is b
    @equals a
  else 
    @map (x) ->
      if a < b then a <= x <= b else b <= x <= a
    
Observable::isBetween = (a, b) ->
  if a is b
    @equals a
  else 
    @map (x) -> 
      if a < b then a < x < b else b < x < a
    
Observable::toNumber = ->
  @map (x) ->
    if isFinite x
      parseFloat x
    else 
      x
