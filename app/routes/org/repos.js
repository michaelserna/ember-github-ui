import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let orgId = Ember.get(this.modelFor('org'), 'login');
    return $.get(`https://api.github.com/orgs/${orgId}/repos?access_token=1b4c5fd1b62f028bcf54ecc368f8f75a2c21f7b7`).then(rawRepos => {
      return rawRepos.map(rawRepo => {
        rawRepo.oldId = rawRepo.id;
        rawRepo.id = rawRepo.name;
        return rawRepo;
      });
    });

  }
});
