import React, { useState } from 'react';
import { Filter } from './filter/Filter';
import ContactsItem from './contactsItem/ContactsItem';
import { useFetchPhonesQuery } from '../../redux/phoneBook/phoneBook';

export const ContactsList = () => {
  const [state, setstate] = useState('');
  const { data: contacts, isFetching } = useFetchPhonesQuery();

  const onChange = e => {
    setstate(e.target.value);
  };

  return (
    <>
      <Filter contacts={contacts} value={state} onChange={onChange} />
      {isFetching && <p>Loading....</p>}
      <ul>
        {contacts &&
          contacts.map(contact => {
            const condition = contact.name
              .toLowerCase()
              .includes(state.toLowerCase());

            if (condition) {
              return <ContactsItem key={contact.id} contact={contact} />;
            }
            return null;
          })}
      </ul>
    </>
  );
};
