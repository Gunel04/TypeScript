class Student {
    public iid:number;
    protected iname:string;
    protected isurname:string;
    public iage:number;

    constructor(id:number, name:string, surname:string, age:number){
        this.iid = id;
        this.iname = name;
        this.isurname = surname;
        this.iage = age;
    }

    public studentInfo(){
        console.log(`${this.iname} ${this.isurname} is ${this.iage} years old.`);
   
    }
}

const student1 = new Student(1, "Gunel", "Alxasova", 20);
student1.studentInfo();


class Profession extends Student {
    public iprofession:string;
    constructor(id:number, name:string, surname:string, age:number, profession:string){
        super(id, name, surname, age);
        this.iprofession = profession;
    }
    public professionInfo(){
        console.log(`${this.iname} ${this.isurname} is ${this.iprofession}`);
        
    }
}

const profession1 = new Profession(1, "Gunel", "Alxasova", 20, "Developer.");
profession1.professionInfo();
