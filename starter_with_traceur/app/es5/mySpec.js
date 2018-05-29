"use strict";
describe("getters and setters", function() {
  it("can have getters and setters", function() {
    var Person = function Person(name) {
      this._name = name;
    };
    ($traceurRuntime.createClass)(Person, {}, {});
    var Employee = function Employee(name) {
      this._name = name;
    };
    ($traceurRuntime.createClass)(Employee, {
      doWork: function() {
        return "complete!";
      },
      get name() {
        return this._name.toUpperCase();
      },
      set name(newValue) {
        if (newValue) {}
        this._name = newValue;
      }
    }, {}, Person);
    var e1 = new Employee("Scott");
    expect(e1.name).toBe("SCOTT");
    e1.name = "Chris";
    expect(e1.name).toBe("CHRIS");
  });
});

//# sourceMappingURL=mySpec.js.map
