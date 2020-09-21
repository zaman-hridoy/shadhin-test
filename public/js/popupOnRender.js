        // Notification and user deopdown
        var $contents = $('.user-menu');
        $contents.hide();
        $('.open-drop').click(function() {
          var $target = $('#' + this.id + 'show').slideToggle('slow');
          $contents.not($target).slideUp('slow');
        });
        
        
        // collapse in user my profile page
        var $myGroup = $('.collapse-area');
        $myGroup.on('show.bs.collapse','.collapse', function() {
        $myGroup.find('.collapse.show').collapse('hide');
        });
        
        
        
        // Customize bootstrap popover
        $('.popper').popover({
            container: 'body',
            html: true,
            sanitize: false,
            content: function () {
                return $(this).next('.pop-content').html();
            }
        });
        
        // popup inside addtoplaylist button on queue page
        $(document).on("click", ".popper2", function() {
            $(".pop-content2").addClass("d-block");
        });
        $(document).on("click", ".popper2-close", function() {
            $(".pop-content2").removeClass("d-block");
        });
        
        
        
        // mobile search click
        $( ".mobilesearch" ).on('click', function() {
        $( ".src-mobile input" ).focus();
        });