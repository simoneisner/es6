describe("getters and setters", function(){
	
	it("can have getters and setters", function(){
	
			
			class Person{
				constructor(name){
					this._name = name;
				}
			}

		
		
			class Employee extends Person {
				
				constructor(name){
					this._name = name;
				}
				
				doWork(){
					return "complete!";
				}

				get name(){
					return this._name.toUpperCase();
				}

				set name(newValue){
					if(newValue){

					}
					this._name = newValue;
				}
			}
			
			let e1 = new Employee("Scott");

			expect(e1.name).toBe("SCOTT");

			e1.name = "Chris";
			expect(e1.name).toBe("CHRIS");
		
		
		
		});
	
	});