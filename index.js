function Button_hover(Elemento){
    $(Elemento).hover(
        function(){$(this).removeClass("is-inverted");},
        function(){$(this).addClass("is-inverted");}
    )
}

$(document).ready(function(){
    Button_hover("#Twitter");
    Button_hover("#Github");
    Button_hover("#Stack");
    
    $(".navbar-burger").click(function(){
        $(this).toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    })
})