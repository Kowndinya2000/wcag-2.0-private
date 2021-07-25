// HTML element should not be limited to single pointer access
// Any dragabble element if exists, should have other options that can be accessed
// by a keyboard or mouse click

setTimeout(() => {
    Dragging()
}, 400);

function Dragging() {
    var allTags = document.querySelectorAll('*')
    // console.table(allTags)
    // draggable : true false
    // oncontextmenu : null 
    // onfocus: null
    // ondrag, ondragend, ondragenter, ondragleave, ondragover, ondragstart, ondrop
    // onkeydown, onkeyup, onkeypress
    // onmouseup, onmouseover, onmousedown, onmousemove, onmouseleave, onmouseenter, onmousewheel
    // onpointercancel, onpointerdown, onpointerenter, onpointerleave, onpointermove, onpointerout, 
    // onpointerover, onpointerup
    console.log("total elements: ", allTags.length)
    for (var d = 0; d < allTags.length; d++) {
        var element = allTags[d]
        if (allTags[d].nodeName != "HTML" &&
            allTags[d].nodeName != "BODY" &&
            allTags[d].nodeName != "LINK" &&
            allTags[d].nodeName != "SCRIPT" &&
            allTags[d].nodeName != "STYLE" &&
            allTags[d].nodeName != "XML" &&
            allTags[d].nodeName != "HEAD" &&
            allTags[d].nodeName != "META") {

            if (element.draggable == true) {
                if (element.oncontextmenu == null || element.onfocus == null) {
                    console.log("-----------------------------------------")
                    console.log("Rule: WCAG 2.5.7 (2.2,AA)")
                    console.log("Error: Other non-pointer options for this draggable element are missing.")
                    console.log("Code Snippet: ", element.outerHTML)
                    console.log("Fix: Dragabble elements(true) should have other non-pointer options. Add them.")
                }
            } else {
                if (element.ondrag != null || element.onpointercancel != null || element.onpointerdown != null ||
                    element.ondragend != null || element.onpointerenter != null || element.onpointerleave != null ||
                    element.ondragenter != null || element.onpointermove != null || element.onpointerout != null ||
                    element.ondragleave != null || element.onpointerover != null || element.onpointerup != null ||
                    element.ondragover != null || element.ondragstart != null || element.ondrop != null ||
                    element.onkeydown != null || element.onkeyup != null || element.onkeypress != null ||
                    element.onmouseup != null || element.onmouseover != null || element.onmousedown != null ||
                    element.onmouseleave != null || element.onenter != null || element.onmousewheel != null) {
                    if (element.oncontextmenu == null || element.onfocus == null) {
                        console.log("-----------------------------------------")
                        console.log("Rule: WCAG 2.5.7 (2.2,AA)")
                        console.log("Error: Other non-pointer options for this draggable element are missing.")
                        console.log("Code Snippet: ", element.outerHTML)
                        console.log("Fix: Dragabble elements should have other non-pointer options. Add them.")
                    }
                }
            }
        }

    }
}

