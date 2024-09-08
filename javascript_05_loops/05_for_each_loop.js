const coding = ["js", "ruby", "java", "python", "cpp"]
const print = (value) => console.log(value)
// coding.forEach(function(value){
//     print(value)
// })
// coding.forEach(value => print(value))

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach(item => console.log(item['languageFileName']))