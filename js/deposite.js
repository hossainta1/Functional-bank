/*
1. Add event listener to deposite button
2. get deposite amount from the deposite input field
2.5 Converting deposite string in to number format
3.clear the deposite input field by geating value.

4. get the previous deposite total

5. Calculate new deposite total



*/

document.getElementById('btn-deposite').addEventListener('click', function () {
    // step-2
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);
    // step 3 : 
    depositeField.value = '';

    // step-4

    const depositeTotalElement = document.getElementById('deposite-total');
    const previousDepositeTotalString = depositeTotalElement.innerText;
    const previousDepositeTota = parseFloat(previousDepositeTotalString);


    // Step 5 

    const newDepositeTotal = previousDepositeTota + newDepositeAmount;

    depositeTotalElement.innerText = newDepositeTotal;


})