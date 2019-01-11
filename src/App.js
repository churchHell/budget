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

const Nav = styled.nav`
  display: flex;
`;

const Link = styled.span`
  border-bottom: ${ ({selected}) => (selected ? '2px solid black' : 'none') };
  margin: 10px;
  cursor: pointer;
`;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: moment(),
      navSelected: 'expanse'
    }
  }
  handleSubDay = () => { this.setState({date: this.state.date.subtract(1, 'day')}); };
  handleAddDay = () => { this.setState({date: this.state.date.add(1, 'day')}); };
  handleNavClick = event => { this.setState({navSelected: event.target.getAttribute('name')}); };
  render() {
    const {date, navSelected} = this.state;
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
        <main>
          <Nav>
            <Link name="expanse" onClick={this.handleNavClick} selected={navSelected=="expanse"}>Расходы</Link>
            <Link name="incomes" onClick={this.handleNavClick} selected={navSelected=="incomes"}>Доходы</Link>
          </Nav>
          { navSelected == 'expanse' ? <Expanse /> : <Incomes /> }
        </main>
      </section>
    );
  }
}

export default App;
