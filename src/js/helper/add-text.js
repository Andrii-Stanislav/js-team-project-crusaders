// Add text to element and show divider in breadcrumbs
export default function addText(element, text, divider) {
  element.innerText = text;
  if (!divider) {
    return;
  }
  divider.style.visibility = 'visible';
}
