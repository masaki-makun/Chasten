import "../css/style.css";

// ナビパネルアクティブ化処理
const navBarActive = () => {
  const panel = document.querySelector(".panel--sp");
  const list = document.querySelector(".panel-list--sp");
  const width = window.innerWidth;
  panel.classList.remove("w-0");
  panel.classList.remove("opacity-0");
  panel.classList.remove("translate-x-full");
  panel.classList.add("opacity-100");
  panel.classList.add("translate-x-0");
  panel.classList.add("z-40");
  list.classList.remove("translate-x-full");
  list.classList.remove("w-0");
  list.classList.remove("opacity-0");
  list.classList.add("translate-x-0");
  list.classList.add("w-full");
  list.classList.add("opacity-100");
  list.classList.add("block");
  if (width <= 576) {
    panel.classList.add("w-full");
  } else if (width <= 768) {
    panel.classList.add("w-1/2");
  }
  console.log("run navBarActive");
};

// ナビパネル非表示処理
const navBarNonActive = () => {
  const panel = document.querySelector(".panel--sp");
  const list = document.querySelector(".panel-list--sp");
  panel.classList.add("w-0");
  panel.classList.add("opacity-0");
  panel.classList.remove("opacity-100");
  panel.classList.remove("translate-x-0");
  panel.classList.remove("w-1/2");
  panel.classList.remove("z-40");
  list.classList.add("translate-x-full");
  list.classList.add("w-0");
  list.classList.add("opacity-0");
  list.classList.remove("translate-x-0");
  list.classList.remove("w-full");
  list.classList.remove("opacity-100");
  list.classList.remove("block");
  console.log("run navBarActive");
};

// オーバーレイアクティブ化処理
const overlayActive = () => {
  const overlay = document.querySelector(".overlay");
  overlay.classList.remove("w-0");
  overlay.classList.remove("opacity-0");
  overlay.classList.remove("translate-x-full");
  overlay.classList.add("translate-x-0");
  overlay.classList.add("w-full");
  overlay.classList.add("opacity-50");
  overlay.classList.add("z-30");
  console.log("run overlayActive");
};

// オーバーレイ非表示処理
const overlayNonActive = () => {
  const overlay = document.querySelector(".overlay");
  overlay.classList.add("w-0");
  overlay.classList.add("opacity-0");
  overlay.classList.add("translate-x-full");
  overlay.classList.remove("translate-x-0");
  overlay.classList.remove("w-full");
  overlay.classList.remove("opacity-50");
  overlay.classList.remove("z-30");
  console.log("run overlayNonActive");
};

const func1 = () => {
  const overlay = document.querySelector(".overlay");
  const menuBtn = document.querySelector("#menuBtn");
  const panel = document.querySelector(".panel--sp");
  const links = document.querySelectorAll(".panel-list--sp__item__link");

  menuBtn.addEventListener("click", () => {
    if (panel.classList.contains("w-0")) {
      overlayActive();
      navBarActive();
    } else {
      overlayNonActive();
      navBarNonActive();
    }
  });
  overlay.addEventListener("click", () => {
    setTimeout(() => {
      overlayNonActive();
      navBarNonActive();
    }, 100);
  });
  links.forEach((link) => {
    link.addEventListener("click", () => {
      setTimeout(() => {
        overlayNonActive();
        navBarNonActive();
      }, 100);
    });
  });
};
func1();
