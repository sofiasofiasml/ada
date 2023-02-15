VIEW =
{
    init: function()
    {
        
        VIEW.navDISPLAY();
        
    }, 
    navDISPLAY: function()
    {
        var checkBox = document.querySelector(".check");
        var nav = document.querySelector(".navDis");
        
        var homeBox = document.querySelector(".mainBox");
        var footerBox = document.querySelector(".footerBox");
        console.log(window.innerWidth); 
        if(window.innerWidth <= 858 || MODEL.detectMob())
        {
            if (checkBox.checked == true){
                nav.style.display = "block";
                homeBox.style.display = "none";
                footerBox.style.display = "none";
                checkBox.checked = false; 
            } else {
                nav.style.display = "none";
                homeBox.style.display = "block";
                footerBox.style.display = "block";
                checkBox.checked = true; 
    
                
            }
        }
        else
        {
        
            nav.style.display = "flex";
            homeBox.style.display = "block";
            footerBox.style.display = "block";
        }
        
    },
    

}