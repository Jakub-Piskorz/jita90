// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const axios = require('axios');
const querystring = require('querystring');

const handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  try {
    const response = await axios.post(
      'https://evepraisal.com/appraisal/structured.json',
      event.body
    );
    const data = await response.data;
    return {
      statusCode: response.status,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
