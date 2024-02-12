fetch('https://dog.ceo/api/breeds/list/all')  //den fetch fik resultat som objects
    .then(response => response.json())
    .then(json => console.log(json));

fetch('https://dog.ceo/api/breeds/image/random')  //den fetch fik resultat som billede url
    .then(response => response.json())
    .then(json => console.log(json));

fetch('https://dog.ceo/api/breed/hound/images')  //den fetch fik resultat som arrays
    .then(response => response.json())
    .then(json => console.log(json));

fetch('https://dog.ceo/api/breed/hound/list')  //den fetch fik resultat som arrays
    .then(response => response.json())
    .then(json => console.log(json));

fetch('https://dog.ceo/api/breeds/image/random/3')  //den fetch fik resultat som arrays
    .then(response => response.json())
    .then(json => console.log(json));