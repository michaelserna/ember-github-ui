import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let orgId = Ember.get(this.modelFor('org'), 'login');
    let repoId = Ember.get(this.modelFor('org.repo'), 'name');
    return $.get(`https://api.github.com/repos/${orgId}/${repoId}/issues?access_token=1b4c5fd1b62f028bcf54ecc368f8f75a2c21f7b7`).then(rawIssues => {
      return rawIssues.map(rawIssue => {
        rawIssue.oldId = rawIssue.id;
        rawIssue.id = rawIssue.name;
        return rawIssue;
      });
    });
  }
});
