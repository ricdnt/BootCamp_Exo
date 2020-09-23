

type Supplies = {
   [key: string]: number;
    monitor: number;
};

const supplies: Supplies = {
  monitor: 1,
};

supplies.monitor = 10;

// Leave the line below for tests to work properly.
export { supplies };
