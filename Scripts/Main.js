var navBtn;
var arrow;
var home;
var about;
var portfolio;
var contact;
var headerInfo;
var homeHeight;
var lastHeight;
var lastClicked;
var measuremntsInit = false;
var initFinished = false;
var CSharp;
var JS;
var CSSSkill;
var HTML;
var SQL;
var GitHub;
var VS;
var VSC;
var MVC;
var MVVM;
var DI;
var WPF;
var Core;
var EF;
var block = false;
var set = false;
var showMoreBtn;
var stack;
var linkedIn;
var lBckg;
var hLIndex = 0;
var aWIndex = 0;
var dCGEIndex = 0;
var dCGSDIndex = 0;
var snakeIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
    navBtn = document.getElementById("nav-btn");
    arrow = document.getElementById("arrow")
    home = document.getElementById("home");
    about = document.getElementById("about");
    portfolio = document.getElementById("portfolio");
    contact = document.getElementById("contact");
    headerInfo = document.getElementById("header_info");
    homeHeight = headerInfo.offsetHeight;
    showMoreBtn = document.getElementById("show_more_btn");
    stack = document.getElementById("stack");
    linkedIn = document.getElementById("linkedin");
    lBckg = document.getElementById("l-bckg");
    InitializeSkills();
    setMenuPadding();
    addListeners();
});

function addListeners() {
    navBtn.addEventListener("mouseenter", rotateArrowDown);
    navBtn.addEventListener("mouseleave", rotateArrowRight);
    home.addEventListener("click", scrolltodiv);
    about.addEventListener("click", scrolltodiv);
    portfolio.addEventListener("click", scrolltodiv);
    contact.addEventListener("click", scrolltodiv);
    window.addEventListener("scroll", setMenuPadding);
    navBtn.addEventListener("click", goToAboutSection);
    window.addEventListener('resize', windowSizeChanging);
    window.addEventListener('load', GoTop);
    linkedIn.addEventListener("mouseenter", linkedColor);
    linkedIn.addEventListener("mouseleave", linkedCasual);
    stack.addEventListener("mouseenter", stackColor);
    stack.addEventListener("mouseleave", stackCasual);
    RunSlideShow();
}

function RunSlideShow(){
    HLSlideShow();
    AWSlideShow();
    DCGESlideShow();
    DCGSDSlideShow();
    SnakeSlideShow();
    setTimeout(RunSlideShow, 4000);
}

function stackColor() {
    stack.setAttribute('src', "./Images/footerIcons/stack-overflow-color.png");
}

function stackCasual() {
    stack.setAttribute('src', "./Images/footerIcons/stack-overflow.png");
}

function linkedColor() {
    linkedIn.setAttribute('src', "./Images/footerIcons/linkedin-color.png");
    lBckg.style.display = "block";
}

function linkedCasual() {
    linkedIn.setAttribute('src', "./Images/footerIcons/linkedin.png");
    lBckg.style.display = "none";
}

function InitializeSkills() {
    CSharp = document.getElementById('CSharp');
    JS = document.getElementById('JS');
    CSSSkill = document.getElementById('CSS');
    HTML = document.getElementById('HTML');
    SQL = document.getElementById('SQL');
    GitHub = document.getElementById('GitHubS');
    VS = document.getElementById('VS');
    VSC = document.getElementById('VSCode');
    MVC = document.getElementById('MVC');
    MVVM = document.getElementById('MVVM');
    DI = document.getElementById('DI');
    WPF = document.getElementById('WPF');
    Core = document.getElementById('Core');
    EF = document.getElementById('EF');
}

function GoTop() {
    id = document.getElementById("header_info");
    about.style.color = "rgb(53, 176, 253)";
    distance = findPos(id);
    lastClicked = "about";
    setTimeout(function () {
        window.scrollTo(0, 1);
    }, 2);
    initFinished = true;
}

function rotateArrowDown() {
    arrow.className = "arrow-down";
};

function rotateArrowRight() {
    arrow.className = "arrow-right";
};

