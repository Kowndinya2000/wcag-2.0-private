

// Help Options should reside on the same place in all the pages of a website 

setTimeout(() => {
    FocusAppearanceMinimum()
}, 400);

function FocusAppearanceMinimum() {
    $(document).ready(function () {
        $('*').each(function () {
            var outW1 = $(this).css("outlineWidth")
            outW1 = parseInt(outW1.toString().split("px")[0])
            var outW2 = $(this).focus().css("outlineWidth")
            outW2 = parseInt(outW1.toString().split("px")[0])

            var offsetArea = this.offsetWidth * this.offsetHeight
            var clientArea = this.clientHeight * this.clientWidth
            // var FocusArea = offsetArea - clientArea 
            var clientPerimeter = 2 * (this.clientHeight + this.clientWidth)
            var offsetPerimeter = 2 * (this.offsetWidth + this.offsetHeight)
            // console.log(offsetArea, clientArea)
            // console.log("focus area: ",FocusArea)

            // offsetPerimeter = offsetPerimeter*outW2

            // console.log("perimeter: ",clientPerimeter)

            // console.log($(this).css("outlineWidth"),$(this).focus().css("outlineWidth"))
            var color1 = $(this).focus().css("outline-color")
            var color2 = $(this).css("outline-color")
            var color3 = $(this).css("backgroundColor")
            color1 = color1.toString().split(")")[0].split("(")[1].split(",")
            color2 = color2.toString().split(")")[0].split("(")[1].split(",")
            color3 = color3.toString().split(")")[0].split("(")[1].split(",")
            var contrast1 = contrast(color1, color2)
            var contrast2 = contrast(color1, color3)
            var contrastGained = contrast1
            if (contrastGained < contrast2) {
                contrastGained = contrast2
            }
            // console.log('contrastGained: ',contrastGained)
            if (contrastGained < 3) {
                console.log("-----------------------------------------")
                console.log("Rule: WCAG 2.4.11 (2.2,AA)")
                console.log("Error: The contrast ratio is less than 3:1 for colors in focused and unfocused states.")
                console.log("Code Snippet: ", $(this))
                console.log("Fix: Increase the contrast ratio to atleast 3:1 between colors in focused and unfocused states.")
                // console.log("Violation 2.4.11! Need contrast ratio of atleast 3:1 between colors in focused and unfocused states")
            } else {
                if (offsetPerimeter * outW2 < clientPerimeter) {

                    console.log("-----------------------------------------")
                    console.log("Rule: WCAG 2.4.11 (2.2,AA)")
                    console.log("Error: Minimum contrasting area is lesser than the area of a 1 CSS pixel thick perimeter of the unfocused component.")
                    console.log("Code Snippet: ", $(this))
                    console.log("Fix: Increase the minimum contrasting area to atleast the area of a 1 CSS pixel thick perimeter of the unfocused component.")

                    //console.log("Violation 2.4.11! Minimum contrasting area is as large as the area of a 1 CSS pixel thick perimeter of the unfocused component")                    
                } else {
                    if (outW2 < 2) {


                        console.log("-----------------------------------------")
                        console.log("Rule: WCAG 2.4.11 (2.2,AA)")
                        console.log("Error: Shape of the contrasting area is thinner than 2 pixels.")
                        console.log("Code Snippet: ", $(this))
                        console.log("Fix: Increase the shape of the contrasting area to a minimum of 2 pixels.")
                        //        console.log("Violation 2.4.11! outline should be no thinner than 2 pixels")
                    } else {
                        if (this.clientWidth < this.clientHeight) {
                            if (outW2 * offsetPerimeter < (4 * this.clientWidth)) {

                                console.log("-----------------------------------------")
                                console.log("Rule: WCAG 2.4.11 (2.2,AA)")
                                console.log("Error: Focus area is lesser than the area of a 4 CSS pixel thick line along the shortest side of a minimum bounding box of the unfocused component.")
                                console.log("Code Snippet: ", $(this))
                                console.log("Fix: Increase the focus area to alteast the area of a 4 CSS pixel thick line along the shortest side of a minimum bounding box of the unfocused component.")
                                //  console.log("Violation 2.4.11! Focus area is alteast the area of a 4 CSS pixel thick line along the shortest side of a minimum bounding box of the unfocused component")
                            }
                        } else {
                            if (outW2 * offsetPerimeter < (4 * this.clientHeight)) {

                                console.log("-----------------------------------------")
                                console.log("Rule: WCAG 2.4.11 (2.2,AA)")
                                console.log("Error: Focus area is lesser than the area of a 4 CSS pixel thick line along the shortest side of a minimum bounding box of the unfocused component.")
                                console.log("Code Snippet: ", $(this))
                                console.log("Fix: Increase the focus area to alteast the area of a 4 CSS pixel thick line along the shortest side of a minimum bounding box of the unfocused component.")
                                // console.log("Violation 2.4.11! Focus area is alteast the area of a 4 CSS pixel thick line along the shortest side of a minimum bounding box of the unfocused component")
                            }
                        }
                    }
                }
            }
            // console.log(color1,color2,color3)
        })
    })


}

function luminance(r, g, b) {
    var a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928
            ? v / 12.92
            : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}
function contrast(rgb1, rgb2) {
    var lum1 = luminance(parseInt(rgb1[0]), parseInt(rgb1[1]), parseInt(rgb1[2]));
    var lum2 = luminance(parseInt(rgb2[0]), parseInt(rgb2[1]), parseInt(rgb2[2]));
    var brightest = Math.max(lum1, lum2);
    var darkest = Math.min(lum1, lum2);
    return (brightest + 0.05)
        / (darkest + 0.05);
}

