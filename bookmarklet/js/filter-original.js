/**
 * WCAG 2.0 parsing error bookmarklet
 * Author: Steve Faulkner
 * https://developer.paciellogroup.com/blog/2012/02/wcag-2-0-parsing-error-bookmarklet/
 *
 * Bookmarklet
 * javascript:(function(){var filterStrings=["tag seen","Stray end tag","Bad start tag","violates nesting rules","Duplicate ID","first occurrence of ID","Unclosed element","not allowed as child of element","unclosed elements","not allowed on element","unquoted attribute value","Duplicate attribute"];var filterRE=filterStrings.join("|");var root=document.getElementById("results");if(!root){return;} var results=root.getElementsByTagName("li");var result,resultText;for(var i=0;i<results.length;i++){result=results[i];if(results[i].className!==""){resultText=(result.innerText!==undefined?result.innerText:result.textContent)+"";if(resultText.match(filterRE)===null){result.style.display="none";result.className=result.className+" steveNoLike";}}}})();
 *
 * Original code
 * http://www.html5accessibility.com/tests/parsing.js
 */
javascript: (function () {
	var filterStrings = ["tag seen", "Stray end tag", "Bad start tag", "violates nesting rules", "Duplicate ID", "first occurrence of ID", "Unclosed element", "not allowed as child of element", "unclosed elements", "not allowed on element", "unquoted attribute value", "Duplicate attribute"];
	var filterRE = filterStrings.join("|");
	var root = document.getElementById("results");
	if (!root) {
		return;
	}
	var results = root.getElementsByTagName("li");
	var result, resultText;
	for (var i = 0; i < results.length; i++) {
		result = results[i];
		if (results[i].className !== "") {
			resultText = result.textContent + "";
			if (resultText.match(filterRE) == null) {
				result.style.display = "none";
				result.className = result.className + "steveNoLike";
			}
		}
	}
})()
