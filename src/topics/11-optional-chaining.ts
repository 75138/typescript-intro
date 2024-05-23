
export interface Passenger {
  firstName: string,
  lastName?: string,
  children?: string[]
}

const passenger1: Passenger = {
  firstName: 'Iván'
}

const passenger2: Passenger = {
  firstName: 'Melissa',
  children: ['Natalia', 'Elizabeth']
}

const printChildren = (passenger: Passenger) => {
  const { firstName } = passenger;
  const howManyChildren = passenger.children?.length || 0;

  console.table({
    'passenger: ': firstName,
    'children': howManyChildren
  })
}

printChildren(passenger1)

printChildren(passenger2)