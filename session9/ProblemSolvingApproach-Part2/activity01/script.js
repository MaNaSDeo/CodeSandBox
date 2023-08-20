let names = ["Anil", "Dhoni", "Kohli", "Aaron", "Ajinkya"];
console.log(names);
const namesWithA = names.filter((element) => {
  if (element.charAt(0) === "A") return element;
});
console.log(namesWithA);
