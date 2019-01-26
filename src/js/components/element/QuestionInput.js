import PropTypes from 'prop-types';
import React, { Component } from "react";
import ReactDOM from "react-dom";

class QuestionInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          [this.props.name]: props.content
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value});
    console.log(this.state)
  }

  render() {
    return (
      <div className="question-group">
        <label className="question-lable">{this.props.title}</label>
        <input
          className='question-input'
          name={this.props.name}
          type={this.props.inputType}
          value={this.state.content}
          onChange={this.handleChange} />
      </div>
    );
  }
}


QuestionInput.propTypes = {  
  
  title: PropTypes.string.isRequired,
  controlFunc: PropTypes.func.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  inputType: PropTypes.oneOf(['text', 'number']),
  
};

export default QuestionInput;  