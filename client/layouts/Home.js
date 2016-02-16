Meteor.startup(function(){
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var height = $(window).height();

        $('.welcomeText').css({
            'opacity': ((height - scrollTop) / height) - 0.1
        });
        //console.log("Scrolltop: "+scrollTop+", height: "+height);

        var fp = height * 0.40;
        var hfp = height * 1.90;

        //var usersAnim = new countUp(".users", 24.02, 99.99);

        if(scrollTop >= fp ){
            $('.friends').fadeIn(1000);
            $('#up').slideDown(500);
            //usersAnim.start();
        }else{
            $('.friends').fadeOut(500);
            $('#up').slideUp(500);
        }

        if(scrollTop >= hfp){
            $('.tContainer').fadeIn(1000);
        }else{
            $('.tContainer').fadeOut(500);
        }
    });
});

Template.Home.events({
    'click #tell-more': function(event){
        $('html, body').animate({
            scrollTop: $('#me-more').offset().top
        }, 1000);
        event.preventDefault();
    },
    'click .fa-arrow-circle-up': function(event){
        $('html, body').animate({
            scrollTop: $('.welcomeBanner').offset().top
        }, 500);
        event.preventDefault();
    },
    'click #login': function(e){
        $('.modal-login').fadeIn(400);
        $('.modal-dialog').slideDown(400);
        $("body").css("overflow","hidden");
        e.preventDefault();
    },
    'click [data-dismiss="modal"]': function(e){
        $('.modal-login').fadeOut(400);
        $('.modal-dialog').slideUp(400);
        $("body").css("overflow","auto");
        e.preventDefault();
    }
});

Template.Home.rendered = function()
{
    Accounts._loginButtonsSession.set('dropdownVisible', true);
};