function scrolltodiv(object) {
    if (object.currentTarget != null) {
        var id = object.currentTarget.id;
        var distance = 0;
        switch (id) {
            case "home":
                id = document.getElementById("header_info");
                home.style.color = "rgb(53, 176, 253)";
                distance = findPos(id);
                UnclickMenuOption("home");
                lastClicked = "home";
                break;
            case "about":
                id = document.getElementById("about_section");
                about.style.color = "rgb(53, 176, 253)";
                distance = parseInt(findPos(id));
                barPosition = window.scrollY
                if (distance < barPosition)
                    distance = parseInt(distance) + 50;
                UnclickMenuOption("about");
                lastClicked = "about";
                break;
            case "portfolio":
                id = document.getElementById("portfolio_section");
                portfolio.style.color = "rgb(53, 176, 253)";
                distance = findPos(id);
                UnclickMenuOption("portfolio");
                lastClicked = "portfolio";
                break;
            case "contact":
                id = document.getElementById("contact_section");
                contact.style.color = "rgb(53, 176, 253)";
                distance = findPos(id);
                UnclickMenuOption("contact");
                lastClicked = "contact";
                break;
        }
        window.scrollTo({ top: distance, behavior: 'smooth' });
        CheckChoosenOption();
    }
}

function findPos(obj) {
    if (obj != null) {
        var curtop = 0;
        if (obj.offsetParent) {
            do {
                curtop += obj.offsetTop;
            } while (obj = obj.offsetParent);
            return [parseInt(curtop) - 50];
        }
    }
}

function CheckChoosenOption() {
    if (lastClicked != "about") {
        debugger;
        CSharp.children[1].firstElementChild.style.width = "0%";
        CSharp.children[2].innerHTML = "0%";
        JS.children[1].firstElementChild.style.width = "0%";
        JS.children[2].innerHTML = "0%";
        CSSSkill.children[1].firstElementChild.style.width = "0%";
        CSSSkill.children[2].innerHTML = "0%";
        HTML.children[1].firstElementChild.style.width = "0%";
        HTML.children[2].innerHTML = "0%";
        SQL.children[1].firstElementChild.style.width = "0%";
        SQL.children[2].innerHTML = "0%";
        GitHub.children[1].firstElementChild.style.width = "0%";
        GitHub.children[2].innerHTML = "0%";
        VS.children[1].firstElementChild.style.width = "0%";
        VS.children[2].innerHTML = "0%";
        VSC.children[1].firstElementChild.style.width = "0%";
        VSC.children[2].innerHTML = "0%";
        //SubSkills
        MVC.children[1].firstElementChild.style.width = "0%";
        MVC.children[2].innerHTML = "0%";
        MVVM.children[1].firstElementChild.style.width = "0%";
        MVVM.children[2].innerHTML = "0%";
        DI.children[1].firstElementChild.style.width = "0%";
        DI.children[2].innerHTML = "0%";
        WPF.children[1].firstElementChild.style.width = "0%";
        WPF.children[2].innerHTML = "0%";
        Core.children[1].firstElementChild.style.width = "0%";
        Core.children[2].innerHTML = "0%";
        EF.children[1].firstElementChild.style.width = "0%";
        EF.children[2].innerHTML = "0%";
        measuremntsInit = false;
        block = true;
    }
}

function setMenuPadding() {
    var barPosition = window.scrollY;
    CheckBarPosition(barPosition);
    if (barPosition >= homeHeight)
        document.getElementById("menu_container").style.position = "fixed";
    else
        document.getElementById("menu_container").style.position = "relative";
}

