export default function bindingThis() {
  const person = {
    name: "Ariel",
    getPersonObject() {
      console.log(this);
    }
  };

  person.getPersonObject();
  console.log(person.getPersonObject);

  const x = person.getPersonObject;
  console.log(x);
  x();
  const getPersonObject = person.getPersonObject.bind(person);
  getPersonObject();
}
