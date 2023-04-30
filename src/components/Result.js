import React from 'react';
import PropTypes from 'prop-types';

export default function Result({ result }) {
  if (!result) return <div className="result"><p>{result}</p></div>;
  return (
    <div className="result">
      <p>
        {result.total}
        {result.operation}
        {result.next}
      </p>
    </div>
  );
}
Result.defaultProps = {
  result: 0,
};
Result.propTypes = {
  result: PropTypes.number,
};
