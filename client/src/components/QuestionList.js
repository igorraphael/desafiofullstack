import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Spinner from 'react-spinners/PulseLoader';

class QuestionList extends Component {
  renderQuestionsList = () => (
    <div>
      <p className="title-result">Resultados encontrados</p>
      { this.props.data.questions.map((question, index) => (
          <a href={question.link} target="_blank" rel="noopener noreferrer" className="anchor" key={index.toString()}>
            <div className="container-result flex">
              <div className="viewsInfo">
                  <span>{question.score}</span>
                  <span className="span-info" style={{marginBottom: 25}}>votes</span>
                  <span>{question.answer_count}</span>
                  <span className="span-info">answers</span>
                <span className="span-views"> {question.view_count} views</span>
              </div>
              {/* info question */}
              <div className="view">
                <h3 className="title-question">{question.title}</h3>
                  <div style={{flexDirection: 'row'}}>
                    {question.tags.map((tag) => 
                      <span key={tag.toString()} className="tags">{tag}</span>
                     ) }
                  </div>
                  <div className="flex rowReverse">
                    <div className="user-info">
                      <p style={{fontSize: 12, margin: 1}}>Created by</p>
                      <p style={{fontSize: 10, margin: 0, color: '#39739d'}}>{question.owner.display_name}</p>
                      <img src={question.owner.profile_image} alt="" width="64" height="64" style={{marginRight: 2}}/>
                    </div>
                  </div>
              </div>
              {/* info questions */}
            </div>
          </a>
      ) ) }
    </div>
  );

  renderSpinner = () => {
    return(
      <div className="spinner">
          <Spinner 
            sizeUnit={"px"}
            size={20}
            color={'#09d3ac'}
            loading={true}
          />
      </div>
    );
  }


  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <Fragment>
          { data.loading 
            ? this.renderSpinner()
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
        answer_count
    }
}    
`;

export default graphql(getAll, {name: 'data'} )(QuestionList);


