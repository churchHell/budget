import React, {Component} from 'react';
import styled from 'styled-components';

const Input = styled.input``;

export class Expanse extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  handleChangeInput = (event) => { this.setState({[event.target.name]: event.target.value}); };
  handleEnter = () => {  };
  render(){
    const {transaction, category} = this.state;
    return (
      <div>
        <dl>
          <dt>Внести расход:</dt>
          <dd>
            <input name='transaction' onChange={this.handleChangeInput} value={transaction || ''} />
          </dd>
          <dt>Категория:</dt>
          <dd>
            <input name="category" onChange={this.handleChangeInput} value={category || ''} />
          </dd>
        </dl>
        <button onClick={this.handleEnter}>Внести</button>
      </div>
    );
  }
}

export default Expanse;
