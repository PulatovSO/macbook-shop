
let remove = document.querySelector('.btn-decrease');
let add = document.querySelector('.btn-increase');
let amount = document.querySelector('.amount');
let sum = document.querySelector('.sum');
let colorInput = document.querySelectorAll('.color-input');

let ram16 = document.querySelector('#ram16');
let ram8 = document.querySelector('#ram8');

let ozu16 = document.querySelector('.ozu16');
let ozu8 = document.querySelector('.ozu8');
let memory1 = document.querySelector('.memory1');

let labels = document.querySelectorAll('.radio-style');

let colorGold = document.querySelector('#color-gold');
let colorSilver = document.querySelector('#color-silver');
let colorSpace = document.querySelector('#color-space');

let current = document.querySelector('.current-img');
let image1 = document.querySelector('.image1');
let image2 = document.querySelector('.image2');
let image3 = document.querySelector('.image3');
let image4 = document.querySelector('.image4');
let image5 = document.querySelector('.image5');

let images = document.querySelectorAll('.image');

let priceCount = 0;
let count = 1;

for(let label of labels) {
  label.addEventListener('click', () => {
    if (label.classList.contains('ozu16')) {
      memory1.classList.remove('display-none');
    } else if (label.classList.contains('ozu8')) {
      memory1.classList.add('display-none');
    }
    if (label == memory1) {
      ozu8.classList.add('display-none')
    } else {
      ozu8.classList.remove('display-none')
    }
  })
}

add.addEventListener('click', () => {
  count++;
  if (ram16.checked) {
    priceCount = count * 16354000;
  } else if (ram8.checked){
    priceCount = count * 11602500;
  }
  amount.textContent = count;
  let numStr = String(priceCount);
  let numArr = [...numStr];
  console.log(numArr.slice());
  let finalPrice = 0;
  sum.textContent = `${priceCount} so'm`;
})

remove.addEventListener('click', () => {
  if (count > 1) {
    count--;
    if (ram16.checked) {
      priceCount = count * 16354000;
    } else if (ram8.checked){
      priceCount = count * 11602500;
    }
    amount.textContent = count;
    sum.textContent = `${priceCount} so'm`;
  }
})

for (let btn of colorInput) {
  btn.addEventListener('change', () => {
    if (btn.id == 'color-gold') {
      current.src = 'img/gold1.webp';
      image1.src = 'img/gold1.webp';
      image2.src = 'img/gold2.webp';
      image3.src = 'img/gold3.webp';
      image4.src = 'img/gold4.webp';
      image5.src = 'img/gold5.webp';
    } else if (btn.id == 'color-silver') {
      current.src = 'img/silver1.webp';
      image1.src = 'img/silver1.webp';
      image2.src = 'img/silver2.webp';
      image3.src = 'img/silver3.webp';
      image4.src = 'img/silver4.webp';
      image5.src = 'img/silver5.webp';
    } else if (btn.id == 'color-space') {
      current.src = 'img/space1.webp';
      image1.src = 'img/space1.webp';
      image2.src = 'img/space2.webp';
      image3.src = 'img/space3.webp';
      image4.src = 'img/space4.webp';
      image5.src = 'img/space5.webp';
    }
  })
}

for (let image of images) {
  image.addEventListener('click', () => {
    for (let image of images) {
      image.parentElement.classList.remove('mac-btn-active');
    }
    if (image.classList.contains('image1')) {
      current.src = image.src;
      image.parentElement.classList.add('mac-btn-active');
    } else if (image.classList.contains('image2')) {
      current.src = image.src;
      image.parentElement.classList.add('mac-btn-active');
    } else if (image.classList.contains('image3')) {
      current.src = image.src;
      image.parentElement.classList.add('mac-btn-active');
    } else if (image.classList.contains('image4')) {
      current.src = image.src;
      image.parentElement.classList.add('mac-btn-active');
    } else if (image.classList.contains('image5')) {
      current.src = image.src;
      image.parentElement.classList.add('mac-btn-active');
    }
  })
}

