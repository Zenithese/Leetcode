const findWordUnderCursor = (text, cursor) => {
    let word = ""

    let left = cursor - 1 > -1 ? cursor - 1 : 0
    let right = cursor
    let buildingLeft = true
    let buildingRight = true

    while (text[left] !== " " || text[right] !== " ") {
        if (buildingRight) word += text[right]
        if (buildingLeft) word = text[left] + word
        if (text[left] !== " " && left - 1 > -1) {
            left--
        } else {
            buildingLeft = false
        }
        if (text[right] !== " " && right + 1 < text.length) {
            right++
        } else {
            buildingRight = false
        }
        if (!(buildingLeft || buildingRight)) break
    }

    return word
};

const queryToObject = (query) => {

    return query.split('&').reduce((result, entry) => {
        const [k, v] = entry.split('=')
        const keys = k.split('.')
        let key = 'result', value = `'${v}'`
        for (i = 0; i < keys.length; i++) {
            key += `['${keys[i]}']`
            if (i == keys.length - 1) eval(key + '=' + value)
            else if (!eval(key)) eval(key + '= {}')
        }
        return result
    }, {})

}

const recursiveQueryToObject = (query) => {

    const helper = (keys, value, nth) => {
        const key = keys.shift()
        if (!keys.length) return { [key]: value }
        else return { [key]: { ...nth[key], ...helper(keys, value, nth[key] || {}) } }
    }

    return query.split('&').reduce((result, entry) => {
        const [k, value] = entry.split('=')
        const keys = k.split('.')
        const key = keys.shift()
        result[key] = keys.length ? { ...result[key], ...helper(keys, value, result[key] || {})} : value
        return result
    }, {})

}

console.log(queryToObject("a=a2&b.c=c2&b.d.e=e2&b.d.f=f2")) // => {
                                                            //      a: "a2",
                                                            //      b: {
                                                            //           c: "c2",
                                                            //           d: {
                                                            //                e: "e2",
                                                            //                f: "f2"
                                                            //              }
                                                            //          }
                                                            //     }

console.log(recursiveQueryToObject("a=a2&b.c=c2&b.d.e=e2&b.d.f=f2"))

// console.log(findWordUnderCursor("foo bar", 3))