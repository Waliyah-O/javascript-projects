// 1
class Book {
  constructor(title, author, copyright, isbn, pageNo, checkoutNo, isDiscarded) {
    this.title = title;
    (this.author = author), (this.copyright = copyright);
    this.isbn = isbn;
    this.pageNo = pageNo;
    this.checkoutNo = checkoutNo;
    this.isDiscarded = isDiscarded;
  }
  checkoutTimes(useNo) {
    this.checkoutNo += useNo;
  }
}

class Manual extends Book {
  constructor(title, author, copyright, isbn, pageNo, checkoutNo, isDiscarded) {
    super(title, author, copyright, isbn, pageNo, checkoutNo, isDiscarded);
  }
  isDisposed() {
    let currentYear = new Date();
    // console.log(currentYear.getFullYear())
    if (currentYear.getFullYear() - this.copyright > 5) {
      this.isDiscarded = "Yes";
    }
  }
}

class Novel extends Book {
  constructor(title, author, copyright, isbn, pageNo, checkoutNo, isDiscarded) {
    super(title, author, copyright, isbn, pageNo, checkoutNo, isDiscarded);
  }
  checkoutNumber() {
    if (this.checkoutNo > 100) {
      this.isDiscarded = "Yes";
    }
  }
}

// 2
let novel1 = new Novel(
  "Pride and Prejudice",
  "Jane Austen",
  1813,
  "1111111111111",
  432,
  32,
  "No"
);

// 3
let buildingManual = new Manual(
  "Top Secret Shuttle Building Manual",
  "Redacted",
  2013,
  "0000000000000",
  1147,
  1,
  "No"
);

// 4
novel1.checkoutTimes(5);
// 5
buildingManual.isDisposed();

console.log(buildingManual);
console.log(novel1);
