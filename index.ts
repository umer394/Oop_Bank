#! /usr/bin/env node

interface IBankAccount{
    Debit(amount:number):string;
    Credit(amount:number):string
}


class BankAccount  implements IBankAccount{
    AccountBalance:number =100
      
    Debit(amount:number):string{
        let statement = "Sorry, you have insufficient balance!";
        if(amount > 0){
            statement = "The amount you enetered is wrong!"

            if(this.AccountBalance > amount){
                this.AccountBalance = this.AccountBalance - amount
                statement = "Transaction sccesfull! New account balance is " + this.AccountBalance
            }else{
                statement = "You don't have enough mmoney to do this transaction"
            }
        }
        return statement
    }

    Credit(amount:number):string{
        let statement = "Transaction failed1";
        if(amount > 0){
            this.AccountBalance = this.AccountBalance + amount
            if(amount > 100){
                this.AccountBalance = this.AccountBalance - 1
            }
            statement = "Your Account has been credit successfully"
            
        }
        return statement
    }
    
}

class Customer{
    public fName: string
    public lName: string
    public Gender: string
    public Age: number
    public mobileNumber: string
    public bankAccount: BankAccount

    constructor(fName:string,lName:string,Gender:string,Age:number,mobileNumber:string){
        this.fName = fName
        this.lName = lName
        this.Gender = Gender
        this.Age = Age
        this.mobileNumber = mobileNumber
        this.bankAccount = new BankAccount()
    }

    customerInfo(){
        return `Name: ${this.fName} ${this.lName}\nAge: ${this.Age}\nGender: ${this.Gender}\nMobile Number: ${this.mobileNumber}\nAccount Balance: ${this.bankAccount.AccountBalance}`
    }
}

const customer1 = new Customer("umer","shahzad","Male",22,"123456789")


let creditResult = customer1.bankAccount.Credit(5000);
console.log(creditResult);


const debAmmount = customer1.bankAccount.Debit(500)
console.log(debAmmount);

console.log(customer1.customerInfo());