class myArray{
    cars: string[];

    constructor(car:string[]){
       this.cars = car
    }
    
    addCar(value:string){
       const addCars = this.cars.push(value);
       console.log(`${value} added to car `)
       console.log(addCars)
    }

    myForEach(callback:(value:string, index:number, array: string[])=>void) {
        for(let i = 0;i < this.cars.length; i++){
           callback(this.cars[i], i, this.cars);
        }
         return callback;
    }
}

const arr = new myArray(['Benz','Toyota','Stone','Beuz']);
console.log(arr)
arr.addCar('Honda');
arr.myForEach((value, index, array) => {
  console.log(`${index}: ${value}`);
});
console.log(arr.cars)
