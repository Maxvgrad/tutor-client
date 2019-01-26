import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

class FormEgeMathProf extends React.Component {
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
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state);
    const formState = this.state;

    const instance = axios.create({
        baseURL: 'https://some-domain.com/api/',
        timeout: 1000,
        headers: {'Access-Control-Allow-Origin': '*'}
    });

    instance.put('http://localhost:8099/api/v3/tutor/examination/assessment/ege/math/prof', {
        id: 1,
        examination_form_id: 1,
        form: this.formState
    }).then(res => console.log(res.data));
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <lable>b1: <input name="b1" type="number" onChange={this.handleChange} /></lable><br/>
        <lable>b2: <input name="b2" type="number" onChange={this.handleChange} /></lable><br/>
        <lable>b3: <input name="b3" type="number" onChange={this.handleChange} /></lable><br/>
        <lable>b4: <input name="b4" type="number" onChange={this.handleChange} /></lable><br/>
        <lable>b5: <input name="b5" type="number" onChange={this.handleChange} /></lable><br/>
        <lable>b6: <input name="b6" type="number" onChange={this.handleChange} /></lable><br/>
        <lable>b7: <input name="b7" type="number" onChange={this.handleChange} /></lable><br/>
        <lable>b8: <input name="b8" type="number" onChange={this.handleChange} /></lable><br/>
        <lable>b9: <input name="b9" type="number" onChange={this.handleChange} /></lable><br/>
        <lable>b10: <input name="b10" type="number" onChange={this.handleChange} /></lable><br/>
        <lable>b11: <input name="b11" type="number" onChange={this.handleChange} /></lable><br/>
        <lable>b12: <input name="b12" type="number" onChange={this.handleChange} /></lable><br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
};

export default FormEgeMathProf;