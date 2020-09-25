import { Tree } from "./Tree";

class OrangeTree extends Tree {
    oranges: string[] = [];

    ageOneYear(): void {
        this.age = this.age +1;

        if (this.age <10){
            this.height = this.height + 25;
            }
            else if (this.age < 21) {
                this.height = this.height + 10;
            }
            
        this.growOranges();
        this .alive = this.isAlive();
    }

    growOranges(): string[] {
        this.oranges = [];

        if (this.age > 4 && this.age<=10){
            for (let i = 0; i < 10; i++){
                this.oranges.push("🍊");
            }
        }    
        else if (this.age > 10 && this.age <= 20) {
            for (let i = 0; i < 20; i++){
                this.oranges.push("🍊");
            }
        }
        else if (this.age > 20 && this.age <= 40) {
            for (let i = 0; i < 5; i++){
                this.oranges.push("🍊");
            }
        }
        return this.oranges;
    }


    isAlive(): boolean {
        if (this.age < 50){
            return this.alive = true;
        }
        if (this.age >= 100) {
            return this.alive = false;
        }

        const dieProba = (this.age-50) / 50;
        const isAlive = Math.random() > dieProba
        return isAlive;
         
    }

    pickAnOrange(): void {
        if (this.oranges.length > 0) {
            this.oranges.pop();
        }
    }
}

// Leave the line below for tests to work properly.
export { OrangeTree };
