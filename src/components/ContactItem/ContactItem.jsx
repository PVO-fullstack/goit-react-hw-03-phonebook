import React from 'react';
import PropTypes from 'prop-types';
import { Button, Li, Span } from './ContactItem.styled';

export const ContactItem = ({ visibleContacts, onDeleteContact }) => {
  return visibleContacts.map(contact => (
    <Li key={contact.id}>
      <Span>{contact.name}: </Span>
      <Span>{contact.number}</Span>
      <Button onClick={() => onDeleteContact(contact.id)}>Delete</Button>
    </Li>
  ));
};

ContactItem.propTypes = {
  visibleContacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
