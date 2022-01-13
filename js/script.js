
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

let image1 = document.querySelector('.image1');
let image2 = document.querySelector('.image2');
let image3 = document.querySelector('.image3');
let image4 = document.querySelector('.image4');
let image5 = document.querySelector('.image5');

let imageSlide1 = document.querySelector('.image-slide1');
let imageSlide2 = document.querySelector('.image-slide2');
let imageSlide3 = document.querySelector('.image-slide3');
let imageSlide4 = document.querySelector('.image-slide4');
let imageSlide5 = document.querySelector('.image-slide5');

let slideBtns = document.querySelectorAll('.mac-btn');
let slider = document.querySelector('.image-slide');

let images = document.querySelectorAll('.image');

let priceCount = 0;
let count = 1;

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
  let finalPrice = '';
  for (let i = numArr.length; i >= 0; i = i-3) {
    numArr.splice(i,0,' ')
  }
  for (let i = 0; i < numArr.length; i++) {
    finalPrice += numArr[i];
  }
  sum.textContent = `${finalPrice} so'm`;
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
    let numStr = String(priceCount);
    let numArr = [...numStr];
    let finalPrice = '';
    for (let i = numArr.length; i >= 0; i = i-3) {
      numArr.splice(i,0,' ')
    }
    for (let i = 0; i < numArr.length; i++) {
      finalPrice += numArr[i];
    }
    sum.textContent = `${finalPrice} so'm`;

    if (ram8.checked && count == 0) {
      sum.textContent = `${finalPrice} so'm`;
    } else if (ram16.checked && count == 0) {
      sum.textContent = `${finalPrice} so'm`;
    }
  }
})

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

    if (label.classList.contains('ozu16')) {
      let priceCount = count * 16354000;
      let numStr = String(priceCount);
      let numArr = [...numStr];
      let finalPrice = '';
      for (let i = numArr.length; i >= 0; i = i-3) {
        numArr.splice(i,0,' ')
      }
      for (let i = 0; i < numArr.length; i++) {
        finalPrice += numArr[i];
      }
      sum.textContent = `${finalPrice} so'm`;
    } else if (label.classList.contains('ozu8')) {
      let priceCount = count * 11602500;
      let numStr = String(priceCount);
      let numArr = [...numStr];
      let finalPrice = '';
      for (let i = numArr.length; i >= 0; i = i-3) {
        numArr.splice(i,0,' ')
      }
      for (let i = 0; i < numArr.length; i++) {
        finalPrice += numArr[i];
      }
      sum.textContent = `${finalPrice} so'm`;
    }

    if (label.classList.contains('ozu16') && count == 1) {
      sum.textContent = `16 354 000 so'm`;
    } else if (label.classList.contains('ozu8') && count == 1) {
      sum.textContent = `11 602 500 so'm`;
    }
  })
}

for (let btn of colorInput) {
  btn.addEventListener('change', () => {
    if (btn.id == 'color-gold') {
      image1.src = 'img/gold1.webp';
      image2.src = 'img/gold2.webp';
      image3.src = 'img/gold3.webp';
      image4.src = 'img/gold4.webp';
      image5.src = 'img/gold5.webp';
      imageSlide1.src = 'img/gold1.webp';
      imageSlide2.src = 'img/gold2.webp';
      imageSlide3.src = 'img/gold3.webp';
      imageSlide4.src = 'img/gold4.webp';
      imageSlide5.src = 'img/gold5.webp';
    } else if (btn.id == 'color-silver') {
      image1.src = 'img/silver1.webp';
      image2.src = 'img/silver2.webp';
      image3.src = 'img/silver3.webp';
      image4.src = 'img/silver4.webp';
      image5.src = 'img/silver5.webp';
      imageSlide1.src = 'img/silver1.webp';
      imageSlide2.src = 'img/silver2.webp';
      imageSlide3.src = 'img/silver3.webp';
      imageSlide4.src = 'img/silver4.webp';
      imageSlide5.src = 'img/silver5.webp';
    } else if (btn.id == 'color-space') {
      image1.src = 'img/space1.webp';
      image2.src = 'img/space2.webp';
      image3.src = 'img/space3.webp';
      image4.src = 'img/space4.webp';
      image5.src = 'img/space5.webp';
      imageSlide1.src = 'img/space1.webp';
      imageSlide2.src = 'img/space2.webp';
      imageSlide3.src = 'img/space3.webp';
      imageSlide4.src = 'img/space4.webp';
      imageSlide5.src = 'img/space5.webp';
    }
  })
}

for (let image of images) {
  image.addEventListener('click', () => {
    for (let image of images) {
      image.parentElement.classList.remove('mac-btn-active');
    }
    if (image.classList.contains('image1')) {
      image.parentElement.classList.add('mac-btn-active');
    } else if (image.classList.contains('image2')) {
      image.parentElement.classList.add('mac-btn-active');
    } else if (image.classList.contains('image3')) {
      image.parentElement.classList.add('mac-btn-active');
    } else if (image.classList.contains('image4')) {
      image.parentElement.classList.add('mac-btn-active');
    } else if (image.classList.contains('image5')) {
      image.parentElement.classList.add('mac-btn-active');
    }
  })
}

for (let btn of slideBtns) {
  btn.addEventListener('click', () => {
    if (btn.firstElementChild.classList.contains('image1')) {
      slider.style.transform = 'translateX(0)';
    } else if (btn.firstElementChild.classList.contains('image2')) {
      slider.style.transform = 'translateX(-100%)';
    } else if (btn.firstElementChild.classList.contains('image3')) {
      slider.style.transform = 'translateX(-200%)';
    } else if (btn.firstElementChild.classList.contains('image4')) {
      slider.style.transform = 'translateX(-300%)';
    } else if (btn.firstElementChild.classList.contains('image5')) {
      slider.style.transform = 'translateX(-400%)';
    }
  })
}

