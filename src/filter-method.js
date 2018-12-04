export default function filterMethod() {
  const jobsArray = [
    { id: 1, isActive: true },
    { id: 2, isActive: false },
    { id: 3, isActive: true },
    { id: 4, isActive: false }
  ];

  const activesJobsArray = jobsArray.filter(function(job) {
    return job.isActive;
  });

  const activesJobsArray2 = jobsArray.filter(job => job.isActive);

  console.log(activesJobsArray);
  console.log(activesJobsArray2);

  const color = ["red", "blue", "green"];

  let items = color.map(function(color) {
    return "<li>" + color + "</li>";
  });
  console.log(items);

  items = color.map(color => "<li>" + color + "</li>");
  console.log(items);

  items = color.map(color => `<li>${color}</li>`);
  console.log(items);
}
