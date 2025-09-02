// utils/storage.js
export const getUsers = () => {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
};

export const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

export const addUser = (username, password) => {
  const users = getUsers();
  // cek biar username tidak duplikat
  const exists = users.find((u) => u.username === username);
  if (exists) return false;
  users.push({ username, password });
  saveUsers(users);
  return true;
};

export const findUser = (username, password) => {
  const users = getUsers();
  return users.find(
    (user) => user.username === username && user.password === password
  );
};

export const updatePassword = (username, newPassword) => {
  const users = getUsers();
  const index = users.findIndex((u) => u.username === username);
  if (index !== -1) {
    users[index].password = newPassword;
    saveUsers(users);
    return true;
  }
  return false;
};

export const deleteUser = (username) => {
  let users = getUsers();
  users = users.filter((u) => u.username !== username);
  saveUsers(users);
};
