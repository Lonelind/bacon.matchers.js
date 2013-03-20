Bacon.Observable::self = -> @

Bacon.Observable::in = (list) -> @map (v) -> Bacon._.contains list, v

Bacon.Observable::equalsTo = (test) -> @map (v) -> v is test

Bacon.Observable::isArray = -> @ instanceof Array




