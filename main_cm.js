const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive'); 
  }
  closeProductDetailAside();
  
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive'); 
  }
  
  shoppingCartContainer.classList.toggle('inactive');
  desktopMenu.classList.add('inactive');
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}
const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr){
for (products of arr){
  const productCard=document.createElement('div');
  productCard.classList.add('product-card');
  //imagen
  const productImg=document.createElement('img');
  productImg.setAttribute('src',products.image);
  productImg.addEventListener('click',openProductDetailAside);

  const productInfo=document.createElement('div');
  productInfo.classList.add('product-info')

  const productInfoDiv=document.createElement('div')
  
  const productPrice=document.createElement('p');
  productPrice.innerText='$'+ products.price;
  
  const productName=document.createElement('p');
  productName.innerText=products.name;

  const productInfoFigure=document.createElement('figure');

  const productImgCart=document.createElement('img');
  productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
  productImgCart.setAttribute('alt',' ');

  cardsContainer.appendChild(productCard);
  productCard.append(productImg,productInfo);
  productInfo.append(productInfoDiv);
  productInfoDiv.append(productPrice,productName);
  productInfo.append(productInfoFigure);
  productInfoFigure.append(productImgCart);
};
};
renderProducts(productList);
