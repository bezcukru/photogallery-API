import '../sass/style.scss';


function listBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => resp.json())
        .then(data => {
            console.log(data.message);
        })
}

listBreeds();