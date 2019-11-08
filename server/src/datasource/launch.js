const { RESTDataSource } = require('apollo-datasource-rest');

class LaunchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.stackexchange.com/2.2/';
  }

  async getAllQuestionsJs() {
    const response = await this.get('questions?order=asc&sort=activity&tagged=javascript;js&site=stackoverflow');
    const {items} = response;
    return items;
  }

  async getAllQuestionsByTag(tag) {
    const response = await this.get(`questions?order=asc&sort=activity&tagged=${tag}&site=stackoverflow`);
    const {items} = response;
    return items;
  }

}

module.exports = LaunchAPI;