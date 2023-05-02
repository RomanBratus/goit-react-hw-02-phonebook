import React from 'react';
import PropTypes from 'prop-types';
import './ContactItem.css';

const ContactItem = ({ contact, onDeleteContact }) => {
  const { name, number, id } = contact
  return (
    <li className="contact-item">
      {name} : <span>{number}</span>
      <button
        className="delete-button"
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func,
};

export default ContactItem;
