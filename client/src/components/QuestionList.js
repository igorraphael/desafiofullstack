import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


class QuestionList extends Component {
  renderQuestionsList = () => (
    <ul>
      { this.props.data.questions.map((question, index) => (
        <li key={index}> {question.title} </li>
      ) ) }
    </ul>
  );


  render() {
    const { data } = this.props;
    
    return (
      <Fragment>
          { data.loading 
            ? <p>Carregando...</p>
            : this.renderQuestionsList()}
      </Fragment>
    );
  }
}

const getAll = gql `
query {
    questions{
        title
        score
        link
        view_count
        tags
        owner{
        display_name 
        profile_image
        }
    }
}    
`;

export default graphql(getAll, {name: 'data'} )(QuestionList);


