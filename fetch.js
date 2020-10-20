const fetch = require("node-fetch");

// async function get() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/")
//     return response.json()
// }

// get().then(res => console.log(res.sort((a, b) => (a.name < b.name))))

(async function () {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/3");
    if (!response.ok)
        throw new Error(`An error has occured: ${response.status}`);
    return await response.json()
})().then(res => {
    console.log(`${res.name} works for ${res.company.name}`)
}).catch(e => console.log(e.message))