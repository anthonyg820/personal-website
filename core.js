
// HELPER FUNCTIONS
function getDocumentHeight() {

    let siteContent = document.getElementById("siteContent");
    var height = Math.max(siteContent.scrollHeight, siteContent.offsetHeight);

    return height;
}

function getViewportWidth() {

    let height = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    return height;
}

function getViewportHeight() {

    let height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    return height;
}

//APPLICATION FUNCTIONS
function hideSplash() {
    let splash = document.getElementById("splash");
    let splashCircleOuter = document.getElementById("splashCircleOuter");
    let splashCircleInner = document.getElementById("splashCircleInner");
    let siteContent = document.getElementById("siteContent");
    let logo = document.getElementById("logo");
    let menuButton = document.getElementById("menuButton");
    let leftHomeContent = document.getElementById("leftOfHome").getElementsByClassName("homeHalfContent")[0];
    let rightHomeContent = document.getElementById("rightOfHome").getElementsByClassName("homeHalfContent")[0];

    setTimeout(() => { // SHRINK CENTER ICON
        splashCircleOuter.style.width = "0px";
        splashCircleOuter.style.height = "0px";
        splashCircleOuter.style.border = "0px";

        splashCircleInner.style.width = "0px";
        splashCircleInner.style.height = "0px";
        splashCircleInner.style.border = "0px";

        setTimeout(() => { // CLOSE SPLASH AND SHOW HOME
            splash.style.height = 0;
            // siteContent.style.overflowY = "auto";

            setTimeout(() => { //SHOW MENU BUTTON AND LOGO
                splash.style.display = "none";
                logo.style.left = "21px";
                menuButton.style.left = "33px";

                setTimeout(() => { // SHOW LEFT HOME CONTENT
                    leftHomeContent.style.marginLeft = "0";
                    leftHomeContent.style.opacity = "1";

                    setTimeout(() => {// SHOW RIGHT HOME CONTENT
                        rightHomeContent.style.marginRight = "0";
                        rightHomeContent.style.opacity = "1";

                    }, 250);
                }, 250);
            }, 800);
        }, 200);
    }, 3000);
}

function showOrHideNav() {
    let siteContent = document.getElementById("siteContent");
    let menuButton = document.getElementById("menuButton");
    let menuButtonLines = menuButton.getElementsByClassName("menuButtonLine");
    let logo = document.getElementById("logo");

    if (siteContent.style.left == "0px" || siteContent.style.left == "") {
        siteContent.style.left = "96px";
        //siteContent.style.top = "-96px";
        siteContent.style.borderBottom = "2px solid var(--gray-3)";
        siteContent.style.borderLeft = "2px solid var(--gray-3)";

        logo.style.background = "var(--purple-3)";
        logo.style.color = "var(--white-1)";
        logo.style.opacity = "1";

        for (var i = 0; i < menuButtonLines.length; i++) {
            menuButtonLines[i].style.background = "var(--purple-3)";
        }

        menuButtonLines[1].style.display = "none";
        menuButtonLines[0].style.transform = "rotate(45deg)";
        menuButtonLines[0].style.top = "12px";
        menuButtonLines[2].style.transform = "rotate(-45deg)";
        menuButtonLines[2].style.top = "-12px";

    }
    else {
        siteContent.style.left = "0px";
        //siteContent.style.top = "0px";

        siteContent.style.border = "0";

        setMenuButtonBackground();

        menuButtonLines[1].style.display = "block";
        menuButtonLines[0].style.transform = "rotate(0deg)";
        menuButtonLines[0].style.top = "0";
        menuButtonLines[2].style.transform = "rotate(0deg)";
        menuButtonLines[2].style.top = "-0";
    }
}