function CheckBarPosition(barPosition) {
    var homeCurrentOffset = document.getElementById('header_info').offsetHeight;
    var aboutCurrentOffset = document.getElementById('about_section').offsetHeight;
    var portfolioCurrentOffset = document.getElementById('portfolio_section').offsetHeight;
    var contactCurrentOffset = document.getElementById('contact_section').offsetHeight;

    var firstSection = homeCurrentOffset - 50;
    var secondSection = parseInt(homeCurrentOffset) + parseInt(aboutCurrentOffset) - 50;
    var thirdSection = parseInt(homeCurrentOffset) + parseInt(aboutCurrentOffset) +
        parseInt(portfolioCurrentOffset) - 50;
    var fourthSection = parseInt(homeCurrentOffset) + parseInt(aboutCurrentOffset) +
        parseInt(portfolioCurrentOffset) + parseInt(contactCurrentOffset) - 50;
    if (initFinished) {
        if (barPosition <= 1) {
            UnclickMenuOption("home");
            lastClicked = "home";
            home.style.color = "rgb(53, 176, 253)";
            CheckChoosenOption();
            block = false;
        }
        else if (barPosition >= firstSection && barPosition < secondSection) {
            if (!measuremntsInit && !block) {
                generateMeasurements();
                measuremntsInit = true;
            }
            UnclickMenuOption("about");
            lastClicked = "about";
            about.style.color = "rgb(53, 176, 253)";
        }
        else if (barPosition >= secondSection && barPosition < thirdSection) {
            UnclickMenuOption("portfolio");
            lastClicked = "portfolio";
            portfolio.style.color = "rgb(53, 176, 253)";
            CheckChoosenOption();
            block = false;
        }
        else if (barPosition > thirdSection) {
            UnclickMenuOption("contact");
            lastClicked = "contact";
            contact.style.color = "rgb(53, 176, 253)";
            CheckChoosenOption();
            block = false;
        }
    }

}

function goToAboutSection() {
    UnclickMenuOption("about");
    about.style.color = "rgb(53, 176, 253)";
    window.scrollTo({ top: homeHeight, behavior: 'smooth' });
    lastClicked = "about";
};

function windowSizeChanging() {
    homeHeight = headerInfo.offsetHeight;
}

function UnclickMenuOption(current) {
    if (current != lastClicked) {
        switch (lastClicked) {
            case "home":
                home.style.color = "rgb(255, 255, 255)";
                break;
            case "about":
                about.style.color = "rgb(255, 255, 255)";
                break;
            case "portfolio":
                portfolio.style.color = "rgb(255, 255, 255)";
                break;
            case "contact":
                contact.style.color = "rgb(255, 255, 255)";
                break;
        }
    }
}

function generateMeasurements() {
    CSharp.children[1].firstElementChild.style.width = "85%";
    CSharp.children[2].innerHTML = "85%";
    JS.children[1].firstElementChild.style.width = "70%";
    JS.children[2].innerHTML = "70%";
    CSSSkill.children[1].firstElementChild.style.width = "75%";
    CSSSkill.children[2].innerHTML = "75%";
    HTML.children[1].firstElementChild.style.width = "80%";
    HTML.children[2].innerHTML = "80%";
    SQL.children[1].firstElementChild.style.width = "55%";
    SQL.children[2].innerHTML = "55%";
    GitHub.children[1].firstElementChild.style.width = "50%";
    GitHub.children[2].innerHTML = "50%";
    VS.children[1].firstElementChild.style.width = "80%";
    VS.children[2].innerHTML = "80%";
    VSC.children[1].firstElementChild.style.width = "60%";
    VSC.children[2].innerHTML = "60%";
    //SubSkills
    MVC.children[1].firstElementChild.style.width = "90%";
    MVC.children[2].innerHTML = "90%";
    MVVM.children[1].firstElementChild.style.width = "85%";
    MVVM.children[2].innerHTML = "85%";
    DI.children[1].firstElementChild.style.width = "65%";
    DI.children[2].innerHTML = "65%";
    WPF.children[1].firstElementChild.style.width = "85%";
    WPF.children[2].innerHTML = "85%";
    Core.children[1].firstElementChild.style.width = "80%";
    Core.children[2].innerHTML = "80%";
    EF.children[1].firstElementChild.style.width = "75%";
    EF.children[2].innerHTML = "75%";
}

