// Requirement
// All text colors or no text colors are set.
// Error
// All text colors are not set.
// Short Description
// If the author specifies that the text must be black, then it may override the settings of the user agent and render a page that has black text (specified by the author) on black background (that was set in the user agent).
// How To Repair
// Ensure all the text colors or none of the text colors are set using attributes on the body element.

setTimeout(() => {
    UseOfColor()
}, 400);

function UseOfColor() {
    var Count10 = 0
    var checkIf = false
    if (document.body.style.color != null || document.body.style.color != "") {
        if (document.body.style.backgroundColor != null || document.body.style.backgroundColor != "") {
            // Success criterion achieved
            checkIf = true
        }
    }
    if (!checkIf) {
        Count10 += 1
        console.log("-----------------------------------------")
        console.log("Rule: WCAG 1.4.1 (2.0,A)")
        console.log("Error: All text colors are not set.")
        console.log("Code Snippet: ", document.body.outerHTML)
        console.log("Fix: Ensure all the text colors or none of the text colors are set using attributes on the body element.")
        //console.log("[Known Problem] Violation 1.4.1! All text colors or no text colors are set.")
    }
    console.log("1.4.1 = ", Count10)
}


