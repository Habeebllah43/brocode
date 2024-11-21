// class Mathutil{
//     static PI= 3.142

//     static getDiameter (radius){
//         return radius *2
//     }

//     static getcirumference(radius){
//         return 2 * Mathutil.PI * radius
//     }
// }
// console.log(Mathutil.PI);
// console.log(Mathutil.getDiameter(15));
// console.log(Mathutil.getcirumference(5));;

class User {
     
    static userCount=2;

    
    constructor(a) {
        this.username=a;
        User.userCount++;
    }
 static getusercount(){
    console.log(`there are  ${User.userCount} usesrs`);
    
 }
    sayhello(){
        console.log(`my name is ${this.username}`);
        
    }
}


const User1= new User('bestie')
User.getusercount()
User1.sayhello()
console.log(User1.username);
console.log(User.userCount);

