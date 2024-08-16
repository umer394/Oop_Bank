var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this.AccountBalance = 100;
    }
    BankAccount.prototype.Debit = function (amount) {
        var statement = "Sorry, you have insufficient balance!";
        if (amount > 0) {
            statement = "The amount you enetered is wrong!";
            if (this.AccountBalance > amount) {
                this.AccountBalance = this.AccountBalance - amount;
                statement = "Transaction sccesfull! New account balance is " + this.AccountBalance;
            }
            else {
                statement = "You don't have enough mmoney to do this transaction";
            }
        }
        return statement;
    };
    BankAccount.prototype.Credit = function (amount) {
        var statement = "Transaction failed1";
        if (amount > 0) {
            this.AccountBalance = this.AccountBalance + amount;
            if (amount > 100) {
                this.AccountBalance = this.AccountBalance - 1;
            }
            statement = "Your Account has been credit successfully";
        }
        return statement;
    };
    return BankAccount;
}());
var Customer = /** @class */ (function () {
    function Customer(fName, lName, Gender, Age, mobileNumber) {
        this.fName = fName;
        this.lName = lName;
        this.Gender = Gender;
        this.Age = Age;
        this.mobileNumber = mobileNumber;
        this.bankAccount = new BankAccount();
    }
    Customer.prototype.customerInfo = function () {
        return "Name: ".concat(this.fName, " ").concat(this.lName, "\nAge: ").concat(this.Age, "\nGender: ").concat(this.Gender, "\nMobile Number: ").concat(this.mobileNumber, "\nAccount Balance: ").concat(this.bankAccount.AccountBalance);
    };
    return Customer;
}());
var customer1 = new Customer("umer", "shahzad", "Male", 22, "03353945855");
var creditResult = customer1.bankAccount.Credit(5000);
console.log(creditResult);
var debAmmount = customer1.bankAccount.Debit(500);
console.log(debAmmount);
console.log(customer1.customerInfo());
