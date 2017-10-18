import React, { Component } from 'react';
import './App.css';
import { database } from './firebase'

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: null,
      newData: ''
    }

    this.dataRef = null;
  }

  componentDidMount() {
    this.dataRef = database.ref('/hello/tinkering/with/Firebase/And/REACT/')

    this.dataRef.on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      });
    })
  }

  handleSubmit(e){
     e.preventDefault()
          
     this.dataRef.push(this.state.newData)
  }

 
  handleChange(e) {
    const newData = e.target.value
    this.setState({
      newData
    });
  }



  render() {
    return (
      <div>
          {JSON.stringify(this.state.data, null, 2 )}

          <form className="App-Form" onSubmit={e => this.handleSubmit(e)}> 
              <input type="text"
                      onChange={e => this.handleChange(e)}
                      value={this.state.newData}
                     />
              <input type="submit"/>
          </form> 
      </div>
    );
  }
}

export default App;
