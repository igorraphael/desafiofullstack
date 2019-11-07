const { RESTDataSource } = require('apollo-datasource-rest');

class LaunchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.stackexchange.com/2.2/';
  }

  async getAllQuestions() {
    const response = await this.get('questions?tag=JavaScript&sort=activity&site=stackoverflow');
    const {items} = response;
    return items;
  }

}

module.exports = LaunchAPI;