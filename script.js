
function createPost(name, message, imageURL) {
    return `
        <div class="post">
            <h2>${name}</h2>
            <p>${message}</p>
            <img src="${imageURL}" alt="Imagen">
        </div>
    `;
}


const container = document.getElementById('posts-container');


for (let i = 1; i <= 826; i++) {
    const name = `Personaje ${i}`;
    const message = `Mensaje de la publicación ${i}`;
    const imageURL = `https://rickandmortyapi.com/api/character/avatar/${i}.jpeg`;

   
    const postHTML = createPost(name, message, imageURL);
    container.innerHTML += postHTML;
}
