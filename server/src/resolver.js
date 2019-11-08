module.exports = {
    Query: {
        questionsDefault: (_, __, { dataSources }) =>
        dataSources.launchAPI.getAllQuestionsJs(),
        questionsByTag: (_, { tag }, { dataSources }) =>
        dataSources.launchAPI.getAllQuestionsByTag(tag),
    }
  };