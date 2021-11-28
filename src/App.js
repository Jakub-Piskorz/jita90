import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState(false);

  const objectToFetchBodyJson = (items) => {
    const _items = items.map((line) => {
      return {
        name: line[0],
        quantity: line.length === 1 ? 1 : Number(line[1]),
      };
    });
    const jsonObject = { market_name: 'jita', items: _items };
    return JSON.stringify(jsonObject);
  };

  const inputTextToFetchBodyJson = (text) => {
    const _1 = text;
    const _2 = _1.split(/\n/);
    const _3 = _2.map((line) => line.replace(/\t$/, ''));
    const _4 = _3.map((line) => line.split(/\s/));
    const _5 = _4.filter((line) => {
      if (line.length === 2) return true;
      if (line.length === 1) return isNaN(line[0]);
      return false;
    });
    const _6 = _5.map((line) => {
      return isNaN(Number(line[1])) ? [line[1], line[0]] : line;
    });
    const jsonText = objectToFetchBodyJson(_6);
    return jsonText;
  };

  const fetchAppraisal = async (e) => {
    e.preventDefault();
    const fetchBody = inputTextToFetchBodyJson(input);
    try {
      const response = await axios.post('/.netlify/functions/api', fetchBody);
      const itemsAreGood =
        response.data.appraisal.items.find((item) => item.typeName === '') ===
        undefined;
      console.log(response.status);
      console.log(response.data);
      if (response.status === 200 && itemsAreGood) {
        const buyPrice = await response.data.appraisal.totals.buy;
        setOutput(buyPrice);
        setError(false);
      } else {
        setOutput('');
        setError(true);
      }
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>90% Jita buy price.</h1>
        <form id="request">
          <textarea value={input} onChange={(e) => setInput(e.target.value)} />
          <button onClick={fetchAppraisal}>Get Price</button>
          {output && (
            <>
              <div className="price">
                Total Jita buy price: <strong>{Math.floor(output)}</strong> ISK
              </div>
              <div className="price">
                Total 90% Jita buy price:{' '}
                <strong>{Math.floor(0.9 * output)}</strong> ISK
              </div>
            </>
          )}
          {error && (
            <div className="error">
              Invalid text. Try writing: <strong>Veldspar 5</strong> and press
              the button again.
            </div>
          )}
        </form>
      </header>
    </div>
  );
}

export default App;
