// data
let facilities = {
  headline: "Making your facility known is our priority",
  options: [
    {
      icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/list-check.png",
      headline: "Choose the type of stop",
      text: "Select the type of stopover you are ordering from Equipped Area, Camping and Agricamping",
    },
    {
      icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/spellcheck.png",
      headline: "Describe your structure",
      text: "Describe thee property, location and nearby attractions",
    },
    {
      icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Text-Frame-Add.png",
      headline: "Build your showcase",
      text: "Add photos, videos and descriptions Define the price of each type of that make your propety truly",
    },
    {
      icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Calendar-Today.png",
      headline: "Prices and Availability",
      text: "pitch and configure the availablity calendar.",
    },
  ],
};

//-------- layout

let facilitiesSection = document.querySelector(".facilities");

let headline = document.createElement("h3");
headline.classList = "headline-facilities";
headline.textContent = facilities.headline;

facilitiesSection.append(headline);

let facilitySec;

let facilityWrapper = document.createElement("div");
facilityWrapper.classList = "facilityWrapper";

facilitiesSection.append(facilityWrapper);

facilities.options.forEach((element) => {
  facilitySec = document.createElement("section");
  facilitySec.classList = "facilityCard";
  let icon = document.createElement("img");
  icon.classList = "facilityIcon";
  let title = document.createElement("h2");
  title.classList = "facilityTitle"
  let faciText = document.createElement("p");
  faciText.classList = "faciText"
  let faciLink = document.createElement("a");
  faciLink.classList = "faciLink"

  icon.src = element.icon;
  title.textContent = element.headline;
  faciText.textContent = element.text;
  faciLink.innerHTML = "Show me more"
  /* faciLink.textContent = element.; */

  facilitySec.append(icon);
  facilitySec.append(title);
  facilitySec.append(faciText)
  facilitySec.append(faciLink);
  facilityWrapper.append(facilitySec);
});

//---------style HVORFOR virker det ikke?????!11111
/* let headline = `
font-size: 36px
font-weight: bold
`

headline.style = headline */
