import React from 'react';
import styles from './ContactsItem.module.css';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../../redux/phoneBook/phoneBook';

const ContactsItem = ({ contact }) => {
  const { name, phone, id } = contact;
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <>
      <li className={styles.contact__Item} key={id}>
        <p>
          {name}:{phone}
          <button
            className={styles.contacts__ItemBtn}
            onClick={() => deleteContact(id)}
            disabled={isLoading}
          >
            Delete
          </button>
        </p>
      </li>
    </>
  );
};

ContactsItem.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.bool.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsItem;
