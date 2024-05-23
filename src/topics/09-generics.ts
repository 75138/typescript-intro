
export function whatsMyType<T>( argument: T ) {
  return argument
}

let amIString = whatsMyType<string>('Hola Mundo')
let amINumber = whatsMyType<number>(100)
let amIArray = whatsMyType<number[]>([1,2,3,5,7,9,11])

console.log(amIString.split(' '))
console.log(amINumber.toFixed())
console.log(amIArray.join('-'))