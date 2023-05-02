import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import './ContactList.css';

const ContactList = ({ contacts, deleteContactOn }) => {
  return (
    <ul>
      {contacts.map((contact) => (<ContactItem contact={contact} deleteContactOn={deleteContactOn}/>))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContactOn: PropTypes.func.isRequired,
};

export default ContactList;
