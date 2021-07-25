// The controls should be either visible or persistent onhover 

setTimeout(() => {
    HiddenControls()
}, 400);

function HiddenControls() {
    var allTags = document.querySelectorAll("*")
    for (var k = 0; k < allTags.length; k++) {
        var element = allTags[k]
        var rect = $(element).position();
        var rectOnChange
        if (element.hidden == true || element.style.visibility == "hidden" || element.style.display == "none") {
            rectOnChange = $(element).focus().position();
            if (parseInt(rect.top) != parseInt(rectOnChange.top) || parseInt(rectOnChange.left) != parseInt(rectOnChange.left)) {
                console.log("-----------------------------------------")
                console.log("Rule: WCAG 3.2.7 (2.2,AA)")
                console.log("Error: Found the hidden Element on focus non-persistent.")
                console.log("Code Snippet: ", element.outerHTML)
                console.log("Fix: Make the hidden element on focus persistent - position should not be changed.")

                // console.log('Violation 3.2.7! Hidden Element on focus should be persistent')
            }
            rectOnChange = $(element).hover().position();
            if (parseInt(rect.top) != parseInt(rectOnChange.top) || parseInt(rect.left) != parseInt(rectOnChange.left)) {
                console.log("-----------------------------------------")
                console.log("Rule: WCAG 3.2.7 (2.2,AA)")
                console.log("Error: Found the hidden Element on hover non-persistent.")
                console.log("Code Snippet: ", element.outerHTML)
                console.log("Fix: Make the hidden element on focus hover - position should not be changed.")
                // console.log('Violation 3.2.7! Hidden Element on hover should be persistent')
            }
            rectOnChange = $(element).mouseover().position();
            if (parseInt(rect.top) != parseInt(rectOnChange.top) || parseInt(rect.left) != parseInt(rectOnChange.left)) {
                // console.log('Violation 3.2.7! Hidden Element on mouseover should be persistent')
                console.log("-----------------------------------------")
                console.log("Rule: WCAG 3.2.7 (2.2,AA)")
                console.log("Error: Found the hidden Element on mouseover non-persistent.")
                console.log("Code Snippet: ", element.outerHTML)
                console.log("Fix: Make the hidden element on mouseover persistent - position should not be changed.")
            }
            rectOnChange = $(element).mouseup().position();
            if (parseInt(rect.top) != parseInt(rectOnChange.top) || parseInt(rect.left) != parseInt(rectOnChange.left)) {
                // console.log('Violation 3.2.7! Hidden Element on mouseup should be persistent')
                console.log("-----------------------------------------")
                console.log("Rule: WCAG 3.2.7 (2.2,AA)")
                console.log("Error: Found the hidden Element on mouseup non-persistent.")
                console.log("Code Snippet: ", element.outerHTML)
                console.log("Fix: Make the hidden element on mouseup persistent - position should not be changed.")
            }
            rectOnChange = $(element).mousemove().position();
            if (parseInt(rect.top) != parseInt(rectOnChange.top) || parseInt(rect.left) != parseInt(rectOnChange.left)) {
                // console.log('Violation 3.2.7! Hidden Element on mousemove should be persistent')
                console.log("-----------------------------------------")
                console.log("Rule: WCAG 3.2.7 (2.2,AA)")
                console.log("Error: Found the hidden Element on mousemove non-persistent.")
                console.log("Code Snippet: ", element.outerHTML)
                console.log("Fix: Make the hidden element on mousemove persistent - position should not be changed.")
            }
            rectOnChange = $(element).mouseenter().position();
            if (parseInt(rect.top) != parseInt(rectOnChange.top) || parseInt(rect.left) != parseInt(rectOnChange.left)) {

                console.log("-----------------------------------------")
                console.log("Rule: WCAG 3.2.7 (2.2,AA)")
                console.log("Error: Found the hidden Element on mouseenter non-persistent.")
                console.log("Code Snippet: ", element.outerHTML)
                console.log("Fix: Make the hidden element on mouseenter persistent - position should not be changed.")
            }
        }
    }

}