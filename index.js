import './style.css';

// Dostęp do pola tekstowego uzyskasz poprzez klasę `.text-input`.
// Dostęp do lustra uzyskasz poprzez klasę `.mirror`.

const textInput = document.querySelector('.text-input');

function write(e) {
  console.log(e);
}

textInput.addEventListener('focus', write());

const mirror = document.querySelector('.mirror');

console.log(textInput);
console.log(mirror);
