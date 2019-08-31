(function ($) {
    
    })(jQuery);
    $(document).ready(function () {
        var $ul = $('#fav-center2');
        var $title = $('#title-c2');
        var $url = $('#url-c2');
    
        //get items from local storage
        if (localStorage.getItem('fav-center2')) {
            $ul.html(localStorage.getItem('fav-center2'));
        }
    
        // add new item
        $('#add-center2').click(function () {
    
            //add new item
            $('#fav-center2').append('<li><a href="' + $url.val() + '">' + $title.val() + '</a><button class="removebtn">x</button></li>');
    
            //save changes to localstorage
            localStorage.setItem('fav-center2', $ul.html());
    
            //reset form
            $title.val("");
            $url.val("http://");
            $("#add-link-form-c").slideToggle("100");
    
        });
    
        //remove item
        $("#fav-center2").on('click', '.removebtn', function () {
            $(this).parent().remove();
            //save changes to localstorage
            localStorage.setItem('fav-center2', $ul.html());
        });
    
        //form toggle
        $("#new-link-button-c2").click(function () {
            $("#add-link-form-c2").slideToggle("100");
        });
    
    });
