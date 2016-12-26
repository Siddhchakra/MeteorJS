import '/imports/pages/login.html'
import '/imports/pages/emailverified.html'

Router.route('/', {
  template: 'signup'
});

Router.route('/verify/:token', {
  template: 'email-verified'
});


Template.signup.events({
  'click .sign-up'(event) {
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();

    Meteor.call("createNewUser", email, password, function (err, res) {
      alert(err);
    });
  }
});
