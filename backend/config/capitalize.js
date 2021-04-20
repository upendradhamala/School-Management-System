const capitalize = (givenstring) => {
  const a = givenstring
  var k
  var o = []
  var j
  const b = a.split(' ')
  for (k = 0; k < b.length; k++) {
    var p = b[k]

    for (j = 0; j < 1; j++) {
      const n = p[0].toUpperCase() + p.slice(1).toLowerCase()

      o.push(n)
    }
  }
  const sentence = o.join(' ')
  return sentence
}
export default capitalize
