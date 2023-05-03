// Check if a counter is already set for the session
if (sessionStorage.getItem('visitCount')) {
  var count = parseInt(sessionStorage.getItem('visitCount'));
  count += 1;
  sessionStorage.setItem('visitCount', count.toString());
} else {
  // If a counter is not set, set it to 1
  sessionStorage.setItem('visitCount', '1');
}

// Display the counter on the page
var visitCountSpan = document.getElementById('visit-count');
visitCountSpan.textContent = sessionStorage.getItem('visitCount');
