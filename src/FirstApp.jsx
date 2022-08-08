import React from 'react';
import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name, }) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  name: 'Jhorman Orozco',
  subTitle: 'No hay subtitulo',
  title: 'No hay titulo',
};