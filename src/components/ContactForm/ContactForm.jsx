import React, { Component } from "react";
import styles from "./ContactForm.module.css";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleInputName = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleInputNumber = e => {
    this.setState({
      number: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddContact({ ...this.state });

    this.setState({
      name: "",
      number: ""
    });

    // alert("Name and phone number were saved to Your contacts");
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.contactForm} onSubmit={this.handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          className={styles.contactInput}
          name="name"
          value={name}
          onChange={this.handleInputName}
        />
        <p>Number</p>
        <input
          type="tel"
          className={styles.contactInput}
          placeholder="ex. 111-11-11"
          name="number"
          value={number}
          onChange={this.handleInputNumber}
        />
        <input type="submit" className={styles.addButton} value="Add contact" />
      </form>
    );
  }
}
