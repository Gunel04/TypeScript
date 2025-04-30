var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(id, name, surname, age) {
        this.iid = id;
        this.iname = name;
        this.isurname = surname;
        this.iage = age;
    }
    Student.prototype.studentInfo = function () {
        console.log("".concat(this.iname, " ").concat(this.isurname, " is ").concat(this.iage, " years old."));
    };
    return Student;
}());
var student1 = new Student(1, "Gunel", "Alxasova", 20);
student1.studentInfo();
var Profession = /** @class */ (function (_super) {
    __extends(Profession, _super);
    function Profession(id, name, surname, age, profession) {
        var _this = _super.call(this, id, name, surname, age) || this;
        _this.iprofession = profession;
        return _this;
    }
    Profession.prototype.professionInfo = function () {
        console.log("".concat(this.iname, " ").concat(this.isurname, " is ").concat(this.iprofession));
    };
    return Profession;
}(Student));
var profession1 = new Profession(1, "Gunel", "Alxasova", 20, "Developer.");
profession1.professionInfo();
