Bacon.Observable::is = -> @

Bacon.Observable::in = (list) -> @map (v) -> Bacon._.contains list, v

Bacon.Observable::equalTo = (test) -> @map (v) -> v is test
