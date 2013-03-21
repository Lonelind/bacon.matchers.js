Bacon.js module bacon.matchers
================================

This is fork from [bacon.matchers.js](https://github.com/raimohanska/bacon.matchers.js)

Please note that every method returns an instance of Bacon.Observable that contains true or false!

Not much here yet. Will be a great matcher API for bacon.js when grows up.

The idea is to add something like this to [bacon.js](https://github.com/raimohanska/bacon.js)
 
    age.is.equalTo(65)
    salary.is.greaterThan(1000)
    name.matches(/.*Smith/)
    keyUps.when.field("keyCode").isBetween(39,43)
    name.when.value.matches(/.*raimohanska/)

Now this module has Grunt compilation from coffeescript and some examples. Still need to add some tests.

Matchers
-----------

The following matchers added:

```
Bacon.Observable::self
Bacon.Observable::is
Bacon.Observable::not

Bacon.Observable::equals

Bacon.Observable::matches

Bacon.Observable::field

Bacon.Observable::toNumber

Bacon.Observable::in
Bacon.Observable::isArray
Bacon.Observable::inRange
Bacon.Observable::isBetween
```

Matchers contains of:
* Wrappers
* Matchers
* Mappers
* Converters
* Arrays Utilities
 
Wrappers
=======

.self()
-------
Returns an instance of Bacon.Observable. Maybe this would be helpful, but now this wrapper makes no sense.

.is(matcher, args...)
-------
This wrapper converts a call into ```.<matcher>(args...)``` and applies this to Bacon.Observable object.

For example, this two calls are the same:
```coffeescript
Bacon.constant(2).in([1,2,3])
Bacon.constant(2).is("in", [1,2,3])
```

.not(matcher, args...)
-------
This wrapper returns negated value of call to some matcher. Maybe this needs some prettiness in syntax.
```coffeescript
Bacon.constant(2).in([1,2,3]) # true
Bacon.constant(2).not("in", [1,2,3]) # false
```

.get()
------
This wrapper returns a value, placed inside Bacon.Observable.
```coffeescript
Bacon.constant(10).get() # returns 10 as is
Bacon.constant(10).isBetween(1,10).get() # true
```

Matchers
=======

.equals(value)
------
Returns Bacon.constant(true) if instance of Bacon.Observable equals to some value.
```coffeescript
Bacon.constant(2).equals(2)
Bacon.constant([1,2,3]).is("equals", [1,2,3])
```

.matches(regexp)
------
If Bacon.Observable contains some value, ```.matches()``` checks it with a regular expression and returs a result
```coffeescript
Bacon.constant(2).matches(/\d+/) 
Bacon.constant("abracadabra").matches(/a[b-d]?/)
```

Mappers
=======

.field(key)
-----
Maps a JavaScript object to some field. This is an alias to Bacon.map(".keyName"). 

Now you can apply some other matchers to returned value.
```coffeescript
Bacon.constant({a : "some value", big : "SOME VALUE"}).field("b").matches(/.*some/) # false
Bacon.constant({a : "some value", big : "SOME VALUE"}).field("b").matches(/.*some/i) # true
```

Converters
=======

.toNumber()
-----
Converts a string to number. If it's float then float number will be returned.
```coffeescript
Bacon.constant("2").toNumber().equals(2)
```

Arrays Utilities
=======

.in(array)
-----
Returns true if some value is in an array.
```coffeescript
Bacon.constant("dd").in([1,2,3]) # false
Bacon.constant(1).in([1,2,3]) # true
```

.isArray()
-----
If Bacon.Observable returns an array, then this method eill return true.
```coffeescript
Bacon.constant([1,2,3]).isArray()
```

.inRange(a, b), .isBetween(a, b)
-----
This matchers check if the value lays in braces of a and b.
```coffeescript
Bacon.constant(10).inRange(1,10) # true
Bacon.constant(10).isBetween(1,10) # false
Bacon.constant(9.999999999).isBetween(1,10) # true
```

More examples
=========

You can chain this calls just like that:
```coffeescript
Bacon.constant({desription: "Some text", count: "12"})
.field("count")
.toNumber()
.isBetween(10,15) 
```
