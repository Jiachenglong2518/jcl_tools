class Logger {
  constructor () {
    this.printName = this.printName.bind(this);
  }
  printName(name = 'there') {
    this.print(`Hello ${name}`);
  }

  printNameTwo = (name = 'there') => {
    this.print(`Hello ${name} Two`);
  }

  print(text) {
    console.log(text);
  }
}

const logger = new Logger();
const { printName, printNameTwo } = logger;
printName();    //Hello there
printNameTwo(); // Hello there Two



class Obj {
  name = "张三"
  constructor() {
  }
  getName = () => {
    console.log(this.name);
    return this.name;
  };
  getNameTwo () {
    console.log(this.name);
    return this.name;
  };
}

const myObj = new Obj();

const { getNameTwo } = myObj;
// getNameTwo()