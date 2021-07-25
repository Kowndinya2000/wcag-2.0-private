// Requirement
// All input elements, type of "text", have a label containing text.
// Error
// input element, type of "text", has no text in label.
// Short Description
// input element that contains a type attribute value of "text" must have text in its associated label.
// How To Repair
// Add text to the input element's associated label that describes the purpose or function of the control.

setTimeout(() => {
    InfoAndRelationships()
}, 400);

function InfoAndRelationships() {

    var inputTags = document.querySelectorAll('input')
    for (var d = 0; d < inputTags.length; d++) {
        var testCasePass = false
        if (inputTags[d].type == "text") {
            var labelTags = document.querySelectorAll("label")
            for (var x = 0; x < labelTags.length; x++) {
                if (labelTags[x].htmlFor == inputTags[d].id) {
                    if (labelTags[x].innerText != null && labelTags[x].innerText != "") {
                        testCasePass = true
                        break
                    }
                }
            }
            if (testCasePass == false) {
                //console.log("[Known Problem] Violation 1.3.1! input element, type of 'text', has no text in label")   

                console.log("-----------------------------------------")
                console.log("Rule: WCAG 1.3.1 (2.0,A)")
                console.log("Error: input element, type of 'text', has no text in label")
                console.log("Code Snippet: ", inputTags[d].outerHTML)
                console.log("Fix: Add text to the input element's associated label that describes the purpose or function of the control.")
            }

            if (inputTags[d].title == null || inputTags[d].title == "") {
                // console.log("[Known Problem] Violation 1.3.1! input element, type of 'text', has missing title")

                console.log("-----------------------------------------")
                console.log("Rule: WCAG 1.3.1 (2.0,A)")
                console.log("Error: input element, type of 'text', has missing title")
                console.log("Code Snippet: ", inputTags[d].outerHTML)
                console.log("Fix: Add title to the input or text to the input element's associated label that describes the purpose or function of the control.")
                // console.log(inputTags[d].outerHTML)  
            }

            var etestCasePass = false
            var e1labelTags = document.querySelectorAll("label")
            for (var x = 0; x < e1labelTags.length; x++) {
                if (inputTags[d].contains(e1labelTags[x])) {
                    if (e1labelTags[x].innerText != null && e1labelTags[x].innerHTML != "") {
                        etestCasePass = true
                        break
                    }
                }
            }
            if (etestCasePass == false) {
                //  console.log("[Known Problem] Violation 1.3.1! input element, type of 'text', has missing label") 

                console.log("-----------------------------------------")
                console.log("Rule: WCAG 1.3.1 (2.0,A)")
                console.log("Error: input element, type of 'text', has missing label")
                console.log("Code Snippet: ", inputTags[d].outerHTML)
                console.log("Fix: Add an associated label to the input element that describes the purpose or function of the control.")
                // console.log(inputTags[d].outerHTML) 
            }
        }

    }
}

