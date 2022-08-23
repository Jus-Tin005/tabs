/*
! DOM Area
*/

var gettabLInks = document.getElementsByClassName("tablinks"),  // HTMLCollacttion
    gettabPane = document.getElementsByClassName("tab-pane"),   // HTMLCollacttion
    getBtnClose = document.querySelectorAll(".btn-close");      // NodeList


    var tabPanes = Array.from(gettabPane);  // method 1

    function getTab(event,linkId) {
        // console.log(event.target);
        // console.log(linkId);

        tabPanes.forEach(function(tabPane){   // method 1
                tabPane.style.display = "none";
        });

        // for(var x = 0; x < gettabPane.length; x++){  // method 2
                // gettabPane[x].style.display = "none";
        // }

        for(var x = 0; x < gettabLInks.length; x++){
                gettabLInks[x].className = gettabLInks[x].className.replace(" active", "");

                getBtnClose[x].addEventListener('click', function(){   // error in arrow function
                        this.parentElement.style.display = "none";
                })
        }

        document.getElementById(linkId).style.display = "block";

        // event.target.className += " active";
        // event.target.className = event.target.className.replace("tablinks","tablinks active");
        // event.target.classList.add("active");

        // console.log(event);
        // console.log(event.target);
        // console.log(event.currentTarget);
        event.currentTarget.className += " active";

}


document.getElementById("autoClick").click();


