Posts = new Mongo.Collection('posts');

Posts.allow({
    insert: function(userId,doc){
        return !!userId;
    },
    update: function(userId,doc){
        return !!userId;
    }
});

PostSchema = new Schema({
    title: {
        type: String,
        label: "Title"
    },
    content: {
        type: Text,
        label: "Content"
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function() {
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function(){
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    }
});

Meteor.methods({
    deletePost: function(id){
        Posts.remove(id);
    }
});

Posts.attachSchema(PostSchema);
