// Requirement
// i (italic) element is not used.
// Error
// i (italic) element used.
// Short Description
// This error will be generated for all i elements.
// Rationale
// The i element is not handled as well by screen readers as the em and strong elements.
// How To Repair
// Replace your i elements with em or strong.

// Requirement
// b (bold) element is not used.
// Error
// b (bold) element used.
// Short Description
// This error will be generated for all B elements.
// Rationale
// The b element is not handled as well by screen readers as the em and strong elements.
// How To Repair
// Replace your b (bold) elements with em or strong.
// Requirement
// font must not be used.
// Error
// font used.
// Short Description
// This error is generated for all font elements.
// How To Repair
// Remove the font element from the document.
setTimeout(() => {
    ResizeText()
}, 400);

function ResizeText() {
    var italicTags = document.querySelectorAll('i')
    for (var d = 0; d < italicTags.length; d++) {
        // console.log("[Known Problem] Violation 1.4.4! The i element is not handled as well by screen readers as the em and strong elements.")
        console.log("-----------------------------------------")
        console.log("Rule: WCAG 1.4.4 (2.0,AA)")
        console.log("Error: i (italic) element used. The i element is not handled as well by screen readers as the em and strong elements")
        console.log("Code Snippet: ", italicTags[d].outerHTML)
        console.log("Fix: Replace your i (italic) elements with em or strong")
    }
    var boldTags = document.querySelectorAll('bold')
    for (var d = 0; d < boldTags.length; d++) {
        //console.log("[Known Problem] Violation 1.4.4! The bold element is not handled as well by screen readers as the em and strong elements.")
        console.log("-----------------------------------------")
        console.log("Rule: WCAG 1.4.4 (2.0,AA)")
        console.log("Error: b (bold) element used. The i element is not handled as well by screen readers as the em and strong elements")
        console.log("Code Snippet: ", italicTags[d].outerHTML)
        console.log("Fix: Replace your b (bold) elements with em or strong")
    }

    var fontTags = document.querySelectorAll('font')
    for (var d = 0; d < fontTags.length; d++) {
        //console.log("[Known Problem] Violation 1.4.4! The bold element is not handled as well by screen readers as the em and strong elements.")
        console.log("-----------------------------------------")
        console.log("Rule: WCAG 1.4.4 (2.0,AA)")
        console.log("Error: font used.")
        console.log("Code Snippet: ", fontTags[d].outerHTML)
        console.log("Fix: Remove the font element from the document")
    }


}

