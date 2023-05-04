import { useState, useEffect } from 'react';

const Quote = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=humor', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Api-key': 'caQKmJfAffKkic4Ds+HCAg==mQxfwIuFGKHRqdIW',
          },
        });
        const newdata = await response.json();
        setData(newdata);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="quote"><p>Loading ...</p></div>;
  if (error) return <div className="quote"><p>Sorry cannot Load Data!!</p></div>;
  return (
    <>
      <div className="quote">
        <p>
          Quote:
          {' '}
          {data[0].quote}
          <br />
          By:
          {' '}
          {data[0].author}
        </p>
      </div>
    </>
  );
};

export default Quote;
