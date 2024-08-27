// const newObj = new Object()
const newObj = {}
console.log(newObj)

// {
    //     name : 'wribhu'
    // }
    
    newObj.name = 'wribhu'
    console.log(newObj)
    newObj.name = 'sayani'
    console.log(newObj)
    // newObj = {} error

    const newObj1 = {
        email : 'abc@xyz.com',
        fullname : {
            userFullname : {
                firstname : 'abc',
                lastname : 'xyz'
            }
        }
    }

    console.log(newObj1.fullname.userFullname.lastname)


    const obj1 = {1: 'a', 2: 'b',}
    const obj2 = {3: 'a', 4: 'b'}
    // const emptObj = { }
    const obj3 = Object.assign({},obj1, obj2)
    console.log(obj3)
    console.log(obj1)
    /*
    obj4 = {1: 'a', 2: 'b',3: 'a', 4: 'b' }

    */
    const obj4 = {
        ...obj1,
        ...obj2
    }
    console.log(obj4)

    const arrarOfObject = [
        {
            id : 1
        },{
            id : 2
        },{
            id : 3
        }
    ]

    console.log(arrarOfObject[0].id)
    console.log(arrarOfObject[0]['id'])
    

    const object1 = {
        a: 'somestring',
        b: 42,
        c: false,
    };
   console.log(Object.keys(object1))
   console.log(Object.values(object1))
   console.log(Object.entries(object1))
   console.log(object1.hasOwnProperty('a'))
   console.log(object1.hasOwnProperty('d'))
    const a = 20
   const {a : a1 , b, c,} = object1
   console.log(a1)
