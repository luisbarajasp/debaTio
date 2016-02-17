ServiceConfiguration.configurations.remove({
  service: "twitter"
});
ServiceConfiguration.configurations.upsert({service: "twitter"},{
    $set:{
        consumerKey: Meteor.settings.twitter.consumerKey,
        loginStyle: "popup",
        secret: Meteor.settings.twitter.secret
    }
});
ServiceConfiguration.configurations.upsert({service: "facebook"},{
    $set:{
        appId: Meteor.settings.facebook.appId,
        loginStyle: "popup",
        secret: Meteor.settings.facebook.secret
    }
});
