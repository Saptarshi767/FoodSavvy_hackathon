let menuToggle = document.querySelector("#toggle");
let flag = 1;
menuToggle.addEventListener("click", () => {
    if (flag === 1) {
        gsap.from('#menu-left h3', {
            y : -40,
            stagger: 0.3
        })
        gsap.from('#menu-right h3', {
            y : -40,
            stagger: 0.3
        })
        gsap.fromTo('#menu-full-srn h1', 
        {
            y : -90,
            opacity:0
        },
        {
            y:0,
            opacity: 1,
            ease: "elastic",
            duration: 4

        })
        document.querySelector(".cart-menu").style.transform = "translateY(-100%)";
        document.querySelector("#nav").style.color = "#2b2424";
        menuToggle.classList.add("active");
        document.querySelector("#menu-full-srn").style.transform = "translateY(0%)";
        document.querySelectorAll("#toggle span").forEach((ele) => {
            ele.style.backgroundColor = "#2b2424";
        });
        flagCart = 1; flag = 0;
    } else {
        document.querySelector("#nav").style.color = "#dadada";
        menuToggle.classList.remove("active");
        document.querySelector("#menu-full-srn").style.transform = "translateY(-100%)";
        document.querySelectorAll("#toggle span").forEach((ele) => {
            ele.style.backgroundColor = "#dadada";
        });
        flag = 1;
    }
});
let cartToggle = document.querySelector("#nav-part2 h3");
let flagCart = 1;
cartToggle.addEventListener("click", () => {
    if (flagCart === 1) {
        document.querySelectorAll("#toggle span").forEach((ele) => {
            ele.style.backgroundColor = "#dadada";
        });
        document.querySelector("#menu-full-srn").style.transform = "translateY(-100%)";
        menuToggle.classList.remove("active");
        document.querySelector("#nav").style.color = "#dadada";
        document.querySelector(".cart-menu").style.transform = "translateY(0%)";
        flagCart = 0; flag = 1;
    } else {
        document.querySelector("#nav").style.color = "#dadada";
        document.querySelector(".cart-menu").style.transform = "translateY(-100%)";
        flagCart = 1;
    }
});
let t1 = gsap.timeline();
t1.from("#page1 h1", {
    opacity: 0,
    y: 25,
    duration: 0.6,
})
    .from("#page1 span", {
        opacity: 0,
        y: 17,
        duration: 0.8,
        delay: -0.5,
    })
    .from("#page1 h2", {
        opacity: 0,
        y: 18,
        duration: 0.8,
        delay: -0.5,
    });

gsap.to("#page2 img", {
    scale: 1.15,
    duration: 0.3,
    scrollTrigger: {
        trigger: "page2 img",
        scroller: "body",
        // markers: true,
        scrub: 3,
    },
});
gsap.from("#page2 h3", {
    rotateX: 180,
    opacity: 0,
    duration: 0.2,
    scrollTrigger: {
        trigger: "#page2 h3",
        scroller: "body",
        // markers: true,
        scrub: 2,
        start: "top 55%",
        end: "top 70%",
    },
});

let cursor = document.querySelector('#page5 #cursor')
document.querySelector("#page5").addEventListener('mousemove',(dets)=>{
    cursor.style.opacity=1;
    cursor.style.top = `${dets.y-25}px`
    cursor.style.left= `${dets.x-20}px`
})
document.querySelector("#page5").addEventListener('mouseleave',(dets)=>{
    cursor.style.opacity=0;
})
document.querySelector('#page5-ele1').addEventListener('mouseenter',()=>{
    cursor.style.scale = 6
})
document.querySelector('#page5-ele1').addEventListener('mouseleave',()=>{
    cursor.style.scale = 1
})
document.querySelector('#page5-ele2').addEventListener('mouseenter',()=>{
    cursor.style.scale = 6
})
document.querySelector('#page5-ele2').addEventListener('mouseleave',()=>{
    cursor.style.scale = 1
})

