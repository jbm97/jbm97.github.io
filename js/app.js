/*==================== toggle icon navbar ====================*/
/*==================== scroll sections active link ====================*/

/*==================== sticky navbar ====================*/
/*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/

/*==================== scroll reveal ====================*/
/*==================== typed js ====================*/

// Header
const body = document.body;
const header = document.createElement("header");
header.className = "header";
body.append(header);

// menu icon
const menuIcon = document.createElement("i");
menuIcon.className = "bx bx-menu";
menuIcon.id = "menu-icon";
header.append(menuIcon);

// Logo/title
const logo = document.createElement("a");
logo.href = "#";
logo.className = "logo";
logo.textContent = "Portfolio";
header.prepend(logo);

// Navbar
const nav = document.createElement("nav");
nav.className = "navbar";

const links = ["Home", "About", "Services", "Portfolio", "Contact"];

for (let i = 0; i < links.length; i++) {
    const link = document.createElement("a");
    link.href = `#${links[i].toLowerCase()}`;
    link.textContent = links[i];
    nav.append(link);
}

nav.children[0].className = "active"; // set home active
header.append(nav);

// Home Section
const home = document.createElement("section");
home.className = "home";
home.id = "home";
body.append(home);

// Home Div
const homeDiv = document.createElement("div");
homeDiv.className = "home-content";
home.append(homeDiv);

// text for home
const hi = document.createElement("h3");
hi.textContent = "Hello, It's Me";
homeDiv.append(hi);

const myName = document.createElement("h1");
myName.textContent = "Jake MacAdam";
homeDiv.append(myName);

const andIm = document.createElement("h3");
andIm.textContent = "And I'm a ";
homeDiv.append(andIm);

const title = document.createElement("span");
title.textContent = "Full Stack Developer";
andIm.append(title);

const text = document.createElement("p");
text.textContent =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, et. A debitis nobis beatae tenetur harum, et nam omnis esse?";
homeDiv.append(text);

// social media div
const socialDiv = document.createElement("div");
socialDiv.className = "social-media";
homeDiv.append(socialDiv);

// Socials
const facebook = document.createElement("a");
facebook.href = "#";
socialDiv.append(facebook);

const facebookClass = document.createElement("i");
facebookClass.className = "bx bxl-facebook";
facebook.append(facebookClass);

const twitter = document.createElement("a");
twitter.href = "#";
socialDiv.append(twitter);

const twitterClass = document.createElement("i");
twitterClass.className = "bx bxl-twitter";
twitter.append(twitterClass);

const instagram = document.createElement("a");
instagram.href = "#";
socialDiv.append(instagram);

const instagramClass = document.createElement("i");
instagramClass.className = "bx bxl-instagram";
instagram.append(instagramClass);

const linkedin = document.createElement("a");
linkedin.href = "#";
socialDiv.append(linkedin);

const linkedinClass = document.createElement("i");
linkedinClass.className = "bx bxl-linkedin";
linkedin.append(linkedinClass);

// Button
const button = document.createElement("a");
button.href = "#";
button.className = "btn";
button.textContent = "Download CV";
homeDiv.append(button);

// home image
const homeImage = document.createElement("div");
homeImage.className = "home-img";
home.append(homeImage);

const img = document.createElement("img");
img.src = "./images/personal-portfolio-pic.png";
homeImage.append(img);

// About secton
const about = document.createElement("section");
about.className = "about";
about.id = "about";
body.append(about);

// About Div
const aboutDiv = document.createElement("div");
aboutDiv.className = "about-content";
about.append(aboutDiv);

// text for about
const aboutMe = document.createElement("h2");
aboutMe.className = "heading";
aboutMe.textContent = "About ";
aboutDiv.append(aboutMe);

const me = document.createElement("span");
me.textContent = "Me";
aboutMe.append(me);

const title2 = document.createElement("h3");
title2.textContent = "Full Stack Developer";
aboutDiv.append(title2);

const info = document.createElement("p");
info.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus velit voluptatum officia sapiente numquam aperiam necessitatibus aliquid dolorum esse quis omnis exercitationem nihil aut in dicta, ipsum, maiores quae distinctio incidunt dolore consequatur libero ea.";
aboutDiv.append(info);

// about img
const aboutImage = document.createElement("div");
aboutImage.className = "about-img";
about.prepend(aboutImage); //append makes image and text flip sides of screen

const img2 = document.createElement("img");
img2.src = "./images/personal-portfolio-pic.png";
aboutImage.append(img2);

// read more button
const readMore = document.createElement("a");
readMore.href = "#";
readMore.className = "btn";
readMore.textContent = "Read More";
aboutDiv.append(readMore);
