import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.github.com',

  urlForQueryRecord(query, modelName) {
    switch(modelName) {
      case 'repo':
        return `https://api.github.com/repos/${query.orgId}/${query.repoId}?access_token=1b4c5fd1b62f028bcf54ecc368f8f75a2c21f7b7`;
      default:
        return this._super(...arguments);
    }
  },

  urlForQuery (query, modelName) {
    switch(modelName) {
      case 'repo':
        return `${this.get('host')}/orgs/${query.orgId}/repos`;
      default:
        return this._super(...arguments);
    }
  }

});
