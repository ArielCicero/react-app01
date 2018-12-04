export default function bracketNotation() {
  const person = {
    name: "Ariel",
    getPersonObject() {
      console.log(this);
    }
  };

  console.log(person.name);

  const targetMember = "name";
  console.log(person[targetMember]);
}
