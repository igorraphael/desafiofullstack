const { RESTDataSource } = require('apollo-datasource-rest');

class LaunchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.stackexchange.com/2.2/';
  }

  //para teste
  async getAllQuestionsJs() {
    const response = await this.get('questions?order=asc&sort=activity&tagged=javascript;js&site=stackoverflow');
    const {items} = response;
    return items;
  }

  async getAll({tag, limit, score, sort}) {
    let url = ``;
    if(tag.length === 0){//tag javascript
      if(score.toString() > 0){
        url = `questions?pagesize=${limit}&order=${sort}&sort=votes&min=${score}&tagged=javascript;js&site=stackoverflow`;
      }else{
        url = `questions?pagesize=${limit}&order=${sort}&tagged=javascript;js&site=stackoverflow`;
      }
    }else{//other tag
      if(score.toString() > 0){
        url = `questions?pagesize=${limit}&order=${sort}&sort=votes&min=${score}&tagged=${tag}&site=stackoverflow`;
      }else{
        url = `questions?pagesize=${limit}&order=${sort}&tagged=${tag}&site=stackoverflow`;
      }
    }
    const response = await this.get(url);
    const {items} = response;
    return items;
  }

}

module.exports = LaunchAPI;