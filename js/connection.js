let textLength = 0;
let text = "(In process of being) Full Stack Developer and Systems Engineering student";
let animationApplied = false; // Flag to track if animation is already applied

function type() {
  let textChar = text.charAt(textLength++);
  let paragraph = document.getElementById("typed");
  let charElement = document.createTextNode(textChar);
  paragraph.appendChild(charElement);
  if (textLength < text.length + 1) {
    setTimeout('type()', 50);
  } else {
    text = 'Python and Web Developer - Systems Engineering Student';
  }
}

document.addEventListener("DOMContentLoaded", function () {
  type()
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, { threshold: 0.2 });

const elements = document.querySelectorAll('.hidden');
elements.forEach((el) => observer.observe(el));

const elements_for_img = document.querySelectorAll('.hidden_img');
elements_for_img.forEach((el) => observer.observe(el));
