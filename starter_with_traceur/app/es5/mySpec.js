"use strict";
describe("super class", function() {
  it("can have a super class", function() {
    var Person = function Person(name) {
      this.name = name;
    };
    ($traceurRuntime.createClass)(Person, {
      get name() {
        return this._name;
      },
      set name(newValue) {
        if (newValue) {
          this._name = newValue;
        }
      }
    }, {});
    var Employee = function Employee() {
      $traceurRuntime.defaultSuperCall(this, $Employee.prototype, arguments);
    };
    var $Employee = Employee;
    ($traceurRuntime.createClass)(Employee, {doWork: function() {
        return (this._name + " is working");
      }}, {}, Person);
    var p1 = new Person("Scott");
    var e1 = new Employee("Christopher");
    expect(p1.name).toBe("Scott");
  });
});

//# sourceMappingURL=mySpec.js.map
