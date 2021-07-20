// Requirement
    // Each source anchor contains text.
// Error
    // Anchor contains no text.
// Short Description
    // a (anchor) element must contain text. The text may occur in the anchor text or in the title attribute of the anchor or in the Alt text of an image used within the anchor.
// How To Repair
    // Add text to the a element or the title attribute of the a element or, if an image is used within the anchor, add Alt text to the image.

setTimeout(() => {
    LinkPurpose()
}, 400);

function LinkPurpose() {
    var anchorTags = document.querySelectorAll('a')
    for(var d=0;d<anchorTags.length;d++){
        if(anchorTags[d].href != null && anchorTags[d].href != "" && anchorTags[d].innerText != "" && anchorTags[d].innerText != null)
        {
            console.log("[Known Problem] Violation 2.4.4! Anchor contains no text")
        }
    }
    
}

