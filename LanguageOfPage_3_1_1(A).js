// Requirement
// Document has required lang attribute(s).
// Error
// Document language not identified.
// Short Description
// html element must contain a lang attribute.
// Rationale
// The lang attribute allows assistive technology to orient and adapt to the pronunciation and syntax that are specific to the language of the page. This attribute may also play a major role in the emerging global, multi-lingual, simultaneous translation Web environment.
// How To Repair
// For HTML documents add the lang attribute and a valid ISO-639-1 two letter language code to the opening HTML element. For XHTML documents add both the lang and xmllang attributes with a valid ISO-639-1 two letter language code to the opening HTML element.

// Requirement
// Document has valid language code.
// Error
// Document has invalid language code.
// Short Description
// html element must have a lang attribute value of valid 2 or 3 letter language code according to ISO specification 639.
// Rationale
// You must use a valid 2 letter or 3 letter language code to identify the primary language of the content.
// How To Repair
// Add a valid 2 letter or 3 letter language code as defined in the ISO 639 specification to the HTML 'lang' attribute. For XHTML, both 'lang' and 'xml:lang' must be set.

setTimeout(() => {
    LanguageOfPage()
}, 400);

function LanguageOfPage() {
    if (document.getElementsByTagName('html')[0].getAttribute('xml:lang') != null &&
        document.getElementsByTagName('html')[0].getAttribute('xml:lang') != "") {
        if (document.getElementsByTagName('html')[0].getAttribute('xml:lang').length == 2 ||
            document.getElementsByTagName('html')[0].getAttribute('xml:lang').length == 3) {

            console.log("-----------------------------------------")
            console.log("Rule: WCAG 3.1.1 (2.0,A)")
            console.log("Error: Document has invalid language code")
            console.log("Code Snippet: ", document.getElementsByTagName("html")[0].outerHTML)
            console.log("Fix: For HTML documents add the lang attribute and a valid ISO-639-1 two letter language code to the opening HTML element. For XHTML documents add both the lang and xmllang attributes with a valid ISO-639-1 two letter language code to the opening HTML element")
            // console.log("[Known Problem] Violation 3.1.1! Document has invalid language code")
        }
    } else {

        console.log("-----------------------------------------")
        console.log("Rule: WCAG 3.1.1 (2.0,A)")
        console.log("Error: Document language not identified")
        console.log("Code Snippet: ", document.getElementsByTagName("html")[0].outerHTML)
        console.log("Fix: For HTML documents add the lang attribute and a valid ISO-639-1 two letter language code to the opening HTML element. For XHTML documents add both the lang and xmllang attributes with a valid ISO-639-1 two letter language code to the opening HTML element.")
        // console.log("[Known Problem] Violation 3.1.1! Document language not identified")
    }
}


