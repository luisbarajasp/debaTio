ServiceConfiguration.configurations.upsert({service: 'twitter'},{
    $set: {
        comsumerKey: '',
        comsumerSecret: '',
        loginStyle: 'popup'
    }
});
