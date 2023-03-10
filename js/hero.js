// data

let hero = {
  image: "https://dazzling-squirrel-77a63d.netlify.app/imgs/hero.png",
  headline:
    "Find out how we can <span>save your time</span> in Backpacking in Europe",
  copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet id eget scelerisque amet etiam in sit commodo. Pretium ut duis orci pulvinar pretium id consectetur.",
  icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Globe.png",
};

// layout

//hero image
let heading = document.querySelector(".hero");
let heroImage = document.createElement("img");
heroImage.src = hero.image; //add src to img tag
heading.append(heroImage);

//icons hero
document.querySelector(".hero").innerHTML += `
<div class="hero-container">
<i class="fa-solid fa-cube"></i>
<button class="hero-portrait"><i class="fa-sharp fa-solid fa-arrow-down"></i><img src="/img/profile.svg"></button>
</div>
<div class="aside-container">
<aside class="hero-headline">${hero.headline}</aside>
<p class="hero-paragraf">${hero.copy}</p>
<button class="hero-button"><img src=${hero.icon} alt="">Explore</button>
</div>
`;

//styling
heroImage.classList.add("heroImage");
