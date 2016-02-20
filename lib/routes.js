if(Meteor.isClient){
    Accounts.onLogin(function(){
        FlowRouter.go('recent');
    });

    Accounts.onLogout(function(){
        FlowRouter.go('home');
    });
}

FlowRouter.triggers.enter([function(context,redirect){
    if(Meteor.userId()){
        FlowRouter.go('recent');
    }
}]);

FlowRouter.route('/',{
    name: 'home',
    action() {
        if(Meteor.userId()){
            FlowRouter.go('recent');
        }
        BlazeLayout.render('Home');
    }
});

FlowRouter.route('/recent',{
    name: 'recent',
    action() {
        BlazeLayout.render('Main', {main: 'Recent'});
    }
});
