import React from 'react';
import PropTypes from 'prop-types';
import { Button, Span } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <Span>{name}: </Span>
      <Span>{number}</Span>
      <Button onClick={() => onDeleteContact(id)}>Delete</Button>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
