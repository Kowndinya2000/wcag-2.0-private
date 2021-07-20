// Requirement
    // Each label associated with an input element contains text.
// Error
    // Label text is empty.
// Short Description
    // Label must contain some text.
// How To Repair
    // Add text to the label element.

setTimeout(() => {
    LabelsOrInstructions()
}, 400);

function LabelsOrInstructions() {
    var inputTags = document.querySelectorAll('input')
    for(var d=0;d<inputTags.length;d++){
        var testCasePass = false
        var labelTags = document.querySelectorAll('input');
        for (var x=0;x<labelTags.length;x++){
            if(labelTags[x].htmlFor == inputTags[d].id){
                // console.log(inputTags[d].outerHTML)
                // console.log(labelTags[x].outerHTML) 
                if(labelTags[x].innerText != null && labelTags[x].innerText != ""){
                    testCasePass = true
                    break 
                } 
            }
            if(testCasePass == false){
                    console.log("[Known Problem] Violation 3.3.2! Label text is empty")  
                    // console.log(inputTags[d].outerHTML) 
                }
    }
            
    }
    
}

