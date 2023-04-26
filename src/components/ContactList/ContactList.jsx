import React from 'react';
import PropTypes from 'prop-types';
import { Ul, Li } from './ContactList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ visibleContacts, onDeleteContact }) => {
  return (
    <Ul>
      {visibleContacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <Li key={id}>
            <ContactItem
              id={id}
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
            />
          </Li>
        );
      })}
    </Ul>
  );
};

ContactList.protoTypes = {
  visibleContacts: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
    })
  ),
};
