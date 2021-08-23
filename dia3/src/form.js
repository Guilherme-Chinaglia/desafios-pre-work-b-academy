const username = document.querySelector('[data-js="username"]');

const arrayWords = ['de', 'da', 'do', 'dos'];

username.addEventListener('input', (e) => {
  const name = e.target.value.toLowerCase();

  console.log(formatName(name, arrayWords))

})


function formatName(name, arrayWords) {

  const newName = name.split(' ').map((word) => {

    return word.charAt(0).toUpperCase() + word.slice(1);

  })

  return newName.join(' ');
}
