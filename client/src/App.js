import React, { Component } from 'react';
import './App.css';

import { ApolloProvider } from 'react-apollo';
import apolloClient from './service/apollo';

import Teste from './components/QuestionList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: '',
      limit: '',
      score: '',
      sort:'',
      submitted: false,
    };
  }

  handleChange = (event) =>  {
    let changeState = {};
    changeState[event.target.name] = event.target.value;
    this.setState(changeState);
  }

  submitForm = (event) => {
    event.preventDefault();
    //console.log(this.state);
    this.setState({ submitted: true}, () => {
      //console.log(this.state.submitted)
    });
  }

  render(){
    return (
      <ApolloProvider client={apolloClient}>
        <div className="App">
          <h1 className="h1title">Desafio FullStack</h1>
          <br/>
          <div className="container box">
            <span style={{fontSize: 22, fontWeight: "400",fontStyle: 'italic', color: 'grey'}}>Buscar na API</span>
            <form style={{marginTop: 20}} onSubmit={this.submitForm}>
              <div className="flex">
                <div className="flex-item-1">
                    <label className="label">Tag</label>
                    <input type="text" value={this.state.tag}  onChange={this.handleChange.bind(this)} name="tag" />
                </div>
                <div className="flex-item-1">
                    <label className="label">Limit</label>
                    <input type="text" value={this.state.limit} onChange={this.handleChange.bind(this)} name="limit" />
                </div>
                <div className="flex-item-1">
                  <label className="label">Score</label>
                  <input type="text" value={this.state.score} onChange={this.handleChange.bind(this)} name="score"/>
                </div>
                <div className="flex-item-1">
                  <label className="label">Sort</label>
                  <input type="text" value={this.state.sort} onChange={this.handleChange.bind(this)} name="sort"/>
                </div>
              </div>
              <div className="flex rowReverse">
                <button className="btn">Buscar</button>
              </div>  
              
            </form>

          </div>
          <br/>
          <br/>
          <br/>
         
          <div className="result">
            {this.state.submitted && <Teste/> }
          </div>

        </div>
      </ApolloProvider>       
    );
  }
//  
}
