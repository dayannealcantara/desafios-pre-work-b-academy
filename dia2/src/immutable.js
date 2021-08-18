const john = {
  name: 'John',
  surname: 'Santos',
  age: 35,
  hobbies: ['Surf', 'Design'],
}

const jane = {
  ...john,
  name: 'Jane',
  surname: 'Silva',
  age: '29',
  hobbies: john.hobbies.concat(['MuayThai', 'Programming']),
}


console.log('John:', john)
console.log('Jane:', jane)

