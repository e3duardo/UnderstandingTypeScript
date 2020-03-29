class Department {
  //private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department) {
    // this.id = 2;
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

class AccountingDepartment extends Department {
  private reports: string[] = [];

  constructor(id: string) {
    super(id, "Accounting");
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment("D1");

accounting.addEmployee("Eduardo");
accounting.addEmployee("Jaqueline");
accounting.addEmployee("Max");
accounting.addReport("Montly salary");

accounting.describe();
accounting.printEmployeeInformation();
accounting.printReports();

const it = new ITDepartment("D2", ["Eduardo Santos"]);
it.describe();
console.log(it);
