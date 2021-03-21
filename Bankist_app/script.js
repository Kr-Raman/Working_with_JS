"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// for making the deposit history box we need to iterate the entire Object movements

const displayMovements = function (movements) {
  // removing the already existing Elements
  containerMovements.innerHTML = "";
  movements.forEach(function (mov, i) {
    // to know whether the deposit or withdrawl using ternary operator
    const type = mov > 0 ? "deposit" : "withdrawal";
    // here we are creating a html template leteral i.e making html code dynamic in nature

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
         
          <div class="movements__value">${mov}💲</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

//displayMovements(account1.movements);

//Now creating a username for the users that will take the owners name and it will convert it into just the initals

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);
//console.log(accounts);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}💲`;
};
//calcDisplayBalance(account1.movements);
// function for creating the total  SUm out and total sum in and the Interest on the deposited money
const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}💲`;

  const out = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}💲`;

  const interest = movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * 1.2) / 100)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}💲`;
};
//calcDisplaySummary(account1.movements);

//EVENT HANDLER FOR LOGIN
let currentAccount;
btnLogin.addEventListener("click", function (e) {
  //by default we know that submit btn refreshes the page which clicked upon and
  //here we are preventing it for doing its default refreshing habit.
  e.preventDefault();
  //this will give us the account to which the username belongs .
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  //now here we will check whether the username and pin matches or not
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back ,${
      currentAccount.owner.split(" ")[0]
    } `;
  }
  //clearing the input fields
  inputLoginPin.value = inputLoginUsername.value = "";
  inputLoginPin.blur();
  // changing the opactiy property
  containerApp.style.opacity = 100;
  // making all the display Dynamic here
  displayMovements(currentAccount.movements);
  calcDisplayBalance(currentAccount.movements);
  calcDisplaySummary(currentAccount.movements);
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

//  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
