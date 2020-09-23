/**
 * WCAG 2 Parsing Validation Filter bookmarklet
 * Reports the number of errors and warnings found affecting accessibility and describes errors according to WCAG 2 Success Criterion 4.1.1 Parsing.
 * Version 5
 *
 * Author: Jon Gibbins
 * Based on code by Steve Faulkner
 * https://developer.paciellogroup.com/blog/2012/02/wcag-2-0-parsing-error-bookmarklet/
 *
 * Bookmarklet
 * Compressed with Crunchinator:
 * http://ted.mielczarek.org/code/mozilla/bookmarklet.html
 * javascript:(function(){javascript:(function(){var filters=["tag seen","Stray end tag","Bad start tag","violates nesting rules","Duplicate ID","Unclosed element","not allowed as child of element","unclosed elements","unquoted attribute value","Duplicate attribute","descendant of an element with the attribute"].join("|"),groups={"Duplicate ID":true},e,g,i,m,nT=0,nP1=0,r,rt,res=document.getElementById("results"),rP1={};if(!res){return;}res=res.getElementsByTagName("li");for(i=res.length-1;i>=0;i--){r=res[i];if(r.id.substr(0,3)==="vnu"){if(r.className!=="info"){nT=nT+1;}rt=""+r.textContent;rt=rt.substring(0,rt.indexOf('.'));m=rt.match(filters);if(m==null){r.style.display="none";r.className=r.className+"a11y-ignore";}else{e=rt.substr(7);g=m[0];if(groups.hasOwnProperty(g)){rP1[g]=rP1[g]||{};e=e.substr(g.length+1);rP1[g][e]=true;}else{rP1[e]=true;}nP1=nP1+1;}}}rt="";for(i in rP1){if(rP1.hasOwnProperty(i)){e=rP1[i];if(e===true){rt=rt+"- "+i+"\n";}else{rt=rt+"- "+i+"\n";for(m in e){if(e.hasOwnProperty(m)){rt=rt+"  + "+m+"\n";}}}}}alert(nT+" validation errors and warnings.\n"+nP1+" instances of errors known to create accessibility issues:\n"+rt);})();})();
 */
javascript: (function () {
	var filters = [
				"tag seen",
				"Stray end tag",
				"Bad start tag",
				"violates nesting rules",
				"Duplicate ID",
				// "first occurrence of ID", // Warning related to "Duplicate ID"
				"Unclosed element",
				"not allowed as child of element",
				"unclosed elements",
				// "not allowed on element", // "Attribute X not allowed on element"
				"unquoted attribute value",
				"Duplicate attribute",
				"descendant of an element with the attribute"
			].join("|"),
	  groups = {"Duplicate ID": true},
		e, // Error
		g, // Group
		i, // Iterator
		m, // Match
		nT = 0, // Total validation errors and warnings
		nP1 = 0, // Errors affecting accessibility at P1
		// nP2 = 0, // Errors affecting accessibility at P2
		r, // Result
		rt, // Result text / Report
		res = document.getElementById("results"),
		rP1 = {}; // Priority 1 results
		// rP2 = {}, // Priority 2 results
		// resultsWarnings = {},

	if (!res) {
		return;
	}

	res = res.getElementsByTagName("li");

	for (i = res.length - 1; i >= 0; i--) {
		r = res[i];

		// Filter to only match first-level list items
		if (r.id.substr(0, 3) === "vnu") {
			if (r.className !== "info") {
				nT = nT + 1;
			}

			rt = "" + r.textContent; // Result to string
			rt = rt.substring(0, rt.indexOf('.')); // Trim

			m = rt.match(filters);

			if (m == null) {
				r.style.display = "none";
				r.className = r.className + "a11y-ignore";
			}
			// else if (rt.match("not allowed on element") != null) {
			// 	// Separate "Attribute X not allowed on element" errors from others
			// 	rP2[rt.substr(7)] = true;
			// 	nP2 = nP2 + 1;
			// }
			else {
				e = rt.substr(7);
				g = m[0];

				if (groups.hasOwnProperty(g)) {
					// Handle grouped errors
					rP1[g] = rP1[g] || {};
					e = e.substr(g.length + 1);
					rP1[g][e] = true;
				}
				else {
					// All other errors
					rP1[e] = true;
				}
				nP1 = nP1 + 1;
			}

			//if (rt.substring(0, 8) == 'Warning:') {
			//	resultsWarnings[rt.substr(9)] = true;
			//}
		}
	}

	rt = "";

	// Add warnings to report
	//for (i in resultsWarnings) {
	//	if (resultsWarnings.hasOwnProperty(i)) {
	//		rt = i + "; " + rt;
	//	}
	//}
	//rt = "\nWarnings:\n" + rt;

	// Add P2 errors to report
	// for (i in rP2) {
	// 	if (rP2.hasOwnProperty(i)) {
	// 		rt = i + "; " + rt;
	// 	}
	// }
	// rt = "\n" + nP2 + " low priority errors:\n" + rt + "\n";

	// Add P1 errors to report
	for (i in rP1) {
		if (rP1.hasOwnProperty(i)) {
			e = rP1[i];
			if (e === true) {
				rt = rt + "- " + i + "\n";
			}
			else {
				// Handle grouped errors
				rt = rt + "- " + i + "\n";
				for (m in e) {
					if (e.hasOwnProperty(m)) {
						rt = rt + "  + " + m + "\n";
					}
				}
			}
		}
	}
	// rt = "\n" + nP1 + " high priority errors:\n" + rt + "\n";

	// Output report
	// alert(nT + " validation errors and warnings.\nErrors that may impact accessibility:" + rt);
	alert(nT + " validation errors and warnings.\n" + nP1 + " instances of errors known to create accessibility issues:\n" + rt);
})();
