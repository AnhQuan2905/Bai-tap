
async function hocTap() {
  console.log("tổng từ 1 đến 100");
  let sum = 0;
  for (let index = 1; index <= 100; index = index + 1) {
    sum = sum + index;
  }
  console.log(sum);

//b1: index = 1
// sum = sum + index = 0 + 1 = 1
// sum = 1
// index <= 100
// index = index + 1 = 1 + 1 = 2

//b2: index = 2
// sum = sum + index = 1 + 2 = 3
// sum = 3
// index <= 100 
// index = index + 1 = 2 + 1 = 3

//b3: index = 3
// sum = sum + index = 3 + 3 = 6
// sum = 6
// index <= 100
// index = index + 1 = 3 + 1 = 4

//b4: index = 4
// sum = sum + index = 6 + 4 = 10
// sum = 10
// index <= 100
// index = index + 1 = 4 + 1 = 5

//b5: index = 5
// sum = sum + index = 10 + 5 = 15
// sum = 15
// index <= 100
// index = index + 1 = 5 + 1 = 6

  console.log("Bảng cửu chương 5");
  let mul = 0;

  for (let BCC = 1; BCC <= 10; BCC = BCC + 1) {
    mul = BCC * 5
    console.log(BCC + " x 5 = " + mul);
  }
}

//b1: BCC = 1
// mul = BCC * 5 = 1 * 5 = 5
// in mul = 5 ra màn hình
// BCC <= 10
// BCC = BCC + 1 = 1 + 1 = 2

//b2: BCC = 2
// mul = BCC * 5 = 2 * 5 = 10
// in mul = 10 ra màn hình 
// BCC <= 10
// BCC = BCC + 1 = 2 + 1 = 3

//b3: BCC = 3
// mul = BCC * 5 = 3 * 5 = 15
// in mul = 15 ra màn hình 
// BCC <= 10
// BCC = BCC + 1 = 3 + 1 = 4

//b4: BCC = 4
// mul = BCC * 5 = 4 * 5 = 20
// in mul = 20 ra màn hình 
// BCC <= 10
// BCC = BCC + 1 = 4 + 1 = 5

//b3: BCC = 5
// mul = BCC * 5 = 5 * 5 = 25
// in mul = 25 ra màn hình 
// BCC <= 10
// BCC = BCC + 1 = 5 + 1 = 6

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
