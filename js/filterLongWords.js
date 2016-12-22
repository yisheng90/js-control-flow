var arrays = [['This'], ['is'], ['me'], ['not'], ['you']]
var maxLength = 4
var results = []
for (var i = 0; i < arrays.length; i++) {
  if (arrays[i].length < maxLength) {
    results.push(arrays[i])
  }
}

console.log('short words', results)
