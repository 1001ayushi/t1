import { v4 as uuidv4 } from "uuid";

export const getuser = (req, res) => {
  console.log(users);
  res.send(users);
};
export const createuser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`User with the name${user.name} added to DB.`);
};
export const finduser = (req, res) => {
  const { id } = req.params;
  const founduser = users.find((user) => user.id == id);
  res.send(founduser);
};

export const deleteuser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with the id ${id} deleted from db.`);
};
export const updateuser = (req, res) => {
  const { id } = req.params;
  const { name, lastname, age } = req.body;
  const user = users.find((user) => user.id == id);
  if (name) {
    user.name = name;
  }
  if (lastname) {
    user.lastname = lastname;
  }
  if (age) {
    user.age = age;
  }
  res.send(`User with id ${id} has been updated.`);
};
