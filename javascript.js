let landingback = document.querySelector(".landing-header");
let backgrounds = ["01.jpg", "04.jpg", "06.jpg"];

let colorLocal = localStorage.getItem("color");
let changcolor = document.querySelectorAll(".menu-color > li");
let SpanYes = document.querySelector(".backgrond-random .yes");
let Spanno = document.querySelector(".backgrond-random .no");
let liGround = document.querySelectorAll(".backgrond-random > li");

let groundlocal = localStorage.getItem("ground");
let randomback = false;
let myIntervel;
if (groundlocal !== null) {
  [SpanYes, Spanno].forEach((span) => {
    const isActive = span.dataset.ground === groundlocal;
    span.classList.toggle("active", isActive);
    if (span === SpanYes && isActive) randomback = true;
    if (span === Spanno && isActive) randomback = false;
  });
}
if (colorLocal !== null) {
  document.documentElement.style.setProperty("--Main-Color--", colorLocal);
  changcolor.forEach((e) => {
    if (e.dataset.color === colorLocal) {
      e.classList.add("active");
    } else {
      e.classList.remove("active");
    }
  });
}

backgroundrandom();

[SpanYes, Spanno].forEach((span) => {
  span.addEventListener("click", () => {
    clearInterval(myIntervel);
    const isYes = span === SpanYes;
    randomback = isYes;

    SpanYes.classList.toggle("active", isYes);
    Spanno.classList.toggle("active", !isYes);

    localStorage.setItem("ground", span.dataset.ground);

    if (isYes) backgroundrandom();
  });
});

function backgroundrandom() {
  myIntervel = setInterval(() => {
    if (randomback === true) {
      let random = Math.floor(Math.random() * backgrounds.length);
      landingback.style.backgroundImage = `url('./images/${backgrounds[random]}')`;
    }
  }, 5000);
}

let setting = document.querySelector(".setting");
let Changeseting = document.querySelector(".Change-seting");

setting.addEventListener("click", () => {
  Changeseting.classList.toggle("open");
});

changcolor.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    changcolor.forEach((e) => {
      e.classList.remove("active");
    });
    document.documentElement.style.setProperty(
      "--Main-Color--",
      e.target.dataset.color
    );
    e.target.classList.add("active");
    window.localStorage.setItem("color", e.target.dataset.color);
  });
});

let skills = document.querySelector(".skills");
let skillsSpan = document.querySelectorAll(".skills span");

const skillsSection = document.querySelector(".skills");
const spans = document.querySelectorAll(".skill-progress span");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      spans.forEach((span) => {
        span.style.width = span.dataset.progress;
      });

      observer.unobserve(skillsSection);
    }
  });
});
observer.observe(skillsSection);

let menu = document.querySelector(".menu i");
let lineks = document.querySelector(".links");
menu.addEventListener("click", function () {
  lineks.classList.toggle("active");
});
document.addEventListener("click", function (e) {
  if (e.target !== lineks && e.target !== menu) {
    if (lineks.classList.contains("active")) {
      lineks.classList.remove("active");
    }
  }
});

// start our Gallery

let boxPhoto = document.querySelectorAll(".box-photo img");

boxPhoto.forEach((box) => {
  box.addEventListener("click", function () {
    let overflow = document.createElement("div");
    overflow.className = "overflowForBox";
    document.body.append(overflow);
    let DivImage = document.createElement("div");
    DivImage.className = "TheBoxOverlay";
    let Image = document.createElement("img");
    Image.src = box.src;
    if (box.alt !== null) {
      let h4 = document.createElement("h4");
      h4.innerHTML = box.alt;
      DivImage.append(h4);
    }
    DivImage.append(Image);
    document.body.append(DivImage);

    let span = document.createElement("span");
    span.innerHTML = "X";
    span.className = "closethebox";
    DivImage.append(span);
  });
});
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("closethebox")) {
    e.target.parentElement.remove();
    document.querySelector(".overflowForBox").remove();
  }
});
// end our Gallery

// Start logic bullets
let bullets = document.querySelectorAll(".bullets-option .bullet");

bullets.forEach((bullet) => {
  bullet.addEventListener("click", function (e) {
    document.querySelector(e.target.dataset.section).scrollIntoView();
  });
});

// bulllets options

let YesShowoption = document.querySelector(".bullets-setting .yes");
let dontShowoption = document.querySelector(".bullets-setting .no");
let alloption = document.querySelectorAll(".bullets-setting li");
let optionlocat = localStorage.getItem("option-setting");

if (optionlocat !== null) {
  [YesShowoption, dontShowoption].forEach((span) => {
    const isActive = span.dataset.option === optionlocat;
    span.classList.toggle("active", isActive);
    if (span === YesShowoption && isActive)
      document.querySelector(".bullets-option").style.display = "block";
    if (span === dontShowoption && isActive)
      document.querySelector(".bullets-option").style.display = "none";
  });
}

[YesShowoption, dontShowoption].forEach((span) => {
  span.addEventListener("click", (e) => {
    const Ayes = e.target === YesShowoption;
    YesShowoption.classList.toggle("active", Ayes);
    dontShowoption.classList.toggle("active", !Ayes);
    if (Ayes) {
      document.querySelector(".bullets-option").style.display = "block";
    } else {
      document.querySelector(".bullets-option").style.display = "none";
    }
    localStorage.setItem("option-setting", e.target.dataset.option);
  });
});
// bulllets options
