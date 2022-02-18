const fetch = require("node-fetch");

// async function get() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/")
//     return response.json()
// }

// get().then(res => console.log(res.sort((a, b) => (a.name < b.name))))

// (async function () {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/3");
//     if (!response.ok)
//         throw new Error(`An error has occured: ${response.status}`);
//     return await response.json()
// })().then(res => {
//     console.log(`${res.name} works for ${res.company.name}`)
// }).catch(e => console.log(e.message))

// (async function () {
//     const [person1, person2] = await Promise.all([
//         fetch("https://jsonplaceholder.typicode.com/users/1"),
//         fetch("https://jsonplaceholder.typicode.com/users/2")
//     ])

//     if (!person1.ok || !person2.ok) {
//         throw new Error(`person1:${person1.status}, person2:${person2.status}`)
//     }

//     return {
//         res1: await person1.json(),
//         res2: await person2.json()
//     }
// })().then(({ res1, res2 }) => {
//     console.log([res1, res2]);
// }).catch(err => console.log(err))


// // Example POST method implementation:
// async function postData(url = '', data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors', // no-cors, *cors, same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//         body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
// }

// postData('https://example.com/answer', { answer: 42 })
//     .then(data => {
//         console.log(data); // JSON data parsed by `data.json()` call
//     }
// );

// async function spotifyFetch() {
//     const response = await fetch("https://api.spotify.com/v1/tracks/3n3Ppam7vgaVa1iaRUc9Lp", {
//         headers: {
//             "Accept": "application/json",
//             "Content-Type": "application/json",
//             "Authorization": "Bearer BQBmTo56NuzK8xzB5hyf57u5IzSSfT_fS5p9VZxO2cNNXE_Mzvv2ILjb8zjsKH0ZZPy_d7FSTbkjGT9JHcu9a6vlxbiN-tN7moqNMUXK54KHwH2A8voVmMlmDjomsBwT6J9uyFOy0eH1CUY"
//         }
//     });
//     return response.json()
// }

// spotifyFetch().then(res => console.log(res))

// (async function () {
//     const response = await fetch("https://accounts.spotify.com/api/token", {
//         method: 'POST',
//         data: "grant_type=client_credentials",
//         headers: {
//             "Authorization": `Basic ${Buffer.from("9fe5c93dc480474bb1cfd78b914acb43:3b4f756a6316421da421beec69af9d55").toString("base64")}`
//             // "Authorization": `Basic ${Buffer.from("9fe5c93dc480474bb1cfd78b914acb43").toString("base64")}:${Buffer.from("3b4f756a6316421da421beec69af9d55").toString("base64")}`
//         }
//     })
//     if (!response.ok)
//         throw new Error(`An error has occured: ${response.status}`);
//     return await response.json()
// })().then(res => console.log(res)).catch(e => console.log(e.message))

(async function() {
    const response = await fetch('https://gorest.co.in/public/v2/posts')
    if (!response.ok) throw new Error(`An error has occured: ${response.status}`);
    return await response.json()
})()
    .then(res => console.log(res.map(({id, title}) => ({ [id]: title }))))
    .catch(e => console.log(e.message))