function lodeData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(Response => Response.json())
    .then( json => console.log(json))
}
    
function lodeUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then( data => dispalayUsers(data))
}

function lodePost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( res => res.json())
    .then(data => displayPost(data))
}
function dispalayUsers (data){
    for(const user of data){
        const ul = document.getElementById('user');
        const li = document.createElement('li');
        li.innerText = `Name:${user.name}  Email:${user.email}`
        ul.appendChild(li)
    }
}

function displayPost(data){
    for (const post of data){
        const ul = document.getElementById('user');
        const li = document.createElement('li');
        li.innerText = `UserId: ${post.userId},  Id: ${post.id},  Title: ${post.title}`
        ul.appendChild(li)
    }
}

function lodeAlbum(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then( res => res.json())
    .then( data => displayAlbum(data))
}

function displayAlbum (data){
    for(const album of data){
        const ul = document.getElementById('user');
        const li = document.createElement('li')
        li.innerText = `Id: ${album.id}, Title ${album.title}`
        ul.appendChild(li)
    }
}