

// Requirement
// Provide sufficient contrast between text and background colours.
// Error
// The contrast between the colour of text and its background for the element is not sufficient to meet WCAG2.0 Level AA.
// Short Description
// The visual presentation of text must have a contrast ratio of at least 4.5:1, except for large-scale text, which must have a contrast ratio of at least 3:1 as determined by a contrast algorithm specified by WCAG2.0. Large scale text is considered to be at least 18-point (or 14 point when bold).
// Rationale
// The rationale is based on a) adoption of the 3:1 contrast ratio for minimum acceptable contrast for normal observers, in the ANSI standard, and b) the empirical finding that in the population, visual acuity of 20/40 is associated with a contrast sensitivity loss of roughly 1.5 [ARDITI-FAYE]. A user with 20/40 would thus require a contrast ratio of 3 * 1.5 = 4.5 to 1. Following analogous empirical findings and the same logic, the user with 20/80 visual acuity would require contrast of about 7:1.
// How To Repair
// Use a colour contrast evaluator to determine if text and background colours provide a contrast ratio of 4.5:1 for standard text, or 3:1 for larger text. Change colour codes to produce sufficient contrast.

setTimeout(() => {
    Contrast_Minimum__1_4_3()
}, 400);

function Contrast_Minimum__1_4_3() {
    $(document).ready(function(){    
        $('*').each(function(){
            if($(this).prop("nodeName") == "DIV" || 
                $(this).prop("nodeName") == "SPAN" || 
                $(this).prop("nodeName") == "A" || 
                $(this).prop("nodeName") == "H3" || 
                $(this).prop("nodeName") == "P" || 
                $(this).prop("nodeName") == "H1" || 
                $(this).prop("nodeName") == "H2" || 
                $(this).prop("nodeName") == "H4" ||
                $(this).prop("nodeName") == "INPUT")
                {
                    var fontSize = $(this).css("font-size")
                    var fontWeight = $(this).css("font-weight")
                    var matches = fontWeight.match(/(\d+)/);
                    var fontWeightNumber = 0
                    if (matches) {
                        fontWeightNumber = parseInt(matches[0])
                    }
                    if(fontWeight == "normal" || fontWeightNumber < 700)
                    {
                        // normal text
                        fS = parseInt(fontSize.replace("px","")) 
                        if(fS < 18){
                            // Valid small scale text  
                            var color1 = $(this).css("background-color")
                            var color2 = $(this).css("color")
                            color1 = color1.toString().split(")")[0].split("(")[1].split(",")
                            color2 = color2.toString().split(")")[0].split("(")[1].split(",")
                            var icontrast = contrast(color1,color2)
                            if(icontrast < 4.5){
                                // console.log("[Known Problem] Violation 1.4.3! The contrast ratio must be greater than 4.5:1 for normal small scale text")
                                console.log("[Known Problem] Violation 1.4.3! The contrast between the colour of text and its background for the element is not sufficient to meet WCAG2.0 Level AA.")
                            }   
                            // console.log("fW: ",fontWeight, "&", fontWeightNumber)
                            // console.log("fS: ",fontSize)
                            // console.log("Contrast: ",icontrast)
                             
                        }
                        else{
                            // Valid large scale text  
                            var e1color1 = $(this).css("background-color")
                            var e1color2 = $(this).css("color")
                            e1color1 = e1color1.toString().split(")")[0].split("(")[1].split(",")
                            e1color2 = e1color2.toString().split(")")[0].split("(")[1].split(",")
                            var e1contrast = contrast(e1color1,e1color2)
                            if(e1contrast > 3){
                                // console.log("[Known Problem] Violation 1.4.3! The contrast ratio must be greater than 4.5:1 for normal small scale text")
                                console.log("[Known Problem] Violation 1.4.3! The contrast between the colour of text and its background for the element is not sufficient to meet WCAG2.0 Level AA.")
                            }    
                        }
                    } else {
                        // bold text
                        e2fS = parseInt(fontSize.replace("px","")) 
                        if(e2fS < 14){
                            // Valid small scale text  
                            var e2color1 = $(this).css("background-color")
                            var e2color2 = $(this).css("color")
                            var e2contrast = contrast(e2color1,e2color2)
                            e2color1 = e2color1.toString().split(")")[0].split("(")[1].split(",")
                            e2color2 = e2color2.toString().split(")")[0].split("(")[1].split(",")
                            if(e2contrast < 4.5){
                                // console.log("[Known Problem] Violation 1.4.3! The contrast ratio must be greater than 4.5:1 for normal small scale text")
                                console.log("[Known Problem] Violation 1.4.3! The contrast between the colour of text and its background for the element is not sufficient to meet WCAG2.0 Level AA.")
                            }    
                        }
                        else{
                            // Valid large scale text  
                            var e3color1 = $(this).css("background-color")
                            var e3color2 = $(this).css("color")
                            e3color1 = e3color1.toString().split(")")[0].split("(")[1].split(",")
                            e3color2 = e3color2.toString().split(")")[0].split("(")[1].split(",")
                            var e3contrast = contrast(e3color1,e3color2)
                            if(e3contrast > 3){
                                // console.log("[Known Problem] Violation 1.4.3! The contrast ratio must be greater than 4.5:1 for normal small scale text")
                                console.log("[Known Problem] Violation 1.4.3! The contrast between the colour of text and its background for the element is not sufficient to meet WCAG2.0 Level AA.")
                            }    
                        }
                    }
                }
        })
    })
 
    
}

function luminance(r, g, b) {
    var a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928
            ? v / 12.92
            : Math.pow( (v + 0.055) / 1.055, 2.4 );
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

