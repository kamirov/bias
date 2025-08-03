const fs = require("fs");
const path = require("path");

// Read the built index.html file
const indexPath = path.join(__dirname, "dist", "index.html");
let indexHtml = "";

try {
  indexHtml = fs.readFileSync(indexPath, "utf8");
} catch (error) {
  console.error("Error reading index.html:", error);
  indexHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Bias UI Web</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>
      <body>
        <div id="root">
          <h1>Bias UI Web</h1>
          <p>Application is loading...</p>
        </div>
      </body>
    </html>
  `;
}

exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
    body: indexHtml,
  };

  return response;
};
