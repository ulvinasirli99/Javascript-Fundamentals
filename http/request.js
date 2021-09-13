const { json } = require("stream/consumers");

const request = new XMLHttpRequest();

request.open("GET", "https://jsonplaceholder.typicode.com/users");

request.send();

request.onload() = function () {
    
    if (request.status === 200) {

        console.log(JSON.parse(request.response));

    }else {

        console.log(request);

        console.log('error request...'+" "+request.status)

    }
}

// fetch api data

fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>{
    return response.json();
}).then(json=>{
    console.log(json);
});

async function getUsers(params) {

    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    let data = await response.json();

    console.log(data);

    return data;

}

getUsers().then(response=>{
    console.log(response);
})
