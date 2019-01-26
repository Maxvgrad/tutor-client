import React, { Component } from "react";
import ReactDOM from "react-dom";
import QuestionInput from "../element/QuestionInput";
import axios from 'axios';

class EgeMathProfForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    b1: '',
    b2: '',
    b3: '',
    b4: '',
    b5: '',
    b6: '',
    b7: '',
    b8: '',
    b9: '',
    b10: '',
    b11: '',
    b12: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state);
    const form = this.state;

    const instance = axios.create({
        baseURL: 'https://some-domain.com/api/',
        timeout: 1000,
        headers: {'Access-Control-Allow-Origin': '*'}
    });

    instance.put('http://localhost:8099/api/v3/tutor/examination/assessment/ege/math/prof', form)
      .then(res => console.log(res.data));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <QuestionInput title={'b1'} name={'b1'} inputType={'text'} content={this.state.b1} />
        <QuestionInput title={'b2'} name={'b2'} inputType={'text'} content={this.state.b2} />
        <QuestionInput title={'b3'} name={'b3'} inputType={'text'} content={this.state.b3} />
        <QuestionInput title={'b4'} name={'b4'} inputType={'text'} content={this.state.b4} />
        <QuestionInput title={'b5'} name={'b5'} inputType={'text'} content={this.state.b5} />
        <QuestionInput title={'b6'} name={'b6'} inputType={'text'} content={this.state.b6} />
        <QuestionInput title={'b7'} name={'b7'} inputType={'text'} content={this.state.b7} />
        <QuestionInput title={'b8'} name={'b8'} inputType={'text'} content={this.state.b8} />
        <QuestionInput title={'b9'} name={'b9'} inputType={'text'} content={this.state.b9} />
        <QuestionInput title={'b10'} name={'b10'} inputType={'text'} content={this.state.b10} />
        <QuestionInput title={'b11'} name={'b11'} inputType={'text'} content={this.state.b11} />
        <QuestionInput title={'b12'} name={'b12'} inputType={'text'} content={this.state.b12} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
};

export default EgeMathProfForm;