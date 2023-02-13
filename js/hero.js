// data

let hero = {
  image: "https://dazzling-squirrel-77a63d.netlify.app/imgs/hero.png",
  headline: "Find out how we can save your time in Backpacking in Europe",
  copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet id eget scelerisque amet etiam in sit commodo. Pretium ut duis orci pulvinar pretium id consectetur.",
  icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Globe.png",
};

// layout

//hero image
let heading = document.querySelector(".hero");
let heroImage = document.createElement("img");
heroImage.src = hero.image; //add src to img tag
heading.appendChild(heroImage);

//icons hero
document.querySelector(".hero").innerHTML += `
<div class="hero-container">
<i class="fa-sharp fa-regular fa-cube"></i>
<button class="hero-button"><i class="fa-solid fa-image-portrait"></i></button>
</div>
<div class="aside-container">
<aside class="hero-headline">${hero.headline}</aside>
<p>${hero.copy}</p>
<button><img src=${hero.icon} alt=""></button>
</div>
`;

//styling
heroImage.classList.add("heroImage");

