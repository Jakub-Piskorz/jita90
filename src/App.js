import './App.css';

function App() {
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
    const myHeader = new Headers();
    fetch('https://evepraisal.com/appraisal/structured.json', {
      method: 'POST',
      mode: 'no-cors',
      body: body,
      headers: myHeader,
    })
      .then((res) => (res.ok ? (res) => res.json() : console.error(res)))
      .catch((err) => console.error(err));
    // .then((data) => console.log(data));
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Evepraisal, but 90% Jita buy price.</h1>
        <form id="request">
          <textarea />
          <button
            onClick={(e) => {
              e.preventDefault();
              const request = handleText(
                document.querySelector('textarea').value
              );
              eveFetch(request);
            }}
          >
            Send
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
