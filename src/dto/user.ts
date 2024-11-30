import Address from "./address";

type User = {
  id: Number;
  password: String;
  name: String;
  phone: String;
  address: Address;
  role: "CUSTOMER" | "SELLER" | "LOGISTICS" | "DRIVER";
};

export default User;