TweenMax.to("#smiley img", {
    rotation: "360",
    duration: 1,
    ease: "none",
    repeat: -1,
});
let slide1h1 = document.querySelectorAll("#page6 .slide-h1 h1");
slide1h1.forEach(function (ele) {
    gsap.to(ele, {
        transform: "translateX(0%)",
        duration: 10,
        scrollTrigger: {
            trigger: "#page6",
            scroller: "body",
            scrub: 2,
            // markers: true,
            start: "top 40%",
            end: "bottom 70%"
        },
    });
});
let slide2h1 = document.querySelectorAll("#page6 .slide-h2 h1");
slide2h1.forEach(function (ele) {
    gsap.to(ele, {
        transform: "translateX(-30%)",
        duration: 5,
        scrollTrigger: {
            trigger: "#page6",
            scroller: "body",
            scrub: 2,
            // markers: true,
            start: "top 40%",
            end: "bottom 70%"
        },
    });
});
gsap.from(".pg4-prim", {
    opacity: 0,
    x: -100,
    stagger: 1,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
       // markers: true,
        start: "top 80%",
        end: "center 90%",
        scrub: 3,
    },
});
let yesImg = document.querySelector("#pg7-yes img");
const noImg = document.querySelector("#pg7-no img");
document.querySelector("#pg7-yes").addEventListener("mousemove", (dets) => {
    yesImg.style.opacity = 1;
    yesImg.style.cursor = "pointer";
    yesImg.style.left = `${dets.x}px`;
    yesImg.style.top = `${dets.y - 300}px`;
});
document.querySelector("#pg7-no").addEventListener("mousemove", (dets) => {
    noImg.style.opacity = 1;
    noImg.style.left = `${dets.x}px`;
    noImg.style.top = `${dets.y - 300}px`;
});
document.querySelector("#pg7-no").addEventListener("mouseenter", (dets) => {
    document.querySelector("#pg7-no").style.cursor = "pointer";
});
document.querySelector("#pg7-yes").addEventListener("mouseleave", (dets) => {
    yesImg.style.opacity = 0;
});
document.querySelector("#pg7-yes").addEventListener("mouseenter", (dets) => {
    document.querySelector("#pg7-yes").style.cursor = "pointer";
});
document.querySelector("#pg7-no").addEventListener("mouseleave", (dets) => {
    noImg.style.opacity = 0;
});

let img1 = document.querySelector("#pg8-imgBox img:nth-child(1)");
let img2 = document.querySelector("#pg8-imgBox img:nth-child(2)");
let img3 = document.querySelector("#pg8-imgBox img:nth-child(3)");
let img4 = document.querySelector("#pg8-imgBox img:nth-child(4)");
let img5 = document.querySelector("#pg8-imgBox img:nth-child(5)");

img1.addEventListener("mousemove", () => {
    img1.style.cursor = "pointer";
    img1.style.transform = "rotate(15deg)";
});
img1.addEventListener("mouseleave", () => {
    img1.style.transform = "rotate(0deg)";
});
img2.addEventListener("mousemove", () => {
    img2.style.cursor = "pointer";
    img2.style.transform = "rotate(15deg)";
});
img2.addEventListener("mouseleave", () => {
    img2.style.transform = "rotate(0deg)";
});
img3.addEventListener("mousemove", () => {
    img3.style.cursor = "pointer";
    img3.style.transform = "rotate(15deg)";
});
img3.addEventListener("mouseleave", () => {
    img3.style.transform = "rotate(0deg)";
});
img4.addEventListener("mousemove", () => {
    img4.style.cursor = "pointer";
    img4.style.transform = "rotate(15deg)";
});
img4.addEventListener("mouseleave", () => {
    img4.style.transform = "rotate(0deg)";
});
img5.addEventListener("mousemove", () => {
    img5.style.cursor = "pointer";
    img5.style.transform = "rotate(15deg)";
});
img5.addEventListener("mouseleave", () => {
    img5.style.transform = "rotate(0deg)";
});
gsap.to("#line", {
    width: "88%",
    duration: 3,
    scrollTrigger: {
        scroller: "body",
        trigger: "#page3",
        scrub: 3,
        // markers: true,
        start: "top 50%",
        end: "bottom 60%",
    },
});

let mangocard = document.querySelector(".mangocard");
document
    .querySelector("#mango h1")
    .addEventListener("mouseenter", function (dets) {
        document.querySelector("#mango h1").style.color = "#222";
        document.querySelector("#mango h1").style.webkitTextStroke = "1px #dadada";
        document.querySelector("#mango").style.cursor = "pointer";
        mangocard.style.opacity = 1;
        mangocard.style.transform = `translate(-50%,-20%) rotate(20deg)`;
        mangocard.style.left = `40%`;
    });
