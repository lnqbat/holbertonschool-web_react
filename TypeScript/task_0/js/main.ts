interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alice",
  lastName: "Durand",
  age: 22,
  location: "Paris"
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Martin",
  age: 24,
  location: "Lyon"
};

const studentsList: Student[] = [student1, student2];

function renderTable(list: Student[]): void {
  const table = document.createElement("table");
  const header = document.createElement("tr");

  const h1 = document.createElement("th");
  h1.textContent = "First Name";
  const h2 = document.createElement("th");
  h2.textContent = "Location";

  header.append(h1, h2);
  table.appendChild(header);

  list.forEach((student) => {
    const row = document.createElement("tr");
    const fn = document.createElement("td");
    fn.textContent = student.firstName;
    const loc = document.createElement("td");
    loc.textContent = student.location;
    row.append(fn, loc);
    table.appendChild(row);
  });

  document.body.appendChild(table);
}

renderTable(studentsList);
