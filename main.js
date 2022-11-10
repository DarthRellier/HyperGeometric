let typesOfCard = 1;
let ks = [];
let Ks = [];
let inpp = document.getElementById("inpp");
function factorial(n) {
  let i = 0;
  let sn = n;
  let cn = 1;
  while (i < sn) {
    cn = cn * (sn - i);
    i++;
  }
  return cn;
}

function choose(n, k) {
  if (k < n) {
    let result = factorial(n) / (factorial(k) * factorial(n - k));
    return result;
  } else if (k == 0) {
    return 1;
  } else {
    return null;
  }
}

function createType() {
  let newInpEl = document.createElement("input");
  newInpEl.type = "number";
  newInpEl.id = `k${typesOfCard}`;
  newInpEl.style.width = "50px";
  newInpEl.addEventListener("input", createType, { once: true });
  let newInpEl2 = document.createElement("input");
  newInpEl2.type = "number";
  newInpEl2.id = `K${typesOfCard}`;
  typesOfCard++;
  newInpEl2.style.width = "50px";
  let br = document.createElement("br");
  inpp.appendChild(br);
  inpp.appendChild(newInpEl);
  inpp.insertAdjacentText("beforeend", "cards that I have");
  inpp.appendChild(newInpEl2);
  inpp.insertAdjacentText("beforeend", "of,");
  console.log(document.getElementById("k0").value);
}

function oneOffFirst() {
  document
    .getElementById("k0")
    .addEventListener("input", createType, { once: true });
}
