export default function objectDestructuring() {
  const address = {
    street: "calle",
    city: "ciudad",
    country: "pais"
  };

  const street1 = address.street;
  const city1 = address.city;
  const country1 = address.country;

  const { street, city, country } = address;
  console.log(city);

  const { city: c } = address;
  console.log(c);
}
