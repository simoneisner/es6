describe("super class", function(){
	
it("can have a super class", function(){

		class Person {
			constructor(name){
				this.name = name;
			}
		
			get name(){
				return this._name;
			} 

			set name(newValue){
				if(newValue){
					this._name = newValue;
				}
			}
		
		}

		class Employee extends Person{
			doWork(){
				return `${this._name} is working`;
			}
		}
		
		let p1 = new Person("Scott");
		let e1 = new Employee("Christopher")
		
		expect(p1.name).toBe("Scott");
		//expect(e1.name).toBe("Christopher");
		//expect(e1.doWork()).toBe("Christopher is working");

	
	
	});

});