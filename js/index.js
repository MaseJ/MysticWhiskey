// Dom elements
const titles = document.querySelectorAll(".title");
const mainText = document.querySelector("#main--title--text");
const startText = "Hidden Perfection";


// Text for main screen
const titleTexts = [
    "of the nature of or pertaining to mysteries known only to the initiated",
    "of occult character, power, or significance",
    "of obscure or mysterious character or significance",
    "beyond ordinary understanding",
    "filling one with wonder or awe",
    "inducing a feeling of awe or wonder"
]


// Add event listeners
titles.forEach(title => {
    title.addEventListener("mouseenter", showText);
    title.addEventListener("mouseleave", showBegText)
})

// Functions to control different text on hover
function showText(){
    const currentId = this.id;
    $(mainText).fadeOut(500, function() {
        mainText.innerHTML = "&bull; " + titleTexts[currentId] + " &bull;";
        $(mainText).fadeIn();
    });
}

function showBegText(){
    $(mainText).fadeOut(500, function() {
        mainText.innerHTML = "&bull; " + startText + " &bull;";
        $(mainText).fadeIn();
    });
}

//
// GSAP Animations
//

// Horizontal scroll
gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".scroll .panel");

// Used to measure end
// and revert back to vertical scroll
let container = document.querySelector('#container');

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  duration: 6,
  scrollTrigger: {
    trigger: ".scroll",
    pin: true,
    scrub: 1,
    end: `+=${container.offsetWidth}`
  }
});

gsap.to("#whiskey", {
    rotate: 90,
    x: `+=${container.offsetWidth}`,
    duration: 1,
    ease: "none",
    scrollTrigger: {
      containerAnimation: scrollTween,
      trigger: "#about",
      start: "left right",
      scrub: 1,
      pin: true,
      toggleClass: "active",
      end: `+=${container.offsetWidth}`
    }
  })
  


  



