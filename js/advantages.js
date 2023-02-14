//------data

let advantages = [
    {
        icon:"https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/compare.png",
        headline: "Convenience and Transparency",
        text: "You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5"
    },
    {
        icon:"https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/library_books.png",
        headline: "Digital marketing and editorial support",
        text: "You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5"
    },
    {
        icon:"https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Compare-HSV.png",
        headline: "Community of services dedicated to campers",
        text: "You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5"
    },
]

//-----------layout

document.querySelector(".advantages").innerHTML += `
<h3 class="advantagesHeadline">Our advantages</h3>
` ;

let advantagesSection = document.querySelector(".advantages");

let advanSec;

let advantageWrapper = document.createElement("div");
advantageWrapper.classList = "advantageWrapper";
advantagesSection.append(advantageWrapper);

advantages.forEach((element) => {
    advanSec = document.createElement("section");
    advanSec.classList = "advanCard";
    let icon = document.createElement("img");
    icon.classList = "advanIcon";
    let title = document.createElement("h2");
    title.classList = "advanTitle";
    let advanText = document.createElement("p");
    advanText.classList = "advanText"

    icon.src = element.icon;
    title.textContent = element.headline;
    advanText.textContent = element.text;

    advanSec.append(icon);
    advanSec.append(title);
    advanSec.append(advanText);
    advantageWrapper.append(advanSec);

});
