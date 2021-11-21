function lodePhoto(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhoto(data))
}
lodePhoto()

    function displayPhoto(photos){
        const container = document.getElementById('container')
        for(const photo of photos){
            const div = document.createElement('div')
            div.innerHTML= `<h2>Id: ${photo.id}</h2>
            <h2>Title: ${photo.title}</h2>
            <img src="${photo.url}" alt="">`
            container.appendChild(div)
        }
    }