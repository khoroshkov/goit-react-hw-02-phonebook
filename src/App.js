import React, { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import styles from "./components/ContactForm/ContactForm.module.css";

const uuidv1 = require("uuid/v1");

const filterContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    filter: ""
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  addContact = contact => {
    if (
      this.state.contacts.map(contact => contact.name).includes(contact.name)
    ) {
      alert(`${contact.name} is already in contacts`);
    } else {
      const contactToAdd = {
        ...contact,
        id: uuidv1()
      };

      this.setState(state => ({
        contacts: [...state.contacts, contactToAdd]
      }));
    }
  };

  deleteContact = e => {
    const id = e.target.value;
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id)
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = filterContacts(contacts, filter);

    return (
      <div className={styles.contactsWrapper}>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter
          contacts={contacts}
          value={filter}
          onChangeFilter={this.changeFilter}
        />
        <ContactList
          id={contacts.id}
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
