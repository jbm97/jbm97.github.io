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
logo.textContent = "Porfolio";
header.append(logo);

// Navbar
const nav = document.createElement("nav");
nav.className = "navbar";

const links = ["Home", "About", "Services", "Portfolio", "Contact"];

for (let i = 0; i < links.length; i++) {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = links[i];
    nav.append(link);
}

nav.children[0].className = "active"; // set home active
header.append(nav);