function setDarkOrLightMode() {
    let darkModeButton = document.getElementById("darkModeButton");

    let root = document.querySelector(':root');

    if (darkModeButton.getElementsByTagName("p")[0].innerText == "Light mode") {
        darkModeButton.getElementsByTagName("p")[0].innerText = "Dark mode";
        darkModeButton.getElementsByTagName("img")[0].src = "assets/bulb_off.svg";

        // SET DARK MODE

        // SET CSS VARIABLES
        root.style.setProperty('--purple-1', 'hsl(210, 11%, 35%)');
        root.style.setProperty('--purple-2', 'hsl(210, 11%, 25%)');
        root.style.setProperty('--purple-3', 'hsl(210, 11%, 15%)');
        root.style.setProperty('--white-1', 'hsl(0, 0%, 60%)');
        root.style.setProperty('--white-2', 'hsl(213, 100%, 98%)');
        root.style.setProperty('--white-3', 'hsl(210, 11%, 15%)');
        root.style.setProperty('--black-1', 'hsl(210, 11%, 15%)');
        root.style.setProperty('--black-2', 'hsl(0, 0%, 0%)');
        root.style.setProperty('--gray-1', 'hsl(0, 0%, 0%)');
        root.style.setProperty('--gray-2', 'hsl(0, 0%, 95%)');
        root.style.setProperty('--gray-3', 'hsl(230, 46%, 95%)');
        root.style.setProperty('--gray-4', 'hsl(0, 0%, 60%)');
        root.style.setProperty('--gray-5', 'hsl(0, 0%, 34%)');
    }
    else {
        darkModeButton.getElementsByTagName("p")[0].innerText = "Light mode";
        darkModeButton.getElementsByTagName("img")[0].src = "assets/bulb_on.svg";

        // SET LIGHT MODE

        // SET CSS VARIABLES
        root.style.setProperty('--purple-1', 'hsl(234, 100%, 77%)');
        root.style.setProperty('--purple-2', 'hsl(234, 100%, 69%)');
        root.style.setProperty('--purple-3', 'hsl(235, 93%, 65%)');
        root.style.setProperty('--white-1', 'hsl(0, 0%, 100%)');
        root.style.setProperty('--white-2', 'hsl(213, 100%, 98%)');
        root.style.setProperty('--white-3', 'hsl(219, 83%, 95%)');
        root.style.setProperty('--black-1', 'hsl(210, 11%, 15%)');
        root.style.setProperty('--black-2', 'hsl(0, 0%, 0%)');
        root.style.setProperty('--gray-1', 'hsl(0, 0%, 98%)');
        root.style.setProperty('--gray-2', 'hsl(0, 0%, 95%)');
        root.style.setProperty('--gray-3', 'hsl(230, 46%, 95%)');
        root.style.setProperty('--gray-4', 'hsl(0, 0%, 60%)');
        root.style.setProperty('--gray-5', 'hsl(0, 0%, 34%)');
    }
}

function scrollToSection(tab) {
    //SCROLLS TO SELECTED SECTION. ONCLICK

    let siteContent = document.getElementById("siteContent");

    let slides = document.getElementsByClassName("slide");
    let chosenSlide = slides[tab + 1];

    // HIDE NAVIGATION IF SHOWING
    if (siteContent.style.left != "0px" && siteContent.style.left != "")
        showOrHideNav();

    setTimeout(() => {
        // SCROLL TO CHOSEN SECTION
        // scrollTo(siteContent, chosenSlide.offsetTop, 1000);
        smoothScroll({ yPos: chosenSlide.offsetTop, duration: 750, scrollingElement: siteContent, easing: smoothScroll.easing.swing });
    }, 300);
}

