//import '../sass/style.scss';


function listBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => resp.json())
        .then(data => {
            return data.message;
    })
        .catch(err => console.log('Coś poszło nie tak! ' + err));
}

listBreeds();

function getRandomImage() {
    return fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(data => data.message);
}

const imgTag = document.querySelector('img');

getRandomImage().then(img => imgTag.setAttribute('src', img))
