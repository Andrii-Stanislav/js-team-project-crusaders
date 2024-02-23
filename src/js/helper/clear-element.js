// Clear input field of selected element
export default function clearElement(element) {
  if (element.value) {
    element.value = '';
    return;
  }
}
