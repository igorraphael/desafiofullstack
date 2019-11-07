import React from 'react';
import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1 className="h1title">Desafio FullStack</h1>
        <br/>
        <div className="container box">
          <span style={{fontSize: 22, fontWeight: "400",fontStyle: 'italic', color: 'grey'}}>Buscar na API</span>
          <form style={{marginTop: 20}}>
            <div className="flex">
              <div className="flex-item-1">
                  <label className="label">Tag</label>
                  <input type="text" value="" className="" />
              </div>
              <div className="flex-item-1">
                  <label className="label">Limit</label>
                  <input type="text" value="" className="" />
              </div>
              <div className="flex-item-1">
                <label className="label">Score</label>
                <input type="text" value="" className="" />
              </div>
              <div className="flex-item-1">
                <label className="label">Sort</label>
                <input type="text" value="" className="" />
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
          <p className="title-result">Resultados encontrados</p>
          {/* container question */}
          <a href="#" target="_blank" className="anchor">
            <div className="container-result flex">
              <div className="viewsInfo">
                  <span>0</span>
                  <span className="span-info" style={{marginBottom: 25}}>votes</span>
                  <span>0</span>
                  <span className="span-info">answers</span>
                <span className="span-views"> 3 views</span>
              </div>
              {/* card questions */}
              <div className="view">
                <h3 className="title-question">This is title of question stackoverflow lorem asdlkasdoasdo lrorem iupasidjasd lkjaskdlj asldkj asdlkj</h3>
                  <div style={{flexDirection: 'row'}}>
                    <span className="tags">
                      javascript
                    </span>
                    <span className="tags">
                      php
                    </span>
                  </div>
                  <div className="flex rowReverse">
                    <div className="user-info">
                      <p style={{fontSize: 12, margin: 1}}>Created by</p>
                      <p style={{fontSize: 10, margin: 0, color: '#39739d'}}>Igor Raphael</p>
                      <img src="https://graph.facebook.com/2423246037798924/picture?type=large" alt="" width="64" height="64" style={{marginRight: 2}}/>
                    </div>
                  </div>
              </div>
              {/* card questions */}
            </div>
          </a>
          {/* container question */}
          {/* container question */}
          <div className="container-result flex">
            <div className="viewsInfo">
                <span>0</span>
                <span className="span-info" style={{marginBottom: 25}}>votes</span>
                <span>0</span>
                <span className="span-info">answers</span>
               <span className="span-views"> 3 views</span>
            </div>
            {/* card questions */}
            <div className="view">
              <h3 className="title-question">This is title of question stackoverflow lorem asdlkasdoasdo lrorem iupasidjasd lkjaskdlj asldkj asdlkj</h3>
                <div style={{flexDirection: 'row'}}>
                  <span className="tags">
                    javascript
                  </span>
                  <span className="tags">
                    php
                  </span>
                </div>
                <div className="flex rowReverse">
                  <div className="user-info">
                    <p style={{fontSize: 12, margin: 1}}>Created by</p>
                    <p style={{fontSize: 10, margin: 0, color: '#39739d'}}>Igor Raphael</p>
                    <img src="https://graph.facebook.com/2423246037798924/picture?type=large" alt="" width="64" height="64" style={{marginRight: 2}}/>
                  </div>
                </div>
            </div>
            {/* card questions */}
          </div>
          {/* container question */}
        </div>
      </div>
      
    );
  }
}
