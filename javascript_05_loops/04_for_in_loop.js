const anotherObj1 = {1: "a",3:"c", 2:"b"}

// for(const key in anotherObj1)
    // console.log(`${key}:${anotherObj1[key]}`)

const map = new Map()
map.set("a",1)
map.set("b",2)
map.set("c",3)
console.log(map.size)
// for(const [key, value] in map)
//     console.log([key, value])
for(const key in [2,5,4,1])
    console.log(key)