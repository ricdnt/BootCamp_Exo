abstract class Tree {
    age: number = 0;   
    height: number = 0;   
    alive: boolean = true; 

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

    abstract ageOneYear(): void;

    abstract isAlive(): boolean;

    seed(): void {
        this.age = 0;
        this.height = 0;
        this.alive = true;
    }

}


// Leave the line below for tests to work properly.
export { Tree };
