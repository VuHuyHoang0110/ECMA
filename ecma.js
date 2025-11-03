function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  let classification;
  if (bmi < 18.5) {
    classification = "Thiếu cân";
  } else if (bmi < 25) {
    classification = "Bình thường";
  } else if (bmi < 30) {
    classification = "Thừa cân";
  } else {
    classification = "Béo phì";
  }
  return `BMI: ${bmi.toFixed(2)} - Phân loại: ${classification}`;
}
console.log(calculateBMI(70, 1.75)); 
console.log(calculateBMI(50, 1.6));  
console.log(calculateBMI(90, 1.75));

function createBook(title, author, year, price) {
  const discountKey = "calculateDiscount"; 

  return {
    title,
    author,
    year,
    price,
    getBookInfo() {
      return `📘 ${this.title} - Tác giả: ${this.author}, Năm: ${this.year}, Giá: ${this.price.toLocaleString()}đ`;
    },
    [discountKey](percent) {
      const finalPrice = this.price - (this.price * percent) / 100;
      return `💸 Giá sau khi giảm ${percent}%: ${finalPrice.toLocaleString()}đ`;
    },
  };
}
const book = createBook("JavaScript", "Hoang vu", 2025, 100000);
console.log(book.getBookInfo());
console.log(book.calculateDiscount(10));
