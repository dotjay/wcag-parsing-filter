/**
 * WCAG 2.0 parsing error bookmarklet
 * Author: Jon Gibbins
 * Based on code by Steve Faulkner
 * https://developer.paciellogroup.com/blog/2012/02/wcag-2-0-parsing-error-bookmarklet/
 * Version 2
 * Reports the number of errors and warnings found affecting accessibility and describes each.
 *
 * Bookmarklet
 * Compressed with Crunchinator:
 * http://ted.mielczarek.org/code/mozilla/bookmarklet.html
 * javascript:(function(){var filterStrings=["tag seen","Stray end tag","Bad start tag","violates nesting rules","Duplicate ID","first occurrence of ID","Unclosed element","not allowed as child of element","unclosed elements","not allowed on element","unquoted attribute value","Duplicate attribute"],filterRE=filterStrings.join("|"),i,nAcc=0,nErr=0,result,resultText,results,resultsErrors={},resultsWarnings={},root=document.getElementById("results");if(!root){return;}results=root.getElementsByTagName("li");for(i=results.length-1;i>=0;i--){result=results[i];if(result.id.substr(0,3)==="vnu"){if(result.className!=="info"){nErr=nErr+1;}resultText=""+result.textContent;resultText=resultText.substring(0,resultText.indexOf('.'));if(resultText.match(filterRE)==null){result.style.display="none";result.className=result.className+"steveNoLike";}else{nAcc=nAcc+1;if(resultText.substring(0,6)=='Error:'){resultsErrors[resultText.substr(7)]=true;}}if(resultText.substring(0,8)=='Warning:'){resultsWarnings[resultText.substr(9)]=true;}}}resultText="";for(i in resultsWarnings){if(resultsWarnings.hasOwnProperty(i)){resultText=i+"; "+resultText;}}resultText="\n\nWarnings: \n"+resultText;for(i in resultsErrors){if(resultsErrors.hasOwnProperty(i)){resultText=i+"; "+resultText;}}resultText=nErr+" errors and warnings.\n\n"+nAcc+" errors found that impact accessibility: "+resultText;alert(resultText);})();
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
		resultsErrors = {},
		resultsWarnings = {},
		root = document.getElementById("results");
	if (!root) {
		return;
	}
	results = root.getElementsByTagName("li");
	for (i = results.length - 1; i >= 0; i--) {
		result = results[i];

		// Filter to only match first-level list items
		if (result.id.substr(0, 3) === "vnu") {
			if (result.className !== "info") {
				nErr = nErr + 1;
			}

			resultText = "" + result.textContent; // Result to string
			resultText = resultText.substring(0, resultText.indexOf('.')); // Trim

			if (resultText.match(filterRE) == null) {
				result.style.display = "none";
				result.className = result.className + "steveNoLike";
			} else {
				nAcc = nAcc + 1;

				if (resultText.substring(0, 6) == 'Error:') {
					resultsErrors[resultText.substr(7)] = true;
				}
			}
			if (resultText.substring(0, 8) == 'Warning:') {
				resultsWarnings[resultText.substr(9)] = true;
			}
		}
	}
	resultText = "";
	for (i in resultsWarnings) {
		if (resultsWarnings.hasOwnProperty(i)) {
			resultText = i + "; " + resultText;
		}
	}
	resultText = "\n\nWarnings: \n" + resultText;
	for (i in resultsErrors) {
		if (resultsErrors.hasOwnProperty(i)) {
			resultText = i + "; " + resultText;
		}
	}
	resultText = nErr + " errors and warnings.\n\n" + nAcc + " errors found that impact accessibility: " + resultText;
	alert(resultText);
})();
