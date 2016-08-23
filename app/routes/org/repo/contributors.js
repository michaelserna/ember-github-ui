import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let repoId = Ember.get(this.modelFor('org.repo'), 'name');
    let orgId = Ember.get(this.modelFor('org'), 'login');
    return $.get(`https://api.github.com/repos/${orgId}/${repoId}/contributors?access_token=1b4c5fd1b62f028bcf54ecc368f8f75a2c21f7b7`).then(rawContributors => {
      return rawContributors.map(rawContributor => {
        rawContributor.oldId = rawContributor.id;
        rawContributor.id = rawContributor.name;
        return rawContributor;
      });
    });
  }
});
