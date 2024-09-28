class BankAccount {
    balance: number

    constructor(balance: number) {
       this.balance = balance
    }

    deposit(amount: number): number {
        this.balance = this.balance + amount
        return this.balance
    }
}

const myAccount = new BankAccount(500)
console.log(myAccount.deposit(100)) // After fixing: will print 600
