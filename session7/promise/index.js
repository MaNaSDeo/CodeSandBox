const team = [
  {
    id: "anna",
    fullName: "Anna Kendrick",
    jobTitle: "Front-end Ninja"
  },
  {
    id: "harry",
    fullName: "Harry Fawn",
    jobTitle: "Illustrator"
  },
  {
    id: "sofia",
    fullName: "Sofia Sultan",
    jobTitle: "Backend Engineer"
  },
  {
    id: "manas",
    fullName: "Manas Kumar",
    jobTitle: "Noob Engineer"
  }
];

const getDataRow = (dataObj) => {
  const tableRow = document.createElement("tr");
  const tableData = `
  <td>${dataObj.id}</td>
  <td>${dataObj.fullName}</td>
  <td>${dataObj.jobTitle}</td>
  `;
  tableRow.innerHTML = tableData;
  return tableRow;
};

const addDataToTable = (data) => {
  const tableData = document.getElementById("table-data");
  data.forEach((item) => {
    const row = getDataRow(item);
    tableData.appendChild(row);
  });
};

// console.log(document.body);

//ADD YOUR CODE BELOW

//TODO: Create a promise to resolve `team`
const myPromise = new Promise((resolve, reject) => {
  try {
    resolve(team);
  } catch (error) {
    return error;
  }
});

//TODO: Consume the promise and use addDataToTable(data)
//Function to add the data value resolved to table.

myPromise
  .then((data) => {
    addDataToTable(data);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
