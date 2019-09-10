
export default function outSideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach(userEvent => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
    // console.log(event.target);
    // console.log(element.contains(event.target));
    // console.log(element)
  }

  if (!element.hasAttribute(outside)) {
    events.forEach(userEvent => {
     setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
    });
    element.setAttribute(outside, '');
  }
}