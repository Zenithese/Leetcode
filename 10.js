var isMatch = function (s, p) {
    if (p === '') {
        return s === '';
    };

    let first = s !== '' && (p[0] === s[0] || p[0] === '.');
	
    if (p.length >= 2 && p[1] === '*') {
        return isMatch(s, p.slice(2)) || (first && isMatch(s.slice(1), p));
    } else {
        return first && isMatch(s.slice(1), p.slice(1));
    };    
};

console.log(isMatch('aab', 'c*a*b'));