const john = {
  name: 'John',
  surname: 'Doe',
  age: 30,
  hobbies: ['Surf', 'Design'],
}

// const jane = john

// jane.name = 'Jane'
// jane.hobbies.push('MuayThai', 'Programming')

const jane = {
  ...john,
  name: 'Jane',
  hobbies: [...john.hobbies, 'MuayThai', 'Programming']
}


console.log('John:', john)
console.log('Jane:', jane)
