function lodeCommetns(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}
 lodeCommetns()
function displayComments(comments){
    const divContainer = document.getElementById('div-contianer');
    for(const comment of comments){
        const div = document.createElement('div')
        div.innerHTML = `<h3>Id: ${comment.id}</h3>
        <h3>Name: ${comment.name} </h3>
        <h3>Email: ${comment.email}</h3>
        <p>${comment.body}`
        divContainer.appendChild(div)

    }
}