function handleTuple(value: [string, number]): void {
  
  if (typeof value[0] === "string") {
    console.log(`${value[0]} ${typeof value[0]}`);
  }
  
  if (typeof value[1] === "number") {
  console.log(`${value[1]} ${typeof value[1]}`);
}
}

handleTuple(["hello",10]);

export { handleTuple };
