class product {
    constructor (a, b){
    this.name= a;
    this.price=b
    }
    displayproduct(){
   console.log(`product: ${this.name}`);
   console.log(`price: $${this.price}`);
   
    }
}

const product1= new product('shirt', 19.99 )
product1.displayproduct()