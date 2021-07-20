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

setTimeout(() => {
    NonTextContent_1_1_1()
}, 400);

function NonTextContent_1_1_1() {
    // console.clear()
    var imgTags = document.querySelectorAll('img')
    
    for(var a=0;a<imgTags.length;a++){
        if(imgTags[a].alt == "" || imgTags[a].alt == null){
                if(imgTags[a].title != "" && imgTags[a].title != null){
                // console.log(imgTags[a].outerHTML)
                // console.log("title: ",imgTags[a].title, "alt: ", imgTags[a].alt)
                console.log("[Potential Problem] Violation 1.1.1! title attribute for all img elements must be absent or the empty string ('') if the image is decorative")
            }
            console.log("[Known Problem] Violation 1.1.1! Image should have alt attribute")
        }
        else if(imgTags[a].alt.split(" ").length <= 2) {
            if(imgTags[a].title != "" && imgTags[a].title != null){
                // console.log(imgTags[a].outerHTML)
                // console.log("title: ",imgTags[a].title, "alt: ", imgTags[a].alt)
                console.log("[Potential Problem] Violation 1.1.1! title attribute for all img elements must be absent or the empty string ('') if the image is decorative")
            }
            console.log("[Potential Problem] Violation 1.1.1!  Alt text is not empty and image may be decorative")
        }
        else {
            console.log("[Potential Problem] Violation 1.1.1!  Alt text is not empty and image may be decorative")
        }
    }
}