

// controls should be of atleast 44 by 44 pixel dimensions.
// If not then they should be enclosed inside a 44 by 44 boundary

setTimeout(() => {
  PointerTargetSpacing()
}, 400);

function PointerTargetSpacing() {
  var allTags = document.querySelectorAll("*")
  for (var k = 0; k < allTags; k++) {
    if (allTags[k].nodeName != "HTML" &&
      allTags[k].nodeName != "BODY" &&
      allTags[k].nodeName != "LINK" &&
      allTags[k].nodeName != "SCRIPT" &&
      allTags[k].nodeName != "STYLE" &&
      allTags[k].nodeName != "XML" &&
      allTags[k].nodeName != "HEAD" &&
      allTags[k].nodeName != "META") {
      if (allTags[k].clientHeight < 44 || allTags[k].clientWidth < 44) {
        // console.log("Violation 2.5.8! Need the target size of atleast 44 pixels")
        console.log("-----------------------------------------")
        console.log("Rule: WCAG 2.5.8 (2.2,AA)")
        console.log("Error: Need the target size of atleast 44 pixels.")
        console.log("Code Snippet: ", allTags[k].outerHTML)
        console.log("Fix: Make the target size to atleast 44 pixels.")
      }
    }

  }

}