$(document).ready(function(){

    $("#profileImage").hover(

        function(){
            // Hide using opacity (keeps space, prevents resize)
            $(this).css("opacity", "0");
        },

        function(){
            // Show image again
            $(this).css("opacity", "1");
        }

    );

});