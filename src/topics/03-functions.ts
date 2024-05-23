
function addNumbers( a:number, b:number ) {
  return a + b;
}

const addNumbersArrow = (a: number, b:number): string => {
  return `${a + b}`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2): number {
  return firstNumber * base;
}

const suma= addNumbers(2, 2);
const suma2 = addNumbersArrow(2,3);
const multiplyResult = multiply(5)
console.table({suma, suma2, multiplyResult});

interface Character {
  name: string,
  hp: number;
  showHp: () => void;
}
const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
}

const strider: Character = {
  name: 'strider',
  hp: 50,
  showHp() {
    console.log(`Puntos de vida ${ this.hp }`)
  }
}

healCharacter(strider, 20);
strider.showHp()

export {};