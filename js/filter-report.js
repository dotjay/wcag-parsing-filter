/**
 * WCAG 2.0 parsing error bookmarklet
 * Author: Jon Gibbins
 * Based on code by Steve Faulkner
 * https://developer.paciellogroup.com/blog/2012/02/wcag-2-0-parsing-error-bookmarklet/
 * Version 1
 * Reports total number of errors and the number related to accessibility. Faster code.
 *
 * Bookmarklet
 * javascript:(function(){var filterStrings=["tag seen","Stray end tag","Bad start tag","violates nesting rules","Duplicate ID","first occurrence of ID","Unclosed element","not allowed as child of element","unclosed elements","not allowed on element","unquoted attribute value","Duplicate attribute"],filterRE=filterStrings.join("|"),i,nAcc=0,nErr=0,result,resultText,results,root=document.getElementById("results");if(!root){return;}results=root.getElementsByTagName("li");for(i=results.length-1;i>=0;i--){result=results[i];if(result.id.substr(0,3)==="vnu"){if(result.className!=="info"){nErr=nErr+1;}resultText=result.textContent+"";if(resultText.match(filterRE)==null){result.style.display="none";result.className=result.className+"steveNoLike";}else{nAcc=nAcc+1;}}}alert(nErr+" errors and warnings, "+nAcc+" related to accessibility");})();
 */
javascript: (function() {
	var filterStrings = ["tag seen", "Stray end tag", "Bad start tag", "violates nesting rules", "Duplicate ID", "first occurrence of ID", "Unclosed element", "not allowed as child of element", "unclosed elements", "not allowed on element", "unquoted attribute value", "Duplicate attribute"],
		filterRE = filterStrings.join("|"),
		i,
		nAcc = 0,
		nErr = 0,
		result,
		resultText,
		results,
		root = document.getElementById("results");
	if (!root) {
		return;
	}
	results = root.getElementsByTagName("li");
	for (i = results.length - 1; i >= 0; i--) {
		result = results[i];
		if (result.id.substr(0, 3) === "vnu") {
			if (result.className !== "info") {
				nErr = nErr + 1;
			}
			resultText = result.textContent + "";
			if (resultText.match(filterRE) == null) {
				result.style.display = "none";
				result.className = result.className + "steveNoLike";
			} else {
				nAcc = nAcc + 1;
			}
		}
	}
	alert(nErr + " errors and warnings, " + nAcc + " related to accessibility");
})();
