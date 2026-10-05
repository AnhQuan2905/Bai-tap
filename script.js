
async function hocTap() {
  console.log("tổng từ 1 đến 100");
  let sum = 0;
  for (let index = 1; index <= 100; index = index + 1) {
    sum = sum + index;
  }
  console.log(sum);

  console.log("Bảng cửu chương 5");
  let mul = 0;
  for (let BCC = 1; BCC <= 10; BCC = BCC + 1) {
    mul = BCC * 5
    console.log(mul);
  }
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
