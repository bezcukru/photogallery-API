import '../sass/style.scss';

class Dog {
    constructor() {
        this.apiUrl = 'https://dog.ceo/api';
    }
listBreeds() {
    return fetch(`${this.apiUrl}/breeds/list/all`)
        .then(resp => resp.json())
        .then(data => {
            return data.message;
    })
        .catch(err => console.log('Coś poszło nie tak! ' + err));
}

getRandomImage() {
    return fetch(`${this.apiUrl}/breeds/image/random`)
        .then(resp => resp.json())
        .then(data => data.message);
}

getRandomImageByBreed(breed) {
    return fetch(`${this.apiUrl}/breed/${breed}/images/random`)
        .then(resp => resp.json())
        .then(data => data.message);
}
}

const imgTag = document.querySelector('img');
getRandomImageByBreed('papillon').then(imgSrc => imgTag.setAttribute('src', imgSrc))