function HLSlideShow() {
    var hLSlide = document.getElementById("HlSlidePlaceFirst");
    var hLSlideSecond = document.getElementById("HlSlidePlaceSecond");
    if(hLIndex == 0 || hLIndex % 2 == 0)
    {
        hLSlideSecond.style.display = "none";
        hLSlide.style.display = "block";
        hLSlide.setAttribute('src', "./Images/projectsGraphics/HL/" + hLIndex + ".PNG");
    }
    else if(hLIndex % 2 != 0 && hLIndex < 21)
    {
        hLSlideSecond.style.display = "block";
        hLSlide.style.display = "none";
        hLSlideSecond.setAttribute('src', "./Images/projectsGraphics/HL/" +hLIndex+ ".PNG");
    }

    hLIndex ++;
    if(hLIndex > 21)
        hLIndex = 0;
}

function AWSlideShow() {
    var aWSlide = document.getElementById("AWSlidePlaceFirst");
    var aWSlideSecond = document.getElementById("AWSlidePlaceSecond");   

    if(aWIndex == 0 || aWIndex % 2 == 0)
    {
        aWSlideSecond.style.display = "none";
        aWSlide.style.display = "block";
        aWSlide.setAttribute('src', "./Images/projectsGraphics/AW/" + aWIndex + ".PNG");
    }
    else if(aWIndex % 2 != 0 && aWIndex < 21)
    {
        aWSlideSecond.style.display = "block";
        aWSlide.style.display = "none";
        aWSlideSecond.setAttribute('src', "./Images/projectsGraphics/AW/" + aWIndex + ".PNG");
    }

    aWIndex ++;
    if(aWIndex > 5)
        aWIndex = 0;
}

function DCGESlideShow(){
    var dCGESlide = document.getElementById("DCGESlidePlaceFirst");
    var dCGESlideSecond = document.getElementById("DCGESlidePlaceSecond");

    if(dCGEIndex == 0 || dCGEIndex % 2 == 0)
    {
        dCGESlideSecond.style.display = "none";
        dCGESlide.style.display = "block";
        dCGESlide.setAttribute('src', "./Images/projectsGraphics/DCGE/" + dCGEIndex + ".PNG");
    }
    else if(dCGEIndex % 2 != 0 && dCGEIndex < 21)
    {
        dCGESlideSecond.style.display = "block";
        dCGESlide.style.display = "none";
        dCGESlideSecond.setAttribute('src', "./Images/projectsGraphics/DCGE/" + dCGEIndex + ".PNG");
    }

    dCGEIndex++;
    if(dCGEIndex > 15)
        dCGEIndex = 0;
}

function DCGSDSlideShow(){
    var dCGSDSlide = document.getElementById("DCGSDSlidePlaceFirst");
    var dCGSDSlideSecond = document.getElementById("DCGSDSlidePlaceSecond");

    if(dCGSDIndex == 0 || dCGSDIndex % 2 == 0)
    {
        dCGSDSlideSecond.style.display = "none";
        dCGSDSlide.style.display = "block";
        dCGSDSlide.setAttribute('src', "./Images/projectsGraphics/DCGSD/" + dCGSDIndex + ".PNG");
    }
    else if(dCGSDIndex % 2 != 0 && dCGSDIndex < 21)
    {
        dCGSDSlideSecond.style.display = "block";
        dCGSDSlide.style.display = "none";
        dCGSDSlideSecond.setAttribute('src', "./Images/projectsGraphics/DCGSD/" + dCGSDIndex + ".PNG");
    }

    dCGSDIndex++;
    if(dCGSDIndex > 10)
        dCGSDIndex = 0;
}

function SnakeSlideShow(){
    var snakeSlide = document.getElementById("SnakeSlidePlaceFirst");
    var snakeSlideSecond = document.getElementById("SnakeSlidePlaceSecond");

    if(snakeIndex == 0 || snakeIndex % 2 == 0)
    {
        snakeSlideSecond.style.display = "none";
        snakeSlide.style.display = "block";
        snakeSlide.setAttribute('src', "./Images/projectsGraphics/Snake/" + snakeIndex + ".PNG");
    }
    else if(snakeIndex % 2 != 0 && snakeIndex < 21)
    {
        snakeSlideSecond.style.display = "block";
        snakeSlide.style.display = "none";
        snakeSlideSecond.setAttribute('src', "./Images/projectsGraphics/Snake/" + snakeIndex + ".PNG");
    }

    snakeIndex++;
    if(snakeIndex > 2)
        snakeIndex = 0;
}
