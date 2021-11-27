// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const axios = require('axios');

const handler = async (event) => {
  try {
    const response = await axios.post(
      'https://evepraisal.com/appraisal/structured.json',
      {
        market_name: 'jita',
        items: [{ name: 'Veldspar' }],
      }
    );
    const data = await response.data;
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.log(error);
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
