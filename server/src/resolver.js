module.exports = {
    Query: {
        allQuestions: (_, {tag, limit, score, sort}, { dataSources }) =>
        dataSources.launchAPI.getAll({tag, limit, score, sort}),
    }
  };