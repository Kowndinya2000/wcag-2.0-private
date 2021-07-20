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
    // var visited = false
    // $(document).ready(function(){    
    //     $('*').each(function(){
    //         if($(this).prop("nodeName") == "H1" )
    //             {
    //                 visited = true 
    //             } else if($(this).prop("nodeName") == "H2" ){
    //                 if(visited)
    //             } 
    //     })
    // })
    var elems = document.getElementsByTagName('*');
    
    var indexOfH1 = elems.indexOf(document.getElementsByTagName('H1'));
    var indexOfH2 = elems.indexOf(document.getElementsByTagName('H2'));
    var indexOfH3 = elems.indexOf(document.getElementsByTagName('H3'));
    var indexOfH4 = elems.indexOf(document.getElementsByTagName('H4'));
    var indexOfH5 = elems.indexOf(document.getElementsByTagName('H5'));
    var indexOfH6 = elems.indexOf(document.getElementsByTagName('H6'));
    console.log(indexOfH1)
    console.log(indexOfH2)
    console.log(indexOfH3)
    console.log(indexOfH4)
}

