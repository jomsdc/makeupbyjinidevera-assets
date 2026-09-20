function handleHashFocus() {
  // Get the current ID from the URL hash (e.g., "#my-element" -> "my-element")
  const hash = window.location.hash;
  if (!hash) return;

  // Find the element that matches the hash
  const targetElement = document.querySelector(hash);

  if (targetElement) {

	if (targetElement.classList.contains('tab-label')) {
		targetElement.click();
	} else {
		//do nothing
	}
  }
}

// 1. Trigger when the hash changes (user clicks a link on the same page)
window.addEventListener('hashchange', handleHashFocus);

// 2. Trigger on page load (if the user lands on the page with a hash already in the URL)
window.addEventListener('DOMContentLoaded', () => {
  if (window.location.hash) {
    // Small timeout ensures the browser has finished its native scrolling/focusing
    setTimeout(handleHashFocus, 10);
  }
});
