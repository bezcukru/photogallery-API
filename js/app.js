import '../sass/style.scss';

class Dog {
    constructor() {
        this.apiUrl = 'https://dog.ceo/api';
        this.imgEl = document.querySelector('.featured-dog img');
        this.backgroundEl = document.querySelector('.featured-dog__background')
        this.tilesEl = document.querySelector('.tiles');
        this.descriptionName = document.querySelector('.featured-dog__description--name');
        this.init();
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
        .then(resp => {
            resp.json();
            console.log(breed)})
        .then(data => data.message);

}

init() {
    this.getRandomImage()
        .then(src => {
            this.imgEl.setAttribute('src', src);
            this.backgroundEl.style.backgroundImage = `url("${src}")`;
        }),
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
    addBreed(breed, subBreed) {
        let name;
        let type;

        if (typeof subBreed === 'undefined') {
            name = breed; 
            type = breed;
        } else {
            name = `${subBreed} ${breed}`; 
            type = `${subBreed}/${breed}`; 
        }

        const tile = document.createElement('div');
        tile.classList.add('tiles__tile');

        const tileContent = document.createElement('div');
        tileContent.classList.add('tiles__tile--content');
        tileContent.innerText = name;
        tileContent.addEventListener('click', () => {
            this.getRandomImageByBreed(type)
             .then(src => {
                this.imgEl.setAttribute('src', src);
                this.backgroundEl.style.backgroundImage = `url("${src}")`;
                
            });
    });
    tile.appendChild(tileContent);
    this.tilesEl.appendChild(tile);
}
    
};

document.addEventListener('DOMContentLoaded', () => {
    new Dog();
});


// const breedName = document.createElement('p');
//  breedName.innerText = name;
// this.descriptionName.appendChild(breedName); 