// Requirement: 
// title attribute for all img elements is absent or the empty string ("") if the image is decorative.
// Error: 
// img has title attribute and image may be decorative.
// Short Description: 
// Decorative images must have no title or empty string title.
// "decorative" is defined as content that does not provide information, functionality, sensory experience and is neither multimedia nor time-dependent interactive

// Requirement
// All img elements have an alt attribute.
// Error
// img element missing alt attribute.
// Short Description
// All img elements must have an alt attribute.
// Rationale
// All images must have alternate text. It's required by people that are unable to view the image.
// How To Repair
// Add an alt attribute to your img element.

// Requirement
// Alt text for all img elements used as source anchors is not empty when there is no other text in the anchor.
// Error
// Image used as anchor is missing valid Alt text.
// Short Description
// img element cannot have alt attribute value of null or whitespace if the img element is contained by an A element and there is no other link text.
// Rationale
// If an image is used as a link then it must have alternate (ALT) text that describes the link destination. The Alt text can't be null or all spaces.
// How To Repair
// Add Alt text that identifies the purpose or function of the image.

setTimeout(() => {
    NonTextContent_1_1_1()
}, 400);

function NonTextContent_1_1_1() {
    // console.clear()
    var imgTags = document.querySelectorAll('img')
    for (var a = 0; a < imgTags.length; a++) {
        var par = imgTags[a].parentNode.nodeName
        if (par != null) {
            if (imgTags[a].parentNode.textContent == "" || imgTags[a].parentNode.textContent == null) {
                if (imgTags[a].alt != null && imgTags[a].alt != "") {
                    // passed 
                } else {
                    console.log("-----------------------------------------")
                    console.log("Rule: WCAG 1.1.1 (2.0,A)")
                    console.log("Error: Image used as anchor is missing valid Alt text.")
                    console.log("Code Snippet: ", imgTags[a].outerHTML)
                    console.log("Fix: Add Alt text that identifies the purpose or function of the image")
                }
            }
        }
        console.log(par)
        console.log(imgTags[a].parentNode.textContent)

        if (imgTags[a].alt == "" || imgTags[a].alt == null) {
            if (imgTags[a].title != "" && imgTags[a].title != null) {
                // console.log(imgTags[a].outerHTML)
                // console.log("title: ",imgTags[a].title, "alt: ", imgTags[a].alt)

                console.log("-----------------------------------------")
                console.log("Rule: WCAG 1.1.1 (2.0,A)")
                console.log("Error: img has title attribute and image may be decorative.")
                console.log("Code Snippet: ", imgTags[a].outerHTML)
                console.log("Fix: title attribute for all img elements must be absent or empty string ('') if the image is decorative")
                // console.log("[Potential Problem] Violation 1.1.1! title attribute for all img elements must be absent or the empty string ('') if the image is decorative")
            }
            //   console.log("[Known Problem] Violation 1.1.1! Image should have alt attribute")

            console.log("-----------------------------------------")
            console.log("Rule: WCAG 1.1.1 (2.0,A)")
            console.log("Error: Image should have alt attribute")
            console.log("Code Snippet: ", imgTags[a].outerHTML)
            console.log("Fix: Add an alt attribute to your img element")
        }
        else if (imgTags[a].alt.split(" ").length <= 2) {
            if (imgTags[a].title != "" && imgTags[a].title != null) {
                // console.log(imgTags[a].outerHTML)
                // console.log("title: ",imgTags[a].title, "alt: ", imgTags[a].alt)
                // console.log("[Potential Problem] Violation 1.1.1! title attribute for all img elements must be absent or the empty string ('') if the image is decorative")

                console.log("-----------------------------------------")
                console.log("Rule: WCAG 1.1.1 (2.0,A)")
                console.log("Error: img has title attribute and image may be decorative.")
                console.log("Code Snippet: ", imgTags[a].outerHTML)
                console.log("Fix: title attribute for all img elements must be absent or empty string ('') if the image is decorative")
            }
            // console.log("[Potential Problem] Violation 1.1.1!  Alt text is not empty and image may be decorative")

            console.log("-----------------------------------------")
            console.log("Rule: WCAG 1.1.1 (2.0,A)")
            console.log("Error: Alt text is not empty and image may be decorative")
            console.log("Code Snippet: ", imgTags[a].outerHTML)
            console.log("Fix: title attribute for all img elements must be absent or empty string ('') if the image is decorative")
        }
        else {
            // console.log("[Potential Problem] Violation 1.1.1!  Alt text is not empty and image may be decorative")

            console.log("-----------------------------------------")
            console.log("Rule: WCAG 1.1.1 (2.0,A)")
            console.log("Error: Alt text is not empty and image may be decorative")
            console.log("Code Snippet: ", imgTags[a].outerHTML)
            console.log("Fix: title attribute for all img elements must be absent or empty string ('') if the image is decorative")

        }
    }
}