import '../sass/style.scss';

class Dog {
    constructor() {
        this.apiUrl = 'https://dog.ceo/api';
        this.imgEl = document.querySelector('.featured-dog img');
        this.backgroundEl = document.querySelector('.featured-dog__background')
        this.tilesEl = document.querySelector('.tiles');
        this.descriptionEl = document.querySelector('.featured-dog__description');
        this.spinnerEl = document.querySelector('.spinner');

        this.init();
    }

    showLoading() {
        this.spinnerEl.classList.add('spinner--visible');
    }

    hideLoading() {
        this.spinnerEl.classList.remove('spinner--visible');
    }

    showAllBreeds() {
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
            .then(resp =>
                resp.json())
            .then(data => data.message);

    }

    init() {
        this.showLoading();
        this.getRandomImage()
            .then(image => this.showImageWhenReady(image));
        this.showAllBreeds()
            .then(breeds => {
                for (const breed in breeds) {
                    console.log(breed, breeds[breed]);
                    if (breeds[breed].length === 0) {
                        this.addBreed(breed);
                    } else {
                        for (const subBreed of breeds[breed]) {
                            this.addBreed(breed, subBreed)
                        }
                    }

                }
            })

    }

    showImageWhenReady(image) {
        this.imgEl.setAttribute('src', image);
        this.backgroundEl.style.backgroundImage = `url("${image}")`;
        this.hideLoading();
    }

    addBreed(breed, subBreed) {
        let name;
        let type;

        if (typeof subBreed === 'undefined') {
            name = breed;
            type = breed;
        } else {
            name = `${subBreed} ${breed}`;
            type = `${breed}/${subBreed}`;
        }

        const tile = document.createElement('div');
        tile.classList.add('tiles__tile');

        const tileContent = document.createElement('div');
        tileContent.classList.add('tiles__tile--content');
        tileContent.innerText = name;
        tileContent.addEventListener('click', () => {
            window.scrollTo(0, 0);
            this.showLoading();
            this.getRandomImageByBreed(type)
                .then(image => {
                    this.showImageWhenReady(image);
                    this.descriptionEl.textContent = `You are now looking at a gorgeous ${name}!`;
                });
        });
        tile.appendChild(tileContent);
        this.tilesEl.appendChild(tile);
    }

};

document.addEventListener('DOMContentLoaded', () => {
    new Dog();
});