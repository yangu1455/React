import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Button = ({ color, backgroundColor, label, ...props }) => {
  return (
    <DefaultButton $color={ color } $backgroundColor={ backgroundColor } {...props}>
      {label}
    </DefaultButton>
  );
};

const DefaultButton = styled.button`
  color: ${(props) => (props.$color ? props.$color : 'white') };
  background-color: ${(props) => (props.$backgroundColor ? props.$backgroundColor : '#fd9d9d') };
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;  
  display: inline-block;
  line-height: 1;
`;

Button.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: null,
  backgroundColor: null,
  onClick: undefined,
};
