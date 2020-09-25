abstract class Tree {
    // properties
    age: number;   
    height: number = 0;   
    alive: boolean = true; 

    //constructor
    constructor (age: number) {
        this.age = age;
        
        if (age <10){
        this.height = age * 25;
        }
        else if (age < 21) {
            const diff = age - 10;
            this.height = ((diff * 10) + 235);
        }
        else {
           this.height = 335;
        } 
       
    }

    //Methods
    abstract ageOneYear(): void;

    abstract isAlive(): void;

    seed(): void {
        this.age = 0;
        this.height = 0;
        this.alive = true;
    }

}

//const OrangeTree = new Tree(2);



// Leave the line below for tests to work properly.
export { Tree };
