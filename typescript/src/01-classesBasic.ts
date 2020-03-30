function archive() {
  class Department {
    //private readonly id: string;
    // private name: string;
    private employees: string[] = [];

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

  const accounting = new Department("D1", "Accounting");

  accounting.addEmployee("Eduardo");
  accounting.addEmployee("Jaqueline");

  accounting.describe();
  accounting.printEmployeeInformation();

  // accounting.employees;

  // const accountingCopy = { describe: accounting.describe };
  // accountingCopy.describe();

  // const accountingCopy = { name: "Other", describe: accounting.describe };
  // accountingCopy.describe();
}
