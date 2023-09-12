function numberOfBooksRead(library) {
  // Initialize a count variable to keep track of the number of read books.
  let count = 0;

  // Loop through each book in the library array.
  for (let i = 0; i < library.length; i++) {
    // Check if the readingStatus of the current book is true.
    if (library[i].readingStatus === true) {
      // If it's true, increment the count.
      count++;
    }
  }

  // Return the final count of read books.
  return count;
}

// Example usage:
const library = [
  {
    author: "Author 1",
    title: "Book 1",
    readingStatus: true,
  },
  {
    author: "Author 2",
    title: "Book 2",
    readingStatus: false,
  },
  {
    author: "Author 3",
    title: "Book 3",
    readingStatus: true,
  },
];

const numberOfReadBooks = numberOfBooksRead(library);
console.log(numberOfReadBooks); // Output: 2
