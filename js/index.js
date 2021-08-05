const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//navbar
let navBar = document.querySelectorAll('a')
let navLinks = Object.values(siteContent.nav)

for (i=0; i < navBar.length; i++){
  navBar[i].textContent = navLinks[i]
  navBar[i].style = 'color:green;'
}

let newNav = document.createElement('a')
let navAnchor = document.querySelector('nav')
newNav.setAttribute('href', '#')
newNav.textContent = "FAQ"
navAnchor.appendChild(newNav)

let newNav2 = document.createElement('a')
let navAnchor2 = document.querySelector('nav')
newNav2.setAttribute('href', '#')
newNav2.textContent = "Career"
navAnchor2.prepend(newNav2)



//title section
let title = document.querySelector('h1')
title.textContent = siteContent.cta.h1

let titleButton = document.querySelector('button')
console.log(titleButton)
titleButton.textContent = siteContent.cta.button

let titleImg = document.getElementById('cta-img')
titleImg.setAttribute('src', siteContent['cta']['img-src'])

//main content 

let contentTitle = document.querySelectorAll('h4')
let contentText = document.querySelectorAll('p')
let contentImg = document.getElementById('middle-img')


//features
contentTitle[0].textContent = siteContent["main-content"]["features-h4"]
contentText[0].textContent = siteContent["main-content"]["features-content"]

//about
contentTitle[1].textContent = siteContent["main-content"]["about-h4"]
contentText[1].textContent = siteContent["main-content"]["about-content"]

//image
contentImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//product
contentTitle[2].textContent = siteContent["main-content"]["product-h4"]
contentText[2].textContent = siteContent["main-content"]["product-content"]

//vision
contentTitle[3].textContent = siteContent["main-content"]["vision-h4"]
contentText[3].textContent = siteContent["main-content"]["vision-content"]

//contact

let contactTitle = document.querySelector('.contact h4')
let contactInfo = document.querySelectorAll('.contact p')


contactTitle.textContent = siteContent.contact["contact-h4"]
contactInfo[0].textContent = siteContent.contact.address
contactInfo[1].textContent = siteContent.contact.phone
contactInfo[2].textContent = siteContent.contact.email

//copyright

let copyright = document.querySelector('footer p')
copyright.textContent = siteContent.footer.copyright