function advanceToNextSlide(event, touchStartY, touchEndY) {

    let siteContent = document.getElementById("siteContent");

    let slideBreakPoint1 = 10;
    let slideBreakPoint2 = 10 + getViewportHeight();
    let slideBreakPoint3 = 10 + getViewportHeight() * 2;
    let slideBreakPoint4 = 10 + getViewportHeight() * 3;

    // console.log("BREAKPOINT1:" + slideBreakPoint1);
    // console.log("BREAKPOINT2:" + slideBreakPoint2);
    // console.log("BREAKPOINT3:" + slideBreakPoint3);
    // console.log("BREAKPOINT4:" + slideBreakPoint4);

    // console.log("CURRENT SCROLL:" + siteContent.scrollTop);

    //IF THE USER IS SCROLLING VIA MOUSE WHEEL OR TOUCHPAD
    if (event.type == "wheel") {
        siteContent.removeEventListener("wheel", advanceToNextSlide);

        // console.log(event.deltaY);

        // SCROLL TO TARGET SLIDE
        if (siteContent.scrollTop < slideBreakPoint1) {
            if (event.deltaY > 0) // IF USER IS SCROLLING DOWN
                scrollToSection(1);
        }
        else if (siteContent.scrollTop >= slideBreakPoint1 && siteContent.scrollTop < slideBreakPoint2) {
            if (event.deltaY > 0) // IF USER IS SCROLLING DOWN
                scrollToSection(2);
            else if (event.deltaY < 0) // IF USER IS SCROLLING UP
                scrollToSection(0);
        }
        else if (siteContent.scrollTop >= slideBreakPoint2 && siteContent.scrollTop < slideBreakPoint3) {
            if (event.deltaY > 0) // IF USER IS SCROLLING DOWN
                scrollToSection(3);
            else if (event.deltaY < 0) // IF USER IS SCROLLING UP
                scrollToSection(1);
        }
        else if (siteContent.scrollTop >= slideBreakPoint3 && siteContent.scrollTop < slideBreakPoint4) {
            if (event.deltaY > 0) // IF USER IS SCROLLING DOWN
                scrollToSection(4);
            else if (event.deltaY < 0) // IF USER IS SCROLLING UP
                scrollToSection(2);
        }
        else if (siteContent.scrollTop > slideBreakPoint4) {
            if (event.deltaY < 0) // IF USER IS SCROLLING UP
                scrollToSection(3);
        }

        setTimeout(() => {
            siteContent.addEventListener("wheel", advanceToNextSlide);
        }, 1000);
    }
    else if (event.type == "touchend") {
        // console.log(touchStartY);
        // console.log(touchEndY);

        if (Math.abs(touchStartY - touchEndY) > 75) { // ATTEMPT TO IGNORE ACCIDENTAL INPUTS
            // SCROLL TO TARGET SLIDE
            if (siteContent.scrollTop < slideBreakPoint1) {
                if (touchStartY > touchEndY) //IF THE USER IS SWIPING UP, THEN SCROLL DOWN
                    scrollToSection(1);
            }
            else if (siteContent.scrollTop >= slideBreakPoint1 && siteContent.scrollTop < slideBreakPoint2) {
                if (touchStartY > touchEndY) //IF THE USER IS SWIPING UP, THEN SCROLL DOWN
                    scrollToSection(2);
                else if (touchStartY < touchEndY) //IF THE USER IS SWIPING DOWN, THEN SCROLL UP
                    scrollToSection(0);
            }
            else if (siteContent.scrollTop >= slideBreakPoint2 && siteContent.scrollTop < slideBreakPoint3) {
                if (touchStartY > touchEndY) //IF THE USER IS SWIPING UP, THEN SCROLL DOWN
                    scrollToSection(3);
                else if (touchStartY < touchEndY) //IF THE USER IS SWIPING DOWN, THEN SCROLL UP
                    scrollToSection(1);
            }
            else if (siteContent.scrollTop >= slideBreakPoint3 && siteContent.scrollTop < slideBreakPoint4) {
                if (touchStartY > touchEndY) //IF THE USER IS SWIPING UP, THEN SCROLL DOWN
                    scrollToSection(4);
                else if (touchStartY < touchEndY) //IF THE USER IS SWIPING DOWN, THEN SCROLL UP
                    scrollToSection(2);
            }
            else if (siteContent.scrollTop >= slideBreakPoint4) {
                if (touchStartY < touchEndY) //IF THE USER IS SWIPING DOWN, THEN SCROLL UP
                    scrollToSection(3);
            }
        }
    }

}

