import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  process.env.MAIL_URL = "smtp://postmaster@sandbox66e409414c57457a89c761371c92837d.mailgun.org:326c4ad217e81eb81e2e1abccfa603a2@smtp.mailgun.org:587";

  Accounts.config({
    sendVerificationEmail: true
  });

  Accounts.emailTemplates = {
    from: 'Administrator <user@example.com>',
    siteName: 'YourSite',
    verifyEmail: {
      subject: function (user) {
        return 'Verification email from Example.com';
      },
      text: function (user, url) {
        return 'Hi,\n' +
          'Please open the link below to verify your account on Example.com:\n' + url.replace("/#/", "/");
      }
    }
  };
});

Meteor.methods({
  createNewUser(email, password) {
    Accounts.createUser({
      email: email,
      password: password
    });

    //Accounts.sendVerificationEmail(Meteor.userId);
    Meteor.userId
  }
});


