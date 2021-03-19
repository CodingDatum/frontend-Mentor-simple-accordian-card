let accordianList = document.querySelectorAll(".single-accordian");

accordianList.forEach(function(accordian){

    accordian.onclick = function(){

        if(this.lastChild.previousElementSibling.style.display === "block"){

            this.lastChild.previousElementSibling.style.display = "none"

            let arrow = this.firstElementChild.lastElementChild;
            arrow.innerHTML = "<img src='images/icon-arrow-down.svg'>";

        }else{

            for( let i = 0 ; i < accordianList.length; i++){

                let itemToDisplay = accordianList[i].lastChild.previousElementSibling;
    
                itemToDisplay.style.display = "none";

                let arrow2 = accordianList[i].firstElementChild.lastElementChild;

                arrow2.innerHTML = "<img src='images/icon-arrow-down.svg'>"

            }
    
            this.lastChild.previousElementSibling.style.display = "block";
            let arrow = this.firstElementChild.lastElementChild;
            arrow.innerHTML = "^";

        }


    }
    
})