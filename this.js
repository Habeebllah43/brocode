const person1={
    names: 'alo',
    age:25,
    sayhello:function () {
        console.log(`my name is ${person1.names}`)
    },
    
}
person1.sayhello();


// console.log(this);

function car(make, model, year, color){
    this.make=make,
    this.model=model,
    this.year=year,
    this.color=color
    this.ride=function () {
        console.log(`you are driving ${this.make}`);
        
    }
}

const car1= new car('toyota', 'corolla', 2024, 'black')
car1.ride();
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
