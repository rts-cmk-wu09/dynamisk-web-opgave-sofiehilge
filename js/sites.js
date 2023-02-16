//---- data
let sites = {
    headline: "Join the community campervan sites managers.",
    text: "Discover all the equibbed areas in Italy. Find the shop with all the services for you and your camper.",
    btnicon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/arrow-icon.png",
    places: [
        {
            img: "https://dazzling-squirrel-77a63d.netlify.app/imgs/lucciano.png",
            name: "Lucciano",
            city: "Rome"
        },
        {
            img: "https://dazzling-squirrel-77a63d.netlify.app/imgs/cremonesi.png",
            name: "Cremonesi",
            city: "Florence"
        },
        {
            img: "https://dazzling-squirrel-77a63d.netlify.app/imgs/beneventi.png",
            name: "Beneventi",
            city: "Venice"
        },
    ]
}

//------layout


let sitesSection = document.querySelector(".sites");

let joinSiteWrapper = document.createElement("div");
joinSiteWrapper.classList = "joinSiteWrapper"

let headlineSite = document.createElement("h3");
headlineSite.classList = "headline-site";
headlineSite.textContent = sites.headline;
let textSite = document.createElement("p");
textSite.classList = "textSite";
textSite.textContent = sites.text
let btnIcon = document.createElement("button");
btnIcon.classList = "btnIcon";
let icon = document.createElement("img");
icon.src = sites.btnicon;
let start = document.createElement("p");
start.classList = "start";
start.innerHTML = "Start"


sitesSection.append(joinSiteWrapper);
joinSiteWrapper.append(headlineSite);
joinSiteWrapper.append(textSite);
joinSiteWrapper.append(btnIcon);
btnIcon.append(icon);
btnIcon.append(start);

//----loop med sites image
let imgSiteWrapper = document.createElement("div");
imgSiteWrapper.classList = "imgSiteWrapper"

sitesSection.append(imgSiteWrapper);

sites.places.forEach((element) => {
    sitesImg = document.createElement("div");
    sitesImg.classList = "imgCard";
    let img = document.createElement("img");
    img.classList = "sitesImage";
    let nameImg = document.createElement("h3");
    nameImg.classList = "nameImg";
    let cityImg = document.createElement("a");
    cityImg.classList = "cityImg";

    img.src = element.img;
    nameImg.textContent = element.name;
    cityImg.textContent = element.city;

    sitesImg.append(img);
    sitesImg.append(nameImg);
    sitesImg.append(cityImg);
    imgSiteWrapper.append(sitesImg);

})
