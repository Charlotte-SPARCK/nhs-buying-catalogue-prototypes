// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("view-results").onclick = function() {checkboxLink()};

/* myFunction */
function checkboxLink() {
  var digitalDiagnostics = document.getElementById("digital-diagnostics-1");
  var digitalDiagnostics2 = document.getElementById("digital-diagnostics-2");
  var productivityTheme = document.getElementById("professional-to-professional-1");
  var noResults = document.getElementById("shared-care-plan");

  if (digitalDiagnostics.checked == true) {
    document.getElementById("view-results").setAttribute("href", "/buyer-browse-v2/capability-select/capability-search-results");
  }
  else if (digitalDiagnostics2.checked == true) {
    document.getElementById("view-results").setAttribute("href", "/buyer-browse-v2/capability-select/capability-search-results");
  }
  else if (productivityTheme.checked == true) {
    document.getElementById("view-results").setAttribute("href", "/buyer-browse-v2/productivity/productivity-search-results");
  }
  else if (noResults.checked == true) {
    document.getElementById("view-results").setAttribute("href", "no-results");
  }
  else {
    document.getElementById("view-results").setAttribute("href", "search-results");
  }
}