document.querySelector("#mango").addEventListener("mousemove", function (dets) {
    mangocard.style.left = `${dets.x}px`;
});
document
    .querySelector("#mango")
    .addEventListener("mouseleave", function (dets) {
        document.querySelector("#mango h1").style.color = "#dadada";
        document.querySelector("#mango h1").style.webkitTextStroke = "none";
        mangocard.style.opacity = 0;
        mangocard.style.transform = `translate(-50%,-50%) rotate(0deg)`;
        mangocard.style.left = `20%`;
    });
let bananacard = document.querySelector(".bananacard");
document
    .querySelector("#Banana h1")
    .addEventListener("mouseenter", function (dets) {
        document.querySelector("#Banana h1").style.color = "#222";
        document.querySelector("#Banana h1").style.webkitTextStroke = "1px #dadada";
        document.querySelector("#Banana").style.cursor = "pointer";
        bananacard.style.opacity = 1;
        bananacard.style.transform = `translate(-50%,-20%) rotate(20deg)`;
        bananacard.style.left = `40%`;
    });
document
    .querySelector("#Banana")
    .addEventListener("mousemove", function (dets) {
        bananacard.style.left = `${dets.x}px`;
    });
document
    .querySelector("#Banana")
    .addEventListener("mouseleave", function (dets) {
        bananacard.style.opacity = 0;
        document.querySelector("#Banana h1").style.color = "#dadada";
        document.querySelector("#Banana h1").style.webkitTextStroke = "none";
        bananacard.style.transform = `translate(-50%,-50%) rotate(0deg)`;
        bananacard.style.left = `20%`;
    });

let pinecard = document.querySelector(".pinecard");
document.querySelector("#PineApple").addEventListener("mouseenter", (dets) => {
    document.querySelector("#PineApple h1").style.color = "#222";
    document.querySelector("#PineApple h1").style.webkitTextStroke =
        "1px #dadada";
    document.querySelector("#PineApple").style.cursor = "pointer";
    pinecard.style.opacity = 1;
    pinecard.style.transform = "translate(-50%,-70%) rotate(20deg)";
    pinecard.style.left = `40%`;
});
document.querySelector("#PineApple").addEventListener("mousemove", (dets) => {
    pinecard.style.left = `${dets.x}px`;
});
document.querySelector("#PineApple").addEventListener("mouseleave", (dets) => {
    pinecard.style.opacity = 0;
    document.querySelector("#PineApple h1").style.color = "#dadada";
    document.querySelector("#PineApple h1").style.webkitTextStroke = "none";
    pinecard.style.transform = "translate(-50%,-70%) rotate(0deg)";
    pinecard.style.left = `20%`;
});

let pithcard = document.querySelector(".pithayacard");
document.querySelector("#Pithaya").addEventListener("mouseenter", (dets) => {
    document.querySelector("#Pithaya h1").style.color = "#222";
    document.querySelector("#Pithaya h1").style.webkitTextStroke = "1px #dadada";
    document.querySelector("#Pithaya").style.cursor = "pointer";
    pithcard.style.opacity = 1;
    pithcard.style.transform = "translate(-50%,-70%) rotate(20deg)";
    pithcard.style.left = `40%`;
});
document.querySelector("#Pithaya").addEventListener("mousemove", (dets) => {
    pithcard.style.left = `${dets.x}px`;
});
document.querySelector("#Pithaya").addEventListener("mouseleave", (dets) => {
    pithcard.style.opacity = 0;
    document.querySelector("#Pithaya h1").style.color = "#dadada";
    document.querySelector("#Pithaya h1").style.webkitTextStroke = "none";
    pithcard.style.transform = "translate(-50%,-50%) rotate(0deg)";
    pithcard.style.left = `20%`;
});
document.querySelector("#Variety").addEventListener("mouseenter", (dets) => {
    document.querySelector("#Variety h1").style.color = "#222";
    document.querySelector("#Variety").style.cursor = "pointer";
    document.querySelector("#Variety h1").style.webkitTextStroke = "1px #dadada";
});
document.querySelector("#Variety").addEventListener("mouseleave", (dets) => {
    document.querySelector("#Variety h1").style.color = "#dadada";
    document.querySelector("#Variety h1").style.webkitTextStroke = "none";
});

function myFunction(x) {
    if (x.matches) {
    } else {
    }
}

document.addEventListener("scroll", function () {
    const element = document.querySelector(".scroll-slide-right");
    const position = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight - 100) {
        element.classList.add("active");
    } else {
        element.classList.remove("active");
    }
});

// let x = window.matchMedia("(max-width: 420px)");
// myFunction(x);
// x.addEventListener("change", function () {
//     myFunction(x);
// });
