import Ember from 'ember';

export default Ember.Component.extend({

  selectedUsers: Ember.A([]),
  remainingUsers: Ember.computed.setDiff('model', 'selectedUsers'),
  remainingUsersLength: Ember.computed.alias('remainingUsers.length'),


  actions: {
    addUser: function(userId) {
      var selectedUsers, user;
      selectedUsers = this.get('selectedUsers');
      user = this.get('model').findBy('id', parseInt(userId));
      if (!selectedUsers.contains(user)) {
        return selectedUsers.pushObject(user);
      }
    },
    addAllUsers: function() {
      return this.get('selectedUsers').pushObjects(this.get('remainingUsers'));
    },
    removeUser: function(user) {
      return this.get('selectedUsers').removeObject(user);
    },
    removeAllUsers: function() {
      return this.get('selectedUsers').clear();
    }
  }

});
