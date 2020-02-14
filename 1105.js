// var minHeightShelves = function (books, shelf_width, max = 0, shelf = 0) {
//     if (shelf_width <= 0) return [shelf, max];

//     let bookcase = [];
//     for(let i = 0; i < books.length; i++){
//         let width = books[i][0];
//         let height = books[i][1];
//         // let result = height + minHeightShelves
//         if (width <= shelf_width) {
//             if (height > max) max = height
//             shelf += 1
//             bookcase.push(minHeightShelves(books.slice(0, i).concat(books.slice(i + 1)), shelf_width - width, max, shelf));
//         };
//     };

   
//     return bookcase;
//     // return Math.min(...bookcase);
// };

var minHeightShelves = function (books, shelf_width) {
    if (books.length <= 0) return 0;

    let width = books[0][0];
    let max = books[0][1];
    let result = max + minHeightShelves(books.slice(1), shelf_width)
    for(let i = 1; i < books.length; i++){
        let newWidth = width + books[i][0];
        if (newWidth > shelf_width) continue;
        width = newWidth;
        max = Math.max(books[i][1], max)
        result = Math.min(max + minHeightShelves(books.slice(i), shelf_width), result)
    }

    return result;
    // return Math.min(...bookcase);
};

let books = [[1, 1], [2, 3], [2, 3], [1, 1], [1, 1], [1, 1], [1, 2]]
let shelf_width = 4

console.log(minHeightShelves(books, shelf_width))