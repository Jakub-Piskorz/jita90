import './App.css';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('init output');

  const createJsonText = (items) => {
    const _items = items.map((line) => {
      return {
        name: line[0],
        quantity: line.length === 1 ? 1 : Number(line[1]),
      };
    });
    const jsonObject = { market_name: 'jita', items: _items };
    return JSON.stringify(jsonObject);
  };

  const handleText = (text) => {
    const _1 = text;
    const _2 = _1.split(/\n/);
    const _3 = _2.map((line) => line.replace(/\t$/, ''));
    const _4 = _3.map((line) => line.split(/\s(?=\d+$)/));
    const _5 = _4.filter((line) => {
      if (line.length === 2) return true;
      if (line.length === 1) return isNaN(line[0]);
      return false;
    });
    const jsonText = createJsonText(_5);
    return jsonText;
  };

  const eveFetch = (body) => {
    const myHeader = new Headers({ 'User-Agent': '90jita' });

    fetch('http://evepraisal.com/appraisal/structured.json', {
      method: 'POST',
      mode: 'no-cors',
      body: body,
      headers: myHeader,
    })
      .then((res) => (res.ok ? (res) => res.json() : console.error(res)))
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  const klikHandle = async (e) => {
    const response = await fetch('/.netlify/functions/api');
    const data = await response.json();
    console.log(data);

    // setOutput(response);
  };

  return (
    <div className="App">
      <main style={{ marginBottom: '100px' }}>
        <h2>{output}</h2>
        <button onClick={klikHandle}>Test fetch</button>
      </main>
      <header className="App-header">
        <h1>90% Jita buy price.</h1>
        <form id="request">
          <textarea value={input} onChange={(e) => setInput(e.target.value)} />
          <button onClick={eveFetch}>Send</button>
        </form>

        <h2>Contact me: qbekszlachta@gmail.com</h2>
        <h3>Plz allow me on CORS ;-;</h3>
      </header>
    </div>
  );
}

export default App;
