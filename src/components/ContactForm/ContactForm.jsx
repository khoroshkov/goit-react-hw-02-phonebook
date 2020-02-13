import React, { Component } from "react";
import styles from "./ContactForm.module.css";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.number]: e.target.value
    });
  };

  
  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddContact({ ...this.state });

    this.setState({
      name: "",
      number: ""
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.contactForm} onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          className={styles.contactInput}
          name="name"
          value={name}
          onChange={this.handleInput}
        />
        <label>Number</label>
        <input
          type="tel"
          className={styles.contactInput}
          name="number"
          value={number}
          onChange={this.handleInput}
          placeholder="only numbers"
          pattern="^[0-9]*$"
        />
        <input type="submit" className={styles.addButton} value="Add contact" />
      </form>
    );
  }
}
