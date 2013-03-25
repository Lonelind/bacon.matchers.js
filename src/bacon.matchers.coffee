Observable = Bacon.Observable 

Observable::self = -> @

#Observable::get = ->
#  result = null
#  @map (v) -> result = v
#  result

#Observable::is = (matcher, args...) -> @[matcher]?.apply @, args

#Observable::not = (args...) ->
#  negate = !@is.apply(@, args)
#  Bacon.constant negate

Observable::isEqual = (y) -> @self.map (x) -> x is y
Observable::whereEqual = (y) -> @self.filter (x) -> x is y

Observable::matches = (re) ->
  @map (x) ->
    if re?.test x
      x
    else
      []

Observable::field = (k) -> @map ".#{k}"

Observable::toNumber = ->
  @map (x) ->
    if isFinite x
      parseFloat x
    else
      x

Observable::in = (xs) -> @map (x) -> Bacon._.contains xs, x

Observable::isArray = -> @map (x) -> x instanceof Array

Observable::inRange = (a, b) ->
  if a is b
    @equals a
  else 
    @map (x) ->
      if a < b then a <= x <= b else b <= x <= a
    
Observable::isBetween = (a, b = 0) ->
  if a is b
    @equals a
  else 
    @map (x) -> 
      test = if a < b then a < x < b else b < x < a
      if test
        x
      else
        []

