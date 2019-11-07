module.exports = {
    Query: {
        questions: (_, __, { dataSources }) =>
        dataSources.launchAPI.getAllQuestions(),
    }
  };