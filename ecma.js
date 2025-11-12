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
      return ` ${this.title} - Tác giả: ${this.author}, Năm: ${this.year}, Giá: ${this.price.toLocaleString()}đ`;
    },
    [discountKey](percent) {
      const finalPrice = this.price - (this.price * percent) / 100;
      return ` Giá sau khi giảm ${percent}%: ${finalPrice.toLocaleString()}đ`;
    },
  };
}
const book = createBook("JavaScript", "Hoang vu", 2025, 100000);
console.log(book.getBookInfo());
console.log(book.calculateDiscount(10));



//BÀI 1: TEMPLATE EMAIL THÔNG BÁO
const user = {
    firstName: "Vu",
    lastName: "Hoàng ",
    product: "Laptop HP ProBook 450 G5",
    price: 25000000,
    orderDate: "2025-11-05",
};

const emailTemplate = `
Xin chào ${user.firstName} ${user.lastName},

Cảm ơn bạn đã đặt hàng tại cửa hàng của chúng tôi!

Thông tin đơn hàng của bạn:
- Sản phẩm: ${user.product}
- Giá: ${user.price.toLocaleString("vi-VN")}₫
- Ngày đặt hàng: ${user.orderDate}

Chúng tôi sẽ liên hệ với bạn khi đơn hàng được vận chuyển.

Trân trọng,
Cửa hàng LAPTOP-FPOLY
`;

console.log("==== EMAIL THÔNG BÁO ====");
console.log(emailTemplate);

//BÀI 2: TEMPLATE HTML CARD SẢN PHẨM
const product = {
  name: "iPhone 15",
  price: 20000000,
  discount: 10,
  inStock: true,
};
// Tính giá sau giảm
const finalPrice = product.price * (1 - product.discount / 100);
// Tạo template HTML
const productCard = `
<div class="product-card">
  <h2>${product.name}</h2>
  <p>Giá gốc: ${product.price.toLocaleString('vi-VN')}₫</p>
  <p>Giảm: ${product.discount}%</p>
  <p><strong>Giá sau giảm: ${finalPrice.toLocaleString('vi-VN')}₫</strong></p>
  <p>Trạng thái: ${product.inStock ? "Còn hàng" : "Hết hàng"}</p>
</div>
`;

console.log("\n==== CARD SẢN PHẨM ====");
console.log(productCard);

//Lap2
//BÀI 1: TEMPLATE EMAIL THÔNG BÁO
const user = {
    firstName: "Nguyễn",
    lastName: "Hoàng Anh",
    product: "Laptop HP ProBook 450 G5",
    price: 25000000,
    orderDate: "2025-11-05",
};

const emailTemplate = `
Xin chào ${user.firstName} ${user.lastName},

Cảm ơn bạn đã đặt hàng tại cửa hàng của chúng tôi!

Thông tin đơn hàng của bạn:
- Sản phẩm: ${user.product}
- Giá: ${user.price.toLocaleString("vi-VN")}₫
- Ngày đặt hàng: ${user.orderDate}

Chúng tôi sẽ liên hệ với bạn khi đơn hàng được vận chuyển.

Trân trọng,
Cửa hàng LAPTOP-FPOLY
`;

console.log("==== EMAIL THÔNG BÁO ====");
console.log(emailTemplate);


//BÀI 2: TEMPLATE HTML CARD SẢN PHẨM
const product = {
  name: "iPhone 15",
  price: 20000000,
  discount: 10,
  inStock: true,
};

// Tính giá sau giảm
const finalPrice = product.price * (1 - product.discount / 100);

// Tạo template HTML
const productCard = `
<div class="product-card">
  <h2>${product.name}</h2>
  <p>Giá gốc: ${product.price.toLocaleString('vi-VN')}₫</p>
  <p>Giảm: ${product.discount}%</p>
  <p><strong>Giá sau giảm: ${finalPrice.toLocaleString('vi-VN')}₫</strong></p>
  <p>Trạng thái: ${product.inStock ? "✅ Còn hàng" : "❌ Hết hàng"}</p>
</div>
`;

console.log("\n==== CARD SẢN PHẨM ====");
console.log(productCard);

//LAP3
// Function 1
const multiply = (a, b) => a * b;
console.log(multiply());

// Function 2
const isPositive = Number => Number >= 0;
console.log(isPositive());

// Function 3
const getRandomNumber = () => Math.random();
console.log(getRandomNumber());

// Function 4
// document.addEventListener("click", () => {
//   console.log("Clicked!");
// });

function createUser(name ="Hoàng Anh", age = 21, isAdmin = false) {
    return {
        name,
        age,
        isAdmin,
    };

}
console.log(createUser());


function mergeArrays(...arrays) {
  return arrays.flat();
}
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
function createProduct(name, price = 0, category = "Chưa phân loại") {
  return {
    name,
    price,
    category
  };
}
console.log(mergeArrays([1, 2], [3, 4], [5, 6]));
console.log(sumAll(1, 2, 3, 4, 5));
console.log(createProduct("iPhone 15", 20000000, "Điện thoại"));
console.log(createProduct("Áo thun"));