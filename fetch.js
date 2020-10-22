const fetch = require("node-fetch");

async function get() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/")
    return response.json()
}

get().then(res => console.log(res.sort((a, b) => (a.name < b.name))))

(async function () {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/3");
    if (!response.ok)
        throw new Error(`An error has occured: ${response.status}`);
    return await response.json()
})().then(res => {
    console.log(`${res.name} works for ${res.company.name}`)
}).catch(e => console.log(e.message))

(async function () {
    const [person1, person2] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users/1"),
        fetch("https://jsonplaceholder.typicode.com/users/2")
    ])

    if (!person1.ok || !person2.ok) {
        throw new Error(`person1:${person1.status}, person2:${person2.status}`)
    }

    return {
        res1: await person1.json(),
        res2: await person2.json()
    }
})().then(({ res1, res2 }) => {
    console.log([res1, res2]);
}).catch(err => console.log(err))