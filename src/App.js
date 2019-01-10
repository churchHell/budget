import React, { Component } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const DateButton = styled.button`
  color: white;
  background: black;
  border: none;
  margin: 10px;
  padding: 10px;
`;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: moment()
    }
  }
  handleSubDay = () => { this.setState({date: this.state.date.subtract(1, 'day')}); };
  handleAddDay = () => { this.setState({date: this.state.date.add(1, 'day')}); };
  render() {
    const {date} = this.state;
    return (
      <section>
        <header>
          <h1>Реактивный бюджет</h1>
          <div>
            <p>{date.format('DD.MM.YYYY')}</p>
            <DateButton onClick={this.handleSubDay}>-</DateButton>
            <DateButton onClick={this.handleAddDay}>+</DateButton>
          </div>
        </header>
      </section>
    );
  }
}

export default App;
