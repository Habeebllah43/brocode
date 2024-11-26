class Animal {
    Alive=true
    eat() {
        console.log(`the ${this.name} is eating`);
        
    }
    swim() {
        console.log(`the ${this.name} is swimming`);
        
    }
    sleep() {
        console.log(`the ${this.name} is sleeping`);
        
    }
}

class Rabbit extends  Animal{

    name = 'rabbit'

    run(){
        console.log(`${this.name} is running`);
        
    }
}

class Fish extends Animal{
name = 'fish'

pit(){
    console.log(`${this.name} is swimming`);
    
}
}

class Cockroach extends Animal{
name = 'cockroach'

crawl(){
    console.log(`${this.name} is crawling`);
    
}
}



const rabbit= new Rabbit()
const fish = new Fish()
const cockroach= new Cockroach()

rabbit.Alive=false;


console.log(rabbit.Alive);
console.log(fish.Alive);
fish.eat()
fish.sleep()
// fish.swim()
fish.pit()



