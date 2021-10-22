let x = function name(params) {
    console.log(111)
}

str = x.toString()
console.log(str)
res = str.valueOf()
console.log(res)

console.log(x.valueOf())
console.log(x.valueOf().toString())
// console.log("'"+x.toString() + "'")
console.log(Object.prototype.toString.call([undefined]))