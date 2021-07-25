// Requirement
// marquee element is not used.
// Error
// marquee element used.
// Short Description
// This error will be generated for each marquee element.
// How To Repair
// Remove the marquee element (replace with strong or em).

setTimeout(() => {
    Pause_Stop_Hide()
}, 400);

function Pause_Stop_Hide() {
    var marqueeTags = document.querySelectorAll('marquee')
    for (var d = 0; d < marqueeTags.length; d++) {
        console.log("-----------------------------------------")
        console.log("Rule: WCAG 2.2.2 (2.0,A)")
        console.log("Error: marquee element used")
        console.log("Code Snippet: ", marqueeTags[d].outerHTML)
        console.log("Fix: Remove the marquee element (replace with strong or em)")
    }

}

