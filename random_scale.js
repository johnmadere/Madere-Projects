    var randomize = document.getElementById("randombutt");
    document.getElementById("randombutt").addEventListener("click", playScale);
    
    //reset button
    function refreshPage(){ window.location.reload();}
    
    let scales = [];
    let quality = [];
    const array1 = [];
    const array2 = [];
  
        //creates array that adds roots
        let rootsArray = []
        var checkboxes = document.querySelectorAll("input[type=checkbox][name=settings]");
        checkboxes.forEach(function(checkbox) {
              checkbox.addEventListener('click', function() {
                rootsArray = 
                  Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
                  .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
                  .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.  
                }) 
            })

            //Selects all roots
            function toggle(source) {
                var checkboxes = document.querySelectorAll("input[type=checkbox][name=settings]");
                for (var i = 0; i < checkboxes.length; i++) {
                    if (checkboxes[i] != source)
                        checkboxes[i].checked = source.checked;
                        
                }
            } 

            //MAKE AND SEND A SEPARATE ARRAY WHEN ALL IS SELECTED BUT STILL HAVE IT PRESS BUTTONS?
                     
    //root event listener
        rbtns = document.getElementsByClassName("rootbuttons");
        for (var i = 0; i < rbtns.length; i++) {
        rbtns[i].addEventListener("click", function () {
            scales = rootsArray.concat(array1);
        });
    }
       //end of roots 

       //same setup but for quality
        var qualcheckboxes = document.querySelectorAll("input[type=checkbox][name=qsettings]");
            qualcheckboxes.forEach(function(checkbox) {
              checkbox.addEventListener('click', function() {
                qualityArray = 
                  Array.from(qualcheckboxes) // Convert checkboxes to an array to use filter and map.
                  .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
                  .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.          
              })
    });

    function toggleQual(source1) {
        var checkboxes = document.querySelectorAll("input[type=checkbox][name=qsettings]");
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i] != source1)
                checkboxes[i].checked = source1.checked;
                //still not quite working
                //document.getElementById("both").value = quality[0]; //did this to hide value="both" showing up in array
        }
    } 

       qbtns = document.getElementsByClassName("qualitybuttons");
        for (var i = 0; i < qbtns.length; i++) {
        qbtns[i].addEventListener("click", function () {
            quality = qualityArray.concat(array2);
           //works but doesn't work
            //quality.pop();  
        })
    }

    function toggleQual(source1) {
        var checkboxes = document.querySelectorAll("input[type=checkbox][name=qsettings]");
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i] != source1)
                checkboxes[i].checked = source1.checked;
                //still not quite working
                //document.getElementById("both").value = quality[0]; //did this to hide value="both" showing up in array
        }
    } 

    //The actual randomization
    function playScale() {
        
        
        var rand1 = Math.floor(Math.random() * scales.length);
        var rand2 = Math.floor(Math.random() * quality.length);
        var string = "Let's play the " + scales[rand1] + " " + quality[rand2]+ " scale.";
        var out = document.getElementById("scaleoutput");
        out.innerText = string;   
       
        //"Error" messages
        if (scales == "" && quality == "") {
            out.innerText = "Please select a scale root/roots and scale quality/qualities.";  
        } else if (scales == "") {
            out.innerText = "Please select a scale root/roots."; 
        } else if (quality == "") {
            out.innerText = "Please select a scale quality/qualities."; 
        }   
    }

     //add pic to header to make it more scaley?


 



    

