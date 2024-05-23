const renderHTML = (results) => {
  let html = `
    <html>
    <head></head>
    <body>
      <h1>Following are the titles of given websites:</h1>
      <ul>`;
  results.forEach((result) => {
    html += `<li>${result.address} - "${result.title}"</li>`;
  });
  html += `</ul></body></html>`;
  return html;
};

module.exports = renderHTML;
