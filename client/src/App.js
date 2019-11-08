import React, { Component } from 'react';
import './App.css';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './service/apollo';
import Question from './components/Question';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: '',
      limit: '10',
      score: '0',
      sort: 'asc',
      submitted: false,
    };
  }

  //changes state submitted false.
  handleSubmitted = () => {
    this.setState({submitted: false} );
  }

  //handle generict for inputs
  handleChange = (event) =>  {
    let changeState = {};
    changeState[event.target.name] = event.target.value;
    this.setState(changeState,() => this.handleSubmitted());
  }
  
  //submit form
  submitForm = (event) => {
    event.preventDefault();
    this.setState({ submitted: true});
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
                    <input type="number" value={this.state.limit} pattern="[0-9]*" onChange={this.handleChange.bind(this)} name="limit" />
                    <p style={{fontSize: 10}}>* número de resultados</p>
                </div>
                <div className="flex-item-1">
                  <label className="label">Score</label>
                  <input type="number" value={this.state.score} pattern="[0-9]*" onChange={this.handleChange.bind(this)} name="score"/>
                </div>
                <div className="flex-item-1">
                  <label className="label">Sort</label>
                  <input type="text" value={this.state.sort} onChange={this.handleChange.bind(this)} name="sort"/>
                  <p style={{fontSize: 10}}>* desc ou asc</p>
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
            {this.state.submitted && <Question client={this.state}/> }
          </div>

        </div>
      </ApolloProvider>       
    );
  }
//  
}
