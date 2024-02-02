const express = require("express");
const app = express();
const port = 8000;
const {faker} = require("@faker-js/faker");

const createUser = () => {
  const newUser = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phoneNumber: faker.phone.number(),
    _id: faker.string.uuid()
  };
  return newUser;
};

const createCompany = () => {
  const newCompany = {
    name: faker.company.name(),
    adress: {
      street: faker.location.street(), 
      city: faker.location.city(), 
      state: faker.location.state(), 
      zipCode: faker.location.zipCode(),
      country: faker.location.country(),
    },
    _id: faker.string.uuid()
  };
  return newCompany;
};

const user = createUser();
const company = createCompany();


app.get('/api/users/new', (req, res) => {
  res.json({user});
});

app.get('/api/companies/new', (req, res) => {
  res.json({company});
});

app.get('/api/user/company', (req, res) => {
  res.json({user, company});
});


app.listen(port, () => console.log(`Listening on Port ${port}`));