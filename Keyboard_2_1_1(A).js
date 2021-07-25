// Requirement
// All onmouseout event handlers have an associated onblur event handler.
// Error
// script not keyboard accessible - onmouseout missing onblur.
// Short Description
// Any element that contains an onmouseout attribute must also contain an onblur attribute.
// How To Repair
// Add an onblur handler to your script that performs the same function as the onmouseout handler.
// Requirement
// All onmouseover event handlers have an associated onfocus event handler.
// Error
// onmouseover event handler missing onfocus event handler.
// Short Description
// Any element that contains an onmouseover attribute must also contain an onfocus attribute.
// How To Repair
// Add an onfocus handler to your script that performs the same function as the onmouseover handler.
setTimeout(() => {
    Keyboard()
}, 400);

function Keyboard() {
    var allTags = document.querySelectorAll('*')
    for (var d = 0; d < allTags.length; d++) {
        if (allTags[d].nodeName != "HTML" &&
            allTags[d].nodeName != "BODY" &&
            allTags[d].nodeName != "LINK" &&
            allTags[d].nodeName != "SCRIPT" &&
            allTags[d].nodeName != "STYLE" &&
            allTags[d].nodeName != "XML" &&
            allTags[d].nodeName != "HEAD" &&
            allTags[d].nodeName != "META") {
            // console.log(allTags[d].onmouseout,allTags[d].onblur)
            if (allTags[d].onmouseout != null && allTags[d].onmouseout != undefined && allTags[d].onmouseout != "") {
                if (allTags[d].onblur == null || allTags[d].onblur == undefined) {
                    console.log("-----------------------------------------")
                    console.log("Rule: WCAG 2.1.1 (2.0,A)")
                    console.log("Error: script not keyboard accessible - onmouseout missing onblur")
                    console.log("Code Snippet: ", allTags[d].outerHTML)
                    console.log("Fix: Add an onblur handler to your script that performs the same function as the onmouseout handler)")
                } else if (allTags[d].onblur == "") {
                    console.log("-----------------------------------------")
                    console.log("Rule: WCAG 2.1.1 (2.0,A)")
                    console.log("Error: script not keyboard accessible - onmouseout with empty onblur function")
                    console.log("Code Snippet: ", allTags[d].outerHTML)
                    console.log("Fix: Add a function to your onblur handler to your script that performs the same function as the onmouseout handler)")

                }
            }
            if (allTags[d].onmouseover != null && allTags[d].onmouseover != undefined && allTags[d].onmouseover != "") {
                if (allTags[d].onfocus == null || allTags[d].onfocus == undefined) {
                    console.log("-----------------------------------------")
                    console.log("Rule: WCAG 2.1.1 (2.0,A)")
                    console.log("Error: onmouseover event handler missing onfocus event handler.")
                    console.log("Code Snippet: ", allTags[d].outerHTML)
                    console.log("Fix: Add an onfocus handler to your script that performs the same function as the onmouseover handler.)")
                } else if (allTags[d].onfocus == "") {
                    console.log("-----------------------------------------")
                    console.log("Rule: WCAG 2.1.1 (2.0,A)")
                    console.log("Error: onmouseover event handler with empty onfocus handler function.")
                    console.log("Code Snippet: ", allTags[d].outerHTML)
                    console.log("Fix: Add a function to your onfocus handler to your script that performs the same function as the onmouseover handler)")
                }
            }
        }

    }

}
