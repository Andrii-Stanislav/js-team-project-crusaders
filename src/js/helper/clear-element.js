// Clear input field of selected element
export default function clearElement(element) {
  if (element.value) {
    element.value = '';
    return;
  }
  // Show error if function didn't receive input element
  console.error('function clearElement:', 'Only works with input elements');
}
