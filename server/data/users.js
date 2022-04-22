import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    telephone: "0123456789",
    avatar: "./images/user.png",
    isAdmin: true,
  },
  {
    name: "User",
    email: "user@example.com",
    password: bcrypt.hashSync("123456", 10),
    telephone: "0123456789",
    avatar: "./images/user.png",
  },
];

export default users;
