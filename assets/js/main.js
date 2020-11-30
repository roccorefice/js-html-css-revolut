//document ready
$(function(){
    //cambio il colore e padding al bottone attraverso .css()
    $('.btn > a').css(
        {
            "color" : "white",
            "padding" : "10px 20px" 
        }
    );

    //Dichiaro e seleziono le variabili che utilizzo
    var horizontalMenu = $('.horizontal_menu');
    
    //funzione che visualizza e nasconde il menu

    horizontalMenu.mouseenter(function(){
        $(this).find('div').addClass("active");
    });
    horizontalMenu.mouseleave(function(){
        $(this).find('div').removeClass("active");
    });
    
});