function setActiveNavTab() {
    //SETS ACTIVE NAV ELEMENT. ONSCROLL

    let siteContent = document.getElementById("siteContent");

    let nav = document.getElementsByTagName("nav")[0];
    let navLinks = nav.getElementsByTagName("li");

    // let homeLink = nav.getElementsByTagName("li")[0];
    let skillsLink = nav.getElementsByTagName("li")[0];
    let experienceLink = nav.getElementsByTagName("li")[1];
    let educationLink = nav.getElementsByTagName("li")[2];
    let projectsLink = nav.getElementsByTagName("li")[3];

    let menuTogglePoint1 = 10;
    let menuTogglePoint2 = 10 + getViewportHeight();
    let menuTogglePoint3 = 10 + getViewportHeight() * 2;
    let menuTogglePoint4 = 10 + getViewportHeight() * 3;
    let menuTogglePoint5 = 10 + getViewportHeight() * 4;

    // CLEAR NAV STYLES
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove("activeTab");
    }

    // SET ACTIVE NAV TAB
    // if (siteContent.scrollTop < menuTogglePoint1) {
    //     homeLink.classList.add("activeTab");
    // }
    if (siteContent.scrollTop >= menuTogglePoint1 && siteContent.scrollTop < menuTogglePoint2) {
        skillsLink.classList.add("activeTab");
    }
    else if (siteContent.scrollTop >= menuTogglePoint2 && siteContent.scrollTop < menuTogglePoint3) {
        experienceLink.classList.add("activeTab");
    }
    else if (siteContent.scrollTop >= menuTogglePoint3 && siteContent.scrollTop < menuTogglePoint4) {
        educationLink.classList.add("activeTab");
    }
    else if (siteContent.scrollTop >= menuTogglePoint4) {
        projectsLink.classList.add("activeTab");
    }

}

function setMenuButtonBackground() { //ALSO SETS THE LOGO BACKGROUND / COLOR
    //SETS COLOR OF MENU BUTTON. ONSCROLL AND ON MENU BUTTON CLICK

    let menuButton = document.getElementById("menuButton");
    let menuButtonLines = menuButton.getElementsByClassName("menuButtonLine");
    let siteContent = document.getElementById("siteContent");

    let menuTogglePoint1 = 60;
    let menuTogglePoint2 = 60 + getViewportHeight();
    let menuTogglePoint3 = 60 + getViewportHeight() * 2;
    let menuTogglePoint4 = 60 + getViewportHeight() * 3;
    let menuTogglePoint5 = 60 + getViewportHeight() * 4;

    let menuBackgroundColor = "";

    let logo = document.getElementById("logo");

    // SET MENU BUTTON COLOR
    if (siteContent.scrollTop < menuTogglePoint1) {
        menuBackgroundColor = "var(--white-1)";
        logo.style.background = "var(--white-1)";
        logo.style.color = "var(--purple-3)";
        logo.style.opacity = "1";
    }
    else if (siteContent.scrollTop >= menuTogglePoint1 && siteContent.scrollTop < menuTogglePoint2) {
        menuBackgroundColor = "var(--purple-3)";
        logo.style.background = "var(--purple-3)";
        logo.style.color = "var(--white-1)";

        if (getViewportWidth() < 600) {
            logo.style.opacity = "0";
        }
    }
    else if (siteContent.scrollTop >= menuTogglePoint2 && siteContent.scrollTop < menuTogglePoint3) {
        menuBackgroundColor = "var(--white-1)";
        logo.style.background = "var(--white-1)";
        logo.style.color = "var(--purple-3)";

        if (getViewportWidth() < 600) {
            logo.style.opacity = "0";
        }
    }
    else if (siteContent.scrollTop >= menuTogglePoint3 && siteContent.scrollTop < menuTogglePoint4) {
        menuBackgroundColor = "var(--white-1)";
        logo.style.background = "var(--white-1)";
        logo.style.color = "var(--purple-3)";

        if (getViewportWidth() < 600) {
            logo.style.opacity = "0";
        }
    }
    else if (siteContent.scrollTop >= menuTogglePoint4 && siteContent.scrollTop < menuTogglePoint5) {
        menuBackgroundColor = "var(--purple-3)";
        logo.style.background = "var(--purple-3)";
        logo.style.color = "var(--white-1)";

        if (getViewportWidth() < 600) {
            logo.style.opacity = "0";
        }
    }


    for (var i = 0; i < menuButtonLines.length; i++) {
        menuButtonLines[i].style.background = menuBackgroundColor;
    }
}

function previousCarouselSlide(slideId) { 
    let carousel = document.getElementById(slideId).getElementsByClassName("carousel")[0];
    let carouselContent = carousel.getElementsByClassName("carouselContent")[0];
    let carouselList = carouselContent.getElementsByClassName("carouselList")[0];
    let carouselItems = carouselList.getElementsByClassName("carouselItemWrapper");
    let carouselItemWidth = carouselItems[0].offsetWidth; 
    let leftArrow = carousel.getElementsByClassName("carouselArrowContainer")[0];
    let rightArrow = carousel.getElementsByClassName("carouselArrowContainer")[1];

    let currentScroll = carouselList.scrollLeft;
    let slideContentOffset = (getViewportWidth() * .10) + 1;

    let currentItem = Math.round(currentScroll / carouselItemWidth);
    let breakpoint = currentScroll;

    if(currentItem+1 > 0)
        breakpoint = carouselItems[currentItem - 1].offsetLeft - slideContentOffset;

    if (currentItem-1 == 0) 
        leftArrow.style.opacity = 0.0;

    rightArrow.style.opacity = 1.0;

    smoothScroll({ xPos: breakpoint, duration: 500, scrollingElement: carouselList, easing: smoothScroll.easing.swing });
}

function nextCarouselSlide(slideId) { 
    let carousel = document.getElementById(slideId).getElementsByClassName("carousel")[0];
    let carouselContent = carousel.getElementsByClassName("carouselContent")[0];
    let carouselList = carouselContent.getElementsByClassName("carouselList")[0];
    let carouselItems = carouselList.getElementsByClassName("carouselItemWrapper");
    let carouselItemWidth = carouselItems[0].offsetWidth; 
    let leftArrow = carousel.getElementsByClassName("carouselArrowContainer")[0];
    let rightArrow = carousel.getElementsByClassName("carouselArrowContainer")[1];

    let currentScroll = carouselList.scrollLeft;
    let slideContentOffset = (getViewportWidth() * .10) + 1;

    let currentItem = Math.round(currentScroll / carouselItemWidth);

    let breakpoint = currentScroll;
    
    if(currentItem+1 < carouselItems.length)
        breakpoint = carouselItems[currentItem + 1].offsetLeft - slideContentOffset;

    if (currentItem+1 == carouselItems.length-1) 
        rightArrow.style.opacity = 0.0;
        
    leftArrow.style.opacity = 1.0;

    smoothScroll({ xPos: breakpoint, duration: 500, scrollingElement: carouselList, easing: smoothScroll.easing.swing });
}

function animateCarousel(slideId, togglePoint) {
    let carouselTogglePoint = getViewportHeight() * .6;
    let siteContent = document.getElementById("siteContent");
    let carousel = document.getElementById(slideId).getElementsByClassName("carousel")[0];
    let carouselContent = carousel.getElementsByClassName("carouselContent")[0];
    let carouselList = carouselContent.getElementsByClassName("carouselList")[0];
    let carouselItems = carouselList.getElementsByClassName("carouselItemWrapper");

    if (siteContent.scrollTop > togglePoint) {

        // loop through and animate each carousel item with a 200ms delay between each animation
        for(let i = 0; i < carouselItems.length; i++) {
            setTimeout(() => {
                carouselItems[i].style.marginTop = "0px";
                carouselItems[i].style.opacity = "1";
            }, 200 * i);
        }
    }
}

function animateObjects() {

    animateCarousel('skills', (getViewportHeight() * .6));
    animateCarousel('experience', (getViewportHeight() * .6) + getViewportHeight());
    animateCarousel('education', (getViewportHeight() * .6) + (getViewportHeight() * 2));
    animateCarousel('projects', (getViewportHeight() * .6) + (getViewportHeight() * 3));

}
