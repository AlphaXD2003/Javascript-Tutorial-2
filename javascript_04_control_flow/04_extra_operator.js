let value
// Nullish Coalescing Operator(??) : null undefined
value = 5 ?? 10
console.log(value)

value = null ?? 10
console.log(value)

value = undefined ?? 10
console.log(value)

value = undefined ?? null
console.log(value)

value = null ?? undefined
console.log(value)

value = null ?? undefined ?? 10
console.log(value)

value = null ?? 20 ?? 10
console.log(value)


// &&

value = 10 && 20
console.log(value)

value = null && 20
console.log(value)

value = undefined && 20
console.log(value)

value = false && 20
console.log(value)

value = true && 20
console.log(value)

// score = 90
// value = score >= 80 && score < 90
// console.log(value)


value = 10 || 20
console.log(value)

value = undefined || 20
console.log(value)

value = undefined || null
console.log(value)

value = undefined || null || 20
console.log(value)

value = null || undefined || 20
console.log(value)

value = null || 20 || 210
console.log(value)

console.log(3 | 5)
console.log(3 & 5)