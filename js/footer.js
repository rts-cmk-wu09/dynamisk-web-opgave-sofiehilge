//-------data

let footer = {
  text: "Easy Camper",
  headline: "When passion meets comfort.",
  options: [
    {
      headline: "Discover the Network",
      textOne: "Where to shop",
      textTwo: "Tour Guided",
      textThree: "Our Tours",
      textFour: "About us",
    },
    {
      headline: "Become a Manager",
      textOne: "Join your pairing",
      textTwo: "Offer your Service",
      textThree: "Are you a guide?",
    },
    {
      headline: "Assistance",
      textOne: "Support Center",
      textThree: "FAQs",
      textFour: "Cancellation Options",
      textFive: "Reliability and Sequrity",
    },
  ],
  nav: "EazyCamper. All rights reserved",
  links:["About", "Site Map", "Terms", "Privacy Policy","Teams"
],
};

//-----------layout
let body = document.querySelector("body");
let footerSection = document.createElement("section");
footerSection.classList = "footerSection";
body.append(footerSection);

let headFooterWrapper = document.createElement("div");
headFooterWrapper.classList = "headFooter";

let textFooter = document.createElement("h3");
textFooter.classList = "textFooter";
textFooter.textContent = footer.text;
let headlineFooter = document.createElement("h2");
headlineFooter.classList = "headlineFooter";
headlineFooter.textContent = footer.headline;

footerSection.append(headFooterWrapper);
headFooterWrapper.append(textFooter);
headFooterWrapper.append(headlineFooter);

//-----loop med sitemaps

let siteMapsWrap = document.createElement("div");
siteMapsWrap.classList.add("siteMapsWrap");

footerSection.append(siteMapsWrap);

footer.options.forEach((element) => {
  siteMapHeader = document.createElement("div");
  siteMapHeader.classList.add("siteMapCard");
  let headline = document.createElement("h3");
  headline.classList = "cardHeadline";
  let textOne = document.createElement("a");
  textOne.classList = "textCard";
  let textTwo = document.createElement("a");
  textTwo.classList = "textCard";
  let textThree = document.createElement("a");
  textThree.classList = "textCard";
  let textFour = document.createElement("a");
  textFour.classList = "textCard";
  let textFive = document.createElement("a");
  textFive.classList = "textCard";

  headline.textContent = element.headline;
  textOne.textContent = element.textOne;
  textTwo.textContent = element.textTwo;
  textThree.textContent = element.textThree;
  textFour.textContent = element.textFour;
  textFive.textContent = element.textFive

  siteMapHeader.append(headline);
  siteMapHeader.append(textOne);
  siteMapHeader.append(textTwo);
  siteMapHeader.append(textThree);
  siteMapHeader.append(textFour);
  siteMapHeader.append(textFive)
  siteMapsWrap.append(siteMapHeader);
});


//----- nav footer

let footerNavLine = document.createElement("hr");

footerSection.append(footerNavLine);

let footerNavSection = document.createElement("div");
footerNavSection.classList.add("footerNavWrapper");

footerSection.append(footerNavSection);


let footerNav = document.createElement("nav");
footerNav.classList.add("footerNav");

let list = document.createElement("ul");

footer.links.forEach((element) => {
  let listItem = document.createElement ("li");
  listItem.textContent = element;

  list.append(listItem)
  footerNavSection.append(listItem)
})


/* MANGLER STYLING */