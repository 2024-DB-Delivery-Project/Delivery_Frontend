import Address from "../dto/address";
import User from "../dto/user";

const address: Address = {
  city: "Seoul",
  town: "Gangnam",
  village: "Sinsa",
};

const customer: User = {
  id: 1,
  name: "customer",
  password: "customer",
  phone: "010-1234-5678",
  address: address,
  role: "CUSTOMER",
};

const seller: User = {
  id: 2,
  name: "seller",
  password: "seller",
  phone: "010-1234-5678",
  address: address,
  role: "SELLER",
};

const logistics: User = {
  id: 3,
  name: "logistics",
  password: "logistics",
  phone: "010-1234-5678",
  address: address,
  role: "LOGISTICS",
};

const driver: User = {
  id: 4,
  name: "driver",
  password: "driver",
  phone: "010-1234-5678",
  address: address,
  role: "DRIVER",
};

export { customer, seller, logistics, driver };
