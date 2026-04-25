const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    Hello from Azure Web App via DevOps CI/CD!<br/>
    Files (server.js, package.json, azure-pipelines.yml) created in Git Local.<br/>
    Pushed these local files to GitHub.<br/>
    Then pushed GitHub repo to Azure DevOps repo.<br/>
    Finally, using DevOps CI/CD, created Web App in Azure App Service.
  `);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
