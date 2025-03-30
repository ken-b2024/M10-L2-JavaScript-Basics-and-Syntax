/* let loggedIn = true;

if (loggedIn) {
    let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)', 'Tomato']
    for (let i = 1; i < cart.length; i++) {
        console.log("Cart Item", i, ":", cart[i]);
    }
} else {
    console.log("You must be logged in to view your cart.")
} */

let bankBalance = 115.76;
let depositAmount = 45.00;

function deposit() {
    bankBalance += depositAmount
    console.log("Balance after deposit:", bankBalance)
}
deposit();

let bankBalance2 = 160.76
let withdrawAmount = 53.17

function withdraw() {
    bankBalance2 -= withdrawAmount
    function formatNumber(BankBalance2, decimals) {
        return (bankBalance2.toFixed(decimals));
    }
    console.log("Balance after withdrawal:", formatNumber(bankBalance2, 2));
}
withdraw();

const view = (bankBalance) => {
    console.log("Current Balance:", bankBalance)
}
view(bankBalance)