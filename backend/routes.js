const router = require('express').Router();
const { Coda } = require('coda-js');
const { docId, tableIds, token } = require('./env');

const coda = new Coda(token);

router.get('/tables/ids', async (req, res) => {
  const doc = await coda.getDoc(docId);
  const tables = await doc.listTables();
  const tableIds = {};
  for (const table of tables) {
    tableIds[table.name] = table.id;
  }
  return res.json(tableIds);
});

router.get('/projects', async (req, res) => {
  const doc = await coda.getDoc(docId);
  const projectsTable = await doc.getTable(tableIds.projects);
  const projectsRows = await projectsTable.listRows({ useColumnNames: true });
  const projects = [];
  for (const projectRow of projectsRows) {
    projects.push(projectRow.values);
  }
  return res.json(projects);
});

router.get('/projects/tech', async (req, res) => {
  const doc = await coda.getDoc(docId);
  const projectsTable = await doc.getTable(tableIds.projects);
  const projectsRows = await projectsTable.listRows({ useColumnNames: true });
  const projects = [];
  for (const projectRow of projectsRows) {
    if (projectRow.values.github) {
      projects.push(projectRow.values);
    }
  }
  return res.json(projects);
});

router.get('/skills', async (req, res) => {
  const doc = await coda.getDoc(docId);
  const skillsTable = await doc.getTable(tableIds.skills);
  const skillsRows = await skillsTable.listRows({ useColumnNames: true });
  const skills = {};
  for (const skillRow of skillsRows) {
    skills[skillRow.values.skill] = skillRow.values;
  }
  return res.json(skills);
});

router.get('/skills/languages', async (req, res) => {
  const doc = await coda.getDoc(docId);
  const skillsTable = await doc.getTable(tableIds.skills);
  const skillsRows = await skillsTable.listRows({ useColumnNames: true });
  const skills = [];
  for (const skillRow of skillsRows) {
    if (skillRow.values.type.includes('languages')) {
      skills.push(skillRow.values.skill);
    }
  }
  return res.json(skills.sort());
});

router.get('/skills/tech', async (req, res) => {
  const doc = await coda.getDoc(docId);
  const skillsTable = await doc.getTable(tableIds.skills);
  const skillsRows = await skillsTable.listRows({ useColumnNames: true });
  const skills = [];
  for (const skillRow of skillsRows) {
    if (skillRow.values.type.includes('technologies')) {
      skills.push(skillRow.values.skill);
    }
  }
  return res.json(skills.sort());
});

router.get('/links', async (req, res) => {
  const doc = await coda.getDoc(docId);
  const linksTable = await doc.getTable(tableIds.links);
  const linksRows = await linksTable.listRows({ useColumnNames: true });
  const links = [];
  for (const linkRow of linksRows) {
    links.push(linkRow.values);
  }
  return res.json(links);
});

router.get('/contact', async (req, res) => {
  const doc = await coda.getDoc(docId);
  const contactTable = await doc.getTable(tableIds.contact);
  const contactDetails = await contactTable.listRows({ useColumnNames: true });
  const contact = {};
  for (const contactDetail of contactDetails) {
    contact[contactDetail.values.key] = contactDetail.values.value;
  }
  return res.json(contact);
});

module.exports = router;
