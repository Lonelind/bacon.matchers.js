# random from lodash.js

random = (min, max) ->
  if !(min? or max?)
    max = 1
  min = +min or 0
  if !max?
    max = min
    min = 0
  min + (Math.random() * ((+max or 0) - min + 1)) << 0

number = random(0,4)

seq = Bacon.repeatedly(200, [number])

seqEs = seq.take(14)
.scan(number, -> number = random(0,4)).toProperty()
.toEventStream()

seqEs.isEqual(2).assign((x) -> console.log "Result for is is #{x}")
seqEs.whereEqual(2).assign((x) -> console.log "Result for when is #{x}")