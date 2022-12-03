const triggers = document.querySelectorAll(".cool > li");
const backgorund = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function mouseEnter() {
  // console.log("enter")

  this.classList.add("trigger-enter");
  setTimeout(() => {
    if (this.classList.contains("trigger-enter")) {
      this.classList.add("trigger-enter-active");
    }
  }, 150);
  backgorund.classList.add("open");

  const dropDown = this.querySelector(".dropdown");
  // console.log(dropDown)
  const dropDownCords = dropDown.getBoundingClientRect();
  const navCords = nav.getBoundingClientRect();
  // console.log(dropDownCords);
  //getting cocordinated from the rect thing for the white box for background
  const cords = {
    height: dropDownCords.height,
    width: dropDownCords.width,
    top: dropDownCords.top - navCords.top,
    left: dropDownCords.left - navCords.left,
  };
  backgorund.style.setProperty("width", `${cords.width}px`);
  backgorund.style.setProperty("height", `${cords.height}px`);
  backgorund.style.setProperty(
    "transform",
    `translate(${cords.left}px,${cords.top}px)`
  );
}
function mouseLeave() {
  // console.log("leave")
  this.classList.remove("trigger-enter", "trigger-enter-active");
  backgorund.classList.remove("open");
}
triggers.forEach((element) =>
  element.addEventListener("mouseenter", mouseEnter)
);
triggers.forEach((element) =>
  element.addEventListener("mouseleave", mouseLeave)
);
