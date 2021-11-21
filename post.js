function lodePost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( res => res.json())
    .then(data => displayPost(data))
}
lodePost()
function displayPost(posts){
    const divContainer = document.getElementById('div-container');
    for(const post of posts){
        const div = document.createElement('div')
        div.classList.add('post')
        div.innerHTML = `<h2>Id: ${post.id}</h2>
        <h3>Title: ${post.title}</h3>
        <p>${post.body}`
        divContainer.appendChild(div)
    }

}

// For Add Post 

function addAPost (){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body : JSON.stringify({
            title:'foo',
            body: 'bar',
            userId: 1
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        }

    })

    .then(res => res.json())
    .then(data => console.log(json))
}