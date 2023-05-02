import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactItem from './ContactItem/ContactItem';
import Finder from './Finder/Finder';

const mainStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'left',
  fontSize: 20,
  color: '#3d2f26ed',
  marginLeft: '30px',
};

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  addContact = data => {
    const { contacts } = this.state;
    const isExist =  contacts.find(
      (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
    )

    if (isExist) {
      alert(`${data.name} is already in contacts`)
      return;
    }

    this.setState(prevState => ({
        contacts: [data, ...prevState.contacts],
      }));
  };

  getListContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContact = this.getListContacts();

    return (
      <div style={mainStyle}>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.addContact} />
        <h3>Contacts</h3>
        <Finder filter={filter} onChange={this.changeFilter} />
        <ContactList>
          <ContactItem
            contacts={visibleContact}
            deleteContactOn={this.deleteContact}
          />
        </ContactList>
      </div>
    );
  }
}

export default App;
