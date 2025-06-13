let address = {
  street: "a",
  city: "b",
  zipCode: "c",
};

function showAddress(address) {
  for (let key in address) {
    console.log(key + "-->" + address[key]);
  }
}
function createAddress(street, city, zipcode) {
  return {
    street,
    city,
    zipcode,
  };
}
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

function areSame(address1, address2) {
  return address1 === address2;
}
let address1 = new Address("a", "b", "c");
let address2 = new Address("p", "q", "r");
let address3 = new Address("x", "y", "z");
showAddress(address);
newAddress = createAddress("x", "y", "z");
showAddress(newAddress);
console.log(address1);
console.log(address2);
console.log(address3);
