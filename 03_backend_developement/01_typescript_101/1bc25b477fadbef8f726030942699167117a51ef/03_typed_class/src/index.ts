class Bird {
  age: number;

  constructor(age: number) {
    this.age = age;
  }

  sing(): void {
    console.log("Cui cui");
  }

  fly(second: number): void {
    if (this.age <=1) {
      console.log("The bird is too young to fly");
    }
    else if (this.age <=3) {
      console.log(`The bird flew ${second} meters in ${second} seconds`);
    }
    else if (this.age > 3) {
      console.log(`The bird flew ${second * 2} meters in ${second} seconds`);
    }
  }

}

// Leave the line below for tests to work properly.
export { Bird };
