class Animal{
    constructor(a, b){
     this.name=a
     this.age=b
    }

    move(speed){
        console.log(`${this.name} can run at ${speed}mph`);
        
    }
}

class Rabbit extends Animal{
    constructor(a, b, c){
   
   super(a,b);
           this.runspeed=c
    }

    run(){
        console.log(`${this.name} can run`);

        super.move(this.runspeed)
        
    }
}
class Fish extends Animal{

    constructor(a, b, c){
        super(a,b)
        this.swimspeed=c
         }

         swim(){
            console.log(`${this.name} can swim`);
            super.move(this.swimspeed)
            
        } 

}
class Snake extends Animal{

    constructor(a, b, c){
        super(a, b),
        
        this.crawlspeed=c
         }

         crawl(){
            console.log(`${this.name} is crawling`);

            super.move(this.crawlspeed)
            
        }
}

const rabbit= new Rabbit('rabbit', 2, 20)
const fish= new Fish('fish', 2, 10)
const snake= new Snake('snake', 3, 50)

console.log(rabbit.name);
console.log(fish.age);
console.log(snake.crawlspeed);

rabbit.run()
fish.swim()
snake.crawl()

