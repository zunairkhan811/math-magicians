import React from 'react';
import PropTypes from 'prop-types';

export default function Result({ result }) {
  return (
    <div className="result">
      <p>{result}</p>
    </div>
  );
}
Result.defaultProps = {
  result: 0,
};
Result.propTypes = {
  result: PropTypes.string,
};
