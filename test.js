const earn = document.getElementById("earn-1");
const ride = document.getElementById("ride-1");
const eat = document.getElementById("eat-1");
const frei = document.getElementById("frei-1");
const busi = document.getElementById("busi-1");
const work = document.getElementById("work-1");
const bike = document.getElementById("bike-1");
const elev = document.getElementById("elev-1");

const er = document.getElementById("earn-1");
er.addEventListener("click", function () {
  this.style.borderBottomColor = "black";
  ride.style.borderBottomColor = "white";
  eat.style.borderBottomColor = "white";
  frei.style.borderBottomColor = "white";
  busi.style.borderBottomColor = "white";
  work.style.borderBottomColor = "white";
  bike.style.borderBottomColor = "white";
  elev.style.borderBottomColor = "white";
  document.getElementById("back-img").src =
    "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_1899,h_1068/v1578357180/assets/69/908bc0-7167-40d0-b046-af52170801f5/original/Product-Masthead-Desktop_2.jpg";
  earnm.style.marginLeft = "16%";
});
const ri = document.getElementById("ride-1");
ri.addEventListener("click", function () {
  earn.style.borderBottomColor = "white";
  this.style.borderBottomColor = "black";
  eat.style.borderBottomColor = "white";
  frei.style.borderBottomColor = "white";
  busi.style.borderBottomColor = "white";
  work.style.borderBottomColor = "white";
  bike.style.borderBottomColor = "white";
  elev.style.borderBottomColor = "white";
  document.getElementById("back-img").src =
    "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_1899,h_1068/v1558484011/assets/fb/fc9790-bb1c-427c-8504-684ae1def5e8/original/ride_2x.jpg";
  ridem.style.marginLeft = "25%";
});
const et = document.getElementById("eat-1");
et.addEventListener("click", function () {
  earn.style.borderBottomColor = "white";
  ride.style.borderBottomColor = "white";
  this.style.borderBottomColor = "black";
  frei.style.borderBottomColor = "white";
  busi.style.borderBottomColor = "white";
  work.style.borderBottomColor = "white";
  bike.style.borderBottomColor = "white";
  elev.style.borderBottomColor = "white";
  document.getElementById("back-img").src =
    "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_1899,h_1068/v1583172024/assets/e3/dcbe7e-dcb0-42cb-b3b2-35d31e5f8669/original/eats-hero-desktop-6.jpg";
  eatm.style.marginLeft = "34%";
});
const fr = document.getElementById("frei-1");
fr.addEventListener("click", function () {
  earn.style.borderBottomColor = "white";
  ride.style.borderBottomColor = "white";
  eat.style.borderBottomColor = "white";
  this.style.borderBottomColor = "black";
  busi.style.borderBottomColor = "white";
  work.style.borderBottomColor = "white";
  bike.style.borderBottomColor = "white";
  elev.style.borderBottomColor = "white";
  document.getElementById("back-img").src =
    "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_1899,h_1068/v1558484117/assets/8a/fa8125-145d-4b00-b916-0ee7041f826e/original/Freight_2x.jpg";
  freim.style.marginLeft = "43%";
});
const bu = document.getElementById("busi-1");
bu.addEventListener("click", function () {
  earn.style.borderBottomColor = "white";
  ride.style.borderBottomColor = "white";
  eat.style.borderBottomColor = "white";
  frei.style.borderBottomColor = "white";
  this.style.borderBottomColor = "black";
  work.style.borderBottomColor = "white";
  bike.style.borderBottomColor = "white";
  elev.style.borderBottomColor = "white";
  document.getElementById("back-img").src =
    "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_1899,h_1068/v1558484175/assets/4d/9ea561-e479-440f-b79a-c56b0dc2e3d2/original/Business_2x.jpg";
  busim.style.marginLeft = "52%";
});
const wo = document.getElementById("work-1");
wo.addEventListener("click", function () {
  earn.style.borderBottomColor = "white";
  ride.style.borderBottomColor = "white";
  eat.style.borderBottomColor = "white";
  frei.style.borderBottomColor = "white";
  busi.style.borderBottomColor = "white";
  this.style.borderBottomColor = "black";
  bike.style.borderBottomColor = "white";
  elev.style.borderBottomColor = "white";
  document.getElementById("back-img").src =
    "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_1899,h_1068/v1570130593/assets/5c/28bb83-9828-4abd-ad8a-319e67ff95bc/original/uber-com-uberworks-hero-tab-image.png";
  workm.style.marginLeft = "61%";
});
const bi = document.getElementById("bike-1");
bi.addEventListener("click", function () {
  earn.style.borderBottomColor = "white";
  ride.style.borderBottomColor = "white";
  eat.style.borderBottomColor = "white";
  frei.style.borderBottomColor = "white";
  busi.style.borderBottomColor = "white";
  work.style.borderBottomColor = "white";
  this.style.borderBottomColor = "black";
  elev.style.borderBottomColor = "white";
  document.getElementById("back-img").src =
    "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_1899,h_1068/v1558484252/assets/70/5af028-9661-4f3f-97cf-e80e32d2d225/original/bikes_2x.jpg";
  bikem.style.marginLeft = "70%";
});
const el = document.getElementById("elev-1");
el.addEventListener("click", function () {
  earn.style.borderBottomColor = "white";
  ride.style.borderBottomColor = "white";
  eat.style.borderBottomColor = "white";
  frei.style.borderBottomColor = "white";
  busi.style.borderBottomColor = "white";
  work.style.borderBottomColor = "white";
  bike.style.borderBottomColor = "white";
  this.style.borderBottomColor = "black";
  document.getElementById("back-img").src =
    "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_1899,h_1068/v1558484293/assets/4e/f3c1d1-0eb6-4d01-9d18-38ab2e43b997/original/Fly_2x.jpg";
  elevm.style.marginLeft = "79%";
});
