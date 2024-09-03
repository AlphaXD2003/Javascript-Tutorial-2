
// if(score >= 90){
//     console.log('Grade A')
// }
// else if(score >= 80 && score < 90){
//     console.log('Grade B')
// }
// else if(score >= 70 && score < 80){
//     console.log('Grade C')
// }
// else if(score >= 60 && score < 70){
//     console.log('Grade D')
// }
// else{
//     console.log('Grade F')
// }

let score = 55
switch (true){
    case score >= 90 :
        console.log('Grade A');
        break;
    case score >= 80 && score < 90:
        console.log('Grade B')
        break;
    case score >= 70 && score < 80:
        console.log('Grade C');
        break;
    case score >= 60 && score < 70:
        console.log('Grade D')
        break;
    default: console.log('Grade F');
        // break;
}

const month = "january"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}