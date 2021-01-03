const sheetId = "me-sheet";
/**
 * selects an element by the id and applies a global blur effect using CSS
 * @param {string} id the id of the elment to blur
 * @param {number} amount the amount the elment should be blured
 */
function blurById(id, amount) {
  document.addEventListener("DOMContentLoaded", () => {
    const e = document.getElementById(id);
    if (!e) return console.warn(`no element found with the id of (${id})`);

    console.log(`add class to ${e.id}`);
    e.classList.add("blurry");
  });
}
/**
 * select elements by HTML tag and applies a blur effect using CSS
 * @param {string} tag
 * @param {number} amount
 */
function blurByType(tag, amount) {
  const e = document.querySelectorAll(tag);
  e.forEach((element) => {
    console.log(`we will blur ${element.id} by a factor of ${amount}`);
  });
}
/**
 * Adds a simple blur rule to the passed in element.
 * @param {HTMLElement} element the element in which to apply a blur effect to.
 * @param {number} value The amount in which to blur the element;
 */
function simpleBlur(element, value) {
  if (!element) return console.warn("no element found to blur");

  element.style.filter = `blur(${value}px)`;
}

export { blurById, blurByType, simpleBlur };

(() => {
  let element = document.createElement("style"),
    sheet;

  element.id = sheetId;
  // Append style element to head
  document.head.appendChild(element);
  // Return Reference to the stylesheet
  sheet = element.sheet;

  // Add the first CSS rule to the stylesheet
  sheet.insertRule(
    `:root {
  --me-blur:1px; 
  } 
  `,
    0
  );
  sheet.insertRule(
    `
.blurry { 
  animation: blur 0.5s linear forwards; 
  animation-delay: 1s;
}
  `,
    1
  );
  sheet.insertRule(
    `
  @keyframes blur {
  to {
    filter: blur(var(--me-blur));
  }
}
  `,
    2
  );
})();
