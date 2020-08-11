var numUniqueEmails = function (emails) {
    let array = [];
    for (let j = 0; j < emails.length; j++) {
        let email = emails[j]
        for (let i = 0; i < email.length; i++) {
            let x = email.split("@")
            let y = x[0].split(".").join("").split("+")[0] + "@" + x[1]
            array.push(y)
        }
    }

    return Array.from(new Set(array)).length
};

var numUniqueEmails = function (emails, results = new Set()) {

    for (let i = 0; i < emails.length; i++) {
        let split = emails[i].split("@")
        let name = split[0].replace(/\./g, '')
        if (name.includes("+")) name = name.split("+")[0]
        let email = name + "@" + split[1]
        if (!(results.has(email))) results.add(email)
    }

    return results.size;
    
};