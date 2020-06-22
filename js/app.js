import '../sass/style.scss';

class Dog {
    constructor() {
        this.apiUrl = 'https://dog.ceo/api';
        this.imgEl = document.querySelector('.featured-dog img');
        this.backgroundEl = document.querySelector('.featured-dog__background')

        this.init();
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

init() {
    this.getRandomImage()
        .then(src => {
            this.imgEl.setAttribute('src', src);
            this.backgroundEl.style.backgroundImage = `url("${src}")`;
        }),
    this.listBreeds()
        .then(breeds => console.log(breeds));
}};

document.addEventListener('DOMContentLoaded', () => {
    new Dog();
});
