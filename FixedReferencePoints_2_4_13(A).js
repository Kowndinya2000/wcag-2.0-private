

// Table of contents for epub

setTimeout(() => {
    FixedReferencePoints()
}, 400);

function FixedReferencePoints() {
    $(document).ready(function () {
        $('li').each(function () {
            try {
                var arr = $(this).children("a")
                for (var c = 0; c < arr.length; c++) {
                    if (arr[c].href == "") {
                        console.log("-----------------------------------------")
                        console.log("Rule: WCAG 2.4.13 (2.2,A)")
                        console.log("Error: Missing pagination for the reference locators")
                        console.log("Code Snippet: ", arr[c].outerHTML)
                        console.log("Fix: Reference locators should be paginated. Add necessary hyper-links.")
                    }
                }
            } catch (error) {
                console.log(error)
            }
        })
    })

}

