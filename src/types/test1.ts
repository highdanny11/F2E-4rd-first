export const test2 = ():void => {
  console.log('123')
}

class Vehicle {
  constructor(
    private type: string,
    private wheels: number,
  ){}
  get info():string {
    return `type: ${this.type}; Wheels: ${this.wheels}`
  }
  makeNoise():void {
    console.log('Honk honk')
  }
}
class Car extends Vehicle{
  constructor() {
    super('Car', 4)
  }
}
const vehicle = new Vehicle('Car', 4)
const car = new Car()







abstract class Sorter {
  constructor(public input: any) {}
  public sort() {
    if (Array.isArray(this.input)) {
      for(let i = this.input.length; i > 0 ; i-=1) {
        for(let j = 0; j < i -1; j+=1) {
          if (this.compare(j, j + 1)) this.swap(j , j + 1)
        }
      }
    }
  }
  abstract swap(index1 : number, index2: number) :void
  abstract compare(index1:number, index2: number):boolean
}

class NumberSorter extends Sorter {
  constructor(input : number[]) {
    super(input)
  }
  public compare(index1: number, index2: number): boolean {
    return this.input[index1] > this.input[index2]
  }
  public swap(index1: number, index2: number): void {
    const temp = this.input[index1]
    this.input[index1] = this.input[index2]
    this.input[index2] = temp
  }
}

class StringSorter extends Sorter {
  constructor(input : string) {
    super(input)
  }
  public compare(index1: number, index2: number): boolean {
    return this.input[index1].localeCompare(this.input[index2]) === 1
  }
  public swap(index1: number, index2: number): void {
    this.input = this.input.slice(0, index1) +
                          this.input[index2] +
                          this.input[index1] +
                          this.input.slice(index2 + 1)
  }
}


const aaaa = new NumberSorter([2,3,5,7,3])


interface PersonalInfo {
  name:string,
  age :number,
  interest: string[]
}

function printInfo(info: PersonalInfo) {
  console.log(`${info.name} is ${info.age} years old`)
  console.log(`${info.name} is interested in ${info.interest.join(', ')}`)
}




function createArray<T>(length: number, value: any): Array<T>{
  let result : T[] = []
  for(let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
console.log(createArray<string>(3,'x'))


type TypeConversion<T, U> = (input: T) => U

let numberToString : TypeConversion<number, string> = (input) => {
  return `${input}test`
}

console.log(numberToString(123))

type NonNullPrimitives = number | string | boolean
type Dictionary<T extends NonNullPrimitives> = {[key:string]: T}






class TypedArray<T> {
  constructor(public elements : T[]){}
  public at(index : number) : T {
    return this.elements[index]
  }
  public map(func:(intput : T) => T) : TypedArray<T> {
    const result = new TypedArray<T>([])
    for(let i = 0 ; i < this.elements.length; i+=1) {
      const currentElement = this.at(i)
      const mappedResult = func(currentElement)
      result.elements.push(mappedResult)
    }
    return result
  }
}