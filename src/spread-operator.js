export default function spreadOperator() {
  const first = [1, 2, 3];
  const second = [4, 5, 6];

  let combined = first.concat(second);
  console.log(combined);
  combined = [0, ...first, "something", ...second, 7];
  console.log(combined);

  const primero = { name: "ariel" };
  const segundo = { job: "student" };

  combined = { ...primero, ...segundo, location: "sweden" };
  console.log(combined);

  const clone = { ...primero };
  primero.name = "pepe";

  console.log(primero);
  console.log(clone);
}
