import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    error(jqxhr) {
      if (jqxhr.status === 404) {
        this.intermediateTransitionTo('org.notfound');
      } else {
        return true; // bubble up
      }
    }
  },

  model(params) {
    return $.get(`https://api.github.com/orgs/${params.id}?access_token=1b4c5fd1b62f028bcf54ecc368f8f75a2c21f7b7`).then(rawOrg => {
      // backing up github's numeric ID
      rawOrg.oldId = rawOrg.id;
      // use the name of the repo as our ID
      rawOrg.id = rawOrg.name;
      return rawOrg;
    });
  }
});
