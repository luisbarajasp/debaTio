Template.Nav.events({
    'click #logout': function(e){
        Meteor.logout();
        e.preventDefault();
    }
});
