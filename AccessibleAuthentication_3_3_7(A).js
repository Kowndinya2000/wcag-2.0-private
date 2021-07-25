// Finding if oAuth, WebAuth and captcha alternative exists is not straightforward
// Skipping this check condition

setTimeout(() => {
    AccessibleAuthentication()
}, 400);

function AutoComplete(elementArray) {
    for (var i = 0; i < elementArray.length; i++) {
        if (elementArray[i].type == "submit") {
            continue
        } else {
            if (elementArray[i].autocomplete == "off" || elementArray[i].autocomplete == "" || elementArray[i].autocomplete == null) {
                return false
            }
        }
    }
    return true
}
function AccessibleAuthentication() {
    // autocomplete for input type should be present
    // input type submit should exist
    // input belonging to form can be figured out inside the node body 
    // Success criterion: input autocomplete and submit (inside form) should co-exist 

    var inputTags = document.querySelectorAll('input')
    // console.log(inputTags)
    // console.log(inputTags.length)

    for (var a = 0; a < inputTags.length; a++) {
        if (inputTags[a].type == "submit") {
            if (inputTags[a].form == null) {
                console.log("-----------------------------------------")
                console.log("Rule: WCAG 3.3.7 (2.2,A)")
                console.log("Error: Misplaced submit button")
                console.log("Code Snippet: ", inputTags[a].outerHTML)
                console.log("Fix: submit button must be enclosed inside a form.")
                // console.log("Violation 3.3.7! ")
            }
            var formLength = inputTags[a].form.length
            // console.log("form length: ",inputTags[a].form.length)
            if (formLength > 0) {
                // One of the input would be submit and rest should have autocomplete set 
                var submitExists = false
                var formArray = inputTags[a].form
                for (var k = 0; k < formArray.length; k++) {
                    if (formArray[k].type == "submit") {
                        submitExists = true
                        break
                    }
                }
                if (submitExists) {
                    if (AutoComplete(formArray)) {
                        //console.log("Success Criterion 3.3.7 Passed!")
                    } else {
                        console.log("-----------------------------------------")
                        console.log("Rule: WCAG 3.3.7 (2.2,A)")
                        console.log("Error: Autocomplete for some form elements is missing.")
                        console.log("Code Snippet: ", inputTags[a].outerHTML)
                        console.log("Fix: Add autocomplete property for inputs in the form elements.")

                    }
                } else {
                    console.log("-----------------------------------------")
                    console.log("Rule: WCAG 3.3.7 (2.2,A)")
                    console.log("Error: Submit button does not exist.")
                    console.log("Code Snippet: ", inputTags[a].outerHTML)
                    console.log("Fix: Add submit button in the form to enable browser store a password.")

                }
            }
        } else {
            if (inputTags[a].autocomplete == "") {
                console.log("-----------------------------------------")
                console.log("Rule: WCAG 3.3.7 (2.2,A)")
                console.log("Error: Input element should not have autocomplete attribute unset.")
                console.log("Code Snippet: ", inputTags[a].outerHTML)
                console.log("Fix: Set autocomplete property for the input to on.")
            } else {
                // There are around 55 auto-completion tags
                var validAutoCompletions = ["additional-name", "address-level1", "address-level2"]
                if (inputTags[a].autocomplete == "off") {
                    console.log("-----------------------------------------")
                    console.log("Rule: WCAG 3.3.7 (2.2,A)")
                    console.log("Error: Input element should not have autocomplete attribute in off mode.")
                    console.log("Code Snippet: ", inputTags[a].outerHTML)
                    console.log("Fix: Set autocomplete property for the input to on.")
                } else {
                    // Autocomplete exist
                }
            }
        }
        // console.log(inputTags[a].autocomplete)
    }
}