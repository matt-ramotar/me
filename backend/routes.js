const router = require('express').Router();
const { Coda } = require('coda-js');
const { docId, tableIds, token } = require('./env');

const coda = new Coda(token);

router.get('/projects', async (req, res) => {
  const doc = await coda.getDoc(docId);

  const projectsTable = await doc.getTable(tableIds.projects);
  const projects = await projectsTable.listRows({ useColumnNames: true });
  const response = [];
  for (const project of projects) {
    response.push(project.values);
  }
  return res.json(response);
});

module.exports = router;
