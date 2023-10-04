const ctaBtns = document.querySelectorAll(".btn-container");
const buyBtn=document.getElementById("buy-button");
var downBtnClicked = false;
const contents = document.querySelectorAll(".content");
var tl1 = gsap.timeline({
  paused: true,
  reversed: true,
  ease: "power4.easeIn",
});
tl1
  .to("#main-img-section", {
    xPercent: -60,
    duration: 1,
  })
  .to(
    "#hidden-bottom",
    {
      yPercent: -60,
      duration: 1,
    },
    "<"
  )
  .fromTo(
    "#para-content p",
    { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 1,
    },
    "<"
  )
  .to(
    contents,
    {
      xPercent: -120,
      stagger: 0.1,
    },
    "<"
  )
  .to(
    "#cta-btn-section",
    {
      xPercent: 120,
    },
    "<"
  )
  .to(
    "#buy-button",
    {
      x: 100,
      y: 110,
    },
    "<"
  )
  .fromTo("#back-container", { opacity: 0 }, { opacity: 1 }, "<");

ctaBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    tl1.play();
  });
});
document.getElementById("back-btn").addEventListener("click", (e) => {
  if (downBtnClicked == true) tl2.reverse();
  tl1.reverse();
});
var tl2 = gsap.timeline({
  paused: true,
  reversed: true,
  ease: "power4.easeIn",
});
tl2
  .to("#hidden-right-section", {
    yPercent: -100,
    duration: 1,
  })
  .to(
    "#brakes-features-section",
    {
      yPercent: -100,
      duration: 1,
    },
    "<"
  )
  .fromTo(
    "#bike-img-container img",
    {
      width: 100,
      y: 200,
    },
    {
      width: 400,
      y: 0,
      duration: 1,
    },
    "<"
  )
  .fromTo(
    "#solid-ring-container svg",
    {
      width: 180,
      y: -150,
    },
    { width: 90, y: 0, duration: 1 },
    "<"
  )
  .fromTo(
    "#dashed-ring-container svg",
    {
      width: 200,
      y: -100,
    },
    { width: 105, y: 0 },
    "<"
  )
  .fromTo(
    "#rear-break-feature-container p",
    { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    },
    "<"
  )
  .fromTo(
    "#brake-features ul",
    { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 1,
    },
    "<"
  );

document.getElementById("down-btn").addEventListener("click", (e) => {
  tl2.play();
  downBtnClicked = true;
});
document.getElementById("up-btn").addEventListener("click", (e) => {
  tl2.reverse();
  downBtnClicked = false;
});
const pointerContainer =document.getElementById("pointer-container");
const pointer=document.getElementById('pointer');

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
 pointerContainer.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 300, fill: "forwards" });
 
}