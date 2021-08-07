const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-giiven");
const  checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noofNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 1000 , 500, 200, 100, 50, 20, 10, 5, 1];

checkButton.addEventListener("click" , function validateBillAndCashAmount() {
        
          hideMessage();

          if(billAmount.value > 0){
                    if(cashGiven.value >= billAmount.value){
                              const amounttobeReturned = cashGiven.value - billAmount.value;
                              calculateChange(amounttobeReturned);
                    }else{
                              showMessage("The cash provided should be equal to the bill amount");
                    }

          }else{
                  showMessage("invalid bill amount");
          }
} );

function calculateChange(amounttobeReturned) {
          for(let i=0 ; i < availableNotes.length ; i++) {
                    const numberofNotes = Math.trunc(amounttobeReturned / availableNotes[i]  );

                    amounttobeReturned %= availableNotes[i];
                    noofNotes[i].innerText = numberofNotes;
          }
          
}

function hideMessage() {
          message.style.display = "none";

}

function showMessage(msg) {
          message.style.display = "block";
          message.innerHTML = msg;
}