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

  //others contents

  //readonly properties
  //get and setters
  //static methods
  //static properties
  //abstract classes with abstract method modifier
  //singlethon pattern with private constructor and static method
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private reports: string[] = [];

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  constructor(id: string) {
    super(id, "Accounting");
    this.lastReport = "";
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment("D1");

accounting.addEmployee("Eduardo");
accounting.addEmployee("Jaqueline");
accounting.addEmployee("Max");

//accounting.mostRecentReport;

accounting.addReport("Montly Salary");
accounting.addReport("Anual Balance");

accounting.describe();
accounting.printEmployeeInformation();
accounting.printReports();
console.log(accounting.mostRecentReport);

const it = new ITDepartment("D2", ["Eduardo Santos"]);
it.describe();
console.log(it);
