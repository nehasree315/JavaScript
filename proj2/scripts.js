const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).background )

const getBGColor = (selectedElement) => {
  return window.getComputedStyle(selectedElement).backgroundColor;
};

const magicColorChanger = (element, color) => {
  return element.addEventListener("mouseenter", () => {
    center.style.background = color;
  });
};

magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(violet, getBGColor(violet));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(pink, getBGColor(pink));

// down code can also be written but to understand it easier above code is preffered (17-27)

// var color = getBGColor(pink)
// pink.addEventListener("mouseenter", () =>{
//     center.style.background = color;
// });

// var color = getBGColor(violet)
// violet.addEventListener("mouseenter", () =>{
//     center.style.background = color;
// });
// var orangeElementColor = getBGColor(orange)
// orange.addEventListener("mouseenter", () => {
//     center.style.background = orangeElementColor
// })

// var redElementColor = getBGColor(red)
// red.addEventListener("mouseenter", () => {
//     center.style.background = redElementColor
// })

// var cyanElementColor = getBGColor(cyan)
// cyan.addEventListener("mouseenter", () => {
//     center.style.background = cyanElementColor
// })
