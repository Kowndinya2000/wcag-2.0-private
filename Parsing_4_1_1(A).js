// Requirement
// id attributes must be unique.
// Error
// id attribute is not unique.
// Short Description
// Each id attribute value must be unique.
// How To Repair
// Modify the id attribute value so it is unique.

setTimeout(() => {
    Parsing()
}, 400);

function Parsing() {
    var allTags = document.querySelectorAll('*')
    id_array = {}
    for (var d = 0; d < allTags.length; d++) {
        if (allTags[d].nodeName != "HTML" &&
            allTags[d].nodeName != "BODY" &&
            allTags[d].nodeName != "LINK" &&
            allTags[d].nodeName != "SCRIPT" &&
            allTags[d].nodeName != "STYLE" &&
            allTags[d].nodeName != "XML" &&
            allTags[d].nodeName != "HEAD" &&
            allTags[d].nodeName != "META") {
            if (allTags[d].id != null && allTags[d].id != "") {
                if (allTags[d].id in id_array) {
                    id_array[allTags[d].id].push(d)
                } else {
                    var new_arr = []
                    new_arr.push(d)
                    id_array[allTags[d].id] = new_arr
                    // console.log(id_array)
                }
            }

        }

    }

    for (id in id_array) {
        console.log(id_array[id].length)
        if (id_array[id].length > 1) {
            console.log("-----------------------------------------")
            console.log("Rule: WCAG 4.1.1 (2.0,A)")
            console.log("Error: id attribute is not unique")
            console.log("Following Code Snippets:")
            for (var i = 0; i < id_array[id].length; i++) {
                console.log("Code Snippet: ", allTags[id_array[id][i]].outerHTML)
            }
            console.log("Fix: Modify the id attribute value so it is unique)")

        }

    }



}

