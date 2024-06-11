window.addEventListener("load", sidenVises);

const port1 = document.querySelector("#port1");
const port2 = document.querySelector("#port2");
const port3 = document.querySelector("#port3");
const port4 = document.querySelector("#port4");
const port5 = document.querySelector("#port5");

const pilr1 = document.querySelector("#pil-right1");
const pilr2 = document.querySelector("#pil-right2");
const pilr3 = document.querySelector("#pil-right3");
const pilr4 = document.querySelector("#pil-right4");
const pilr5 = document.querySelector("#pil-right5");

const pild1 = document.querySelector("#pil-down1");
const pild2 = document.querySelector("#pil-down2");
const pild3 = document.querySelector("#pil-down3");
const pild4 = document.querySelector("#pil-down4");
const pild5 = document.querySelector("#pil-down5");

function sidenVises() {
  console.log("sidenVises");
  //skjul luk alle portifolioerne ned i starte
  port1.classList.add("skjul");
  port2.classList.add("skjul");
  port3.classList.add("skjul");
  port4.classList.add("skjul");
  port5.classList.add("skjul");

  //skjuler pile der peger ned til at starte med
  pild1.classList.add("skjul");
  pild2.classList.add("skjul");
  pild3.classList.add("skjul");
  pild4.classList.add("skjul");
  pild5.classList.add("skjul");

  //Gør baren klikkbar
  document.querySelector("#knap1").addEventListener("mousedown", klik1);
  document.querySelector("#knap2").addEventListener("mousedown", klik2);
  document.querySelector("#knap3").addEventListener("mousedown", klik3);
  document.querySelector("#knap4").addEventListener("mousedown", klik4);
  document.querySelector("#knap5").addEventListener("mousedown", klik5);
}

//Gør at den viser sig selv når man klikker på den første og starter en anden eventlistender sådan at man kan lukke den
function klik1() {
  document.querySelector("#knap1").removeEventListener("mousedown", klik1);
  console.log("klikket 1");
  pilr1.classList.add("skjul");
  pild1.classList.remove("skjul");
  port1.classList.remove("skjul");
  document.querySelector("#knap1").addEventListener("mousedown", klik1igen);
}

//Lukker siden igen og sender det første eventlistender på i slutningeng
function klik1igen() {
  document.querySelector("#knap1").removeEventListener("mousedown", klik1igen);
  console.log("klikket 1");
  pilr1.classList.remove("skjul");
  pild1.classList.add("skjul");
  port1.classList.add("skjul");
  document.querySelector("#knap1").addEventListener("mousedown", klik1);
}

function klik2() {
  document.querySelector("#knap2").removeEventListener("mousedown", klik2);
  console.log("klikket 2");
  pilr2.classList.add("skjul");
  pild2.classList.remove("skjul");
  port2.classList.remove("skjul");
  document.querySelector("#knap2").addEventListener("mousedown", klik2igen);
}

function klik2igen() {
  document.querySelector("#knap2").removeEventListener("mousedown", klik2igen);
  console.log("klikket 2");
  pilr2.classList.remove("skjul");
  pild2.classList.add("skjul");
  port2.classList.add("skjul");
  document.querySelector("#knap2").addEventListener("mousedown", klik2);
}

function klik3() {
  document.querySelector("#knap3").removeEventListener("mousedown", klik3);
  console.log("klikket 3");
  pilr3.classList.add("skjul");
  pild3.classList.remove("skjul");
  port3.classList.remove("skjul");
  document.querySelector("#knap3").addEventListener("mousedown", klik3igen);
}

function klik3igen() {
  document.querySelector("#knap3").removeEventListener("mousedown", klik3igen);
  console.log("klikket 3");
  pilr3.classList.remove("skjul");
  pild3.classList.add("skjul");
  port3.classList.add("skjul");
  document.querySelector("#knap3").addEventListener("mousedown", klik3);
}

function klik4() {
  document.querySelector("#knap4").removeEventListener("mousedown", klik4);
  console.log("klikket 4");
  pilr4.classList.add("skjul");
  pild4.classList.remove("skjul");
  port4.classList.remove("skjul");
  document.querySelector("#knap4").addEventListener("mousedown", klik4igen);
}

function klik4igen() {
  document.querySelector("#knap4").removeEventListener("mousedown", klik4igen);
  console.log("klikket 4");
  pilr4.classList.remove("skjul");
  pild4.classList.add("skjul");
  port4.classList.add("skjul");
  document.querySelector("#knap4").addEventListener("mousedown", klik4);
}

function klik5() {
  document.querySelector("#knap5").removeEventListener("mousedown", klik5);
  console.log("klikket 5");
  pilr5.classList.add("skjul");
  pild5.classList.remove("skjul");
  port5.classList.remove("skjul");
  document.querySelector("#knap5").addEventListener("mousedown", klik5igen);
}

function klik5igen() {
  document.querySelector("#knap5").removeEventListener("mousedown", klik5igen);
  console.log("klikket 5");
  pilr5.classList.remove("skjul");
  pild5.classList.add("skjul");
  port5.classList.add("skjul");
  document.querySelector("#knap5").addEventListener("mousedown", klik5);
}
