// Requirement
    // The header following an h1 is h1 or h2.
// Error
    // Header nesting - header following h1 is incorrect.
// Short Description
    // The following header must be equal, one level greater or any level less.
// How To Repair
    // Modify the header levels so only an h1 or h2 follows h1.

setTimeout(() => {
    HeadingsAndLabels()
}, 400);

function HeadingsAndLabels() {
    var h1R = 0
    var h2R = 0
    var h3R = 0
    var h4R = 0
    var h5R = 0
    var h6R = 0
    var count = 0 
    $(document).ready(function(){    
        $('*').each(function(){
            count += 1 
            if($(this).prop("nodeName") == "H1" )
                {
                    if(h1R == 0){
                        h1R = count
                    }
                }  
            else if($(this).prop("nodeName") == "H2" )
                {
                    if(h2R == 0){
                        h2R = count
                    }
                }  
            else if($(this).prop("nodeName") == "H3" )
                {
                    if(h3R == 0){
                        h3R = count
                    }
                } 
            else if($(this).prop("nodeName") == "H4" )
                {
                    if(h4R == 0){
                        h4R = count
                    }
                } 
            else if($(this).prop("nodeName") == "H5" )
                {
                    if(h5R == 0){
                        h5R = count
                    }
                } 
            else if($(this).prop("nodeName") == "H6" )
                {
                    if(h6R == 0){
                        h6R = count
                    }
                } 
        })
        if(h1R < h2R && h1R < h3R && h1R < h4R && h1R < h5R && h1R < h6R){
            // passed
        } else {
            console.log("[Known Problem] Violation 2.4.6! Header nesting - header following h1 is incorrect.")
            console.log(document.getElementsByTagName("h1")[0].outerHTML)
        }
        
    })
}

