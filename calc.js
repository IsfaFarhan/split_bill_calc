function calc() {

     /* ////// CALLING DATA INTO THE FUNCTION ////// */

    const item1Value = parseFloat(document.getElementById('item1u1').value) || 0;
    const item2Value = parseFloat(document.getElementById('item2u1').value) || 0;
    const item3Value = parseFloat(document.getElementById('item3u1').value) || 0;
    const item4Value = parseFloat(document.getElementById('item4u1').value) || 0;
    const item5Value = parseFloat(document.getElementById('item5u1').value) || 0;

    const item1u2Value = parseFloat(document.getElementById('item1u2').value) || 0;
    const item2u2Value = parseFloat(document.getElementById('item2u2').value) || 0;
    const item3u2Value = parseFloat(document.getElementById('item3u2').value) || 0;
    const item4u2Value = parseFloat(document.getElementById('item4u2').value) || 0;
    const item5u2Value = parseFloat(document.getElementById('item5u2').value) || 0;

    const item1u3Value = parseFloat(document.getElementById('item1u3').value) || 0;
    const item2u3Value = parseFloat(document.getElementById('item2u3').value) || 0;
    const item3u3Value = parseFloat(document.getElementById('item3u3').value) || 0;
    const item4u3Value = parseFloat(document.getElementById('item4u3').value) || 0;
    const item5u3Value = parseFloat(document.getElementById('item5u3').value) || 0;

    const item1u4Value = parseFloat(document.getElementById('item1u4').value) || 0;
    const item2u4Value = parseFloat(document.getElementById('item2u4').value) || 0;
    const item3u4Value = parseFloat(document.getElementById('item3u4').value) || 0;
    const item4u4Value = parseFloat(document.getElementById('item4u4').value) || 0;
    const item5u4Value = parseFloat(document.getElementById('item5u4').value) || 0;

    const item1u5Value = parseFloat(document.getElementById('item1u5').value) || 0;
    const item2u5Value = parseFloat(document.getElementById('item2u5').value) || 0;
    const item3u5Value = parseFloat(document.getElementById('item3u5').value) || 0;
    const item4u5Value = parseFloat(document.getElementById('item4u5').value) || 0;
    const item5u5Value = parseFloat(document.getElementById('item5u5').value) || 0;

    const total1 = item1Value + item2Value + item3Value + item4Value + item5Value
    const total2 = item1u2Value + item2u2Value + item3u2Value + item4u2Value + item5u2Value
    const total3 = item1u3Value + item2u3Value + item3u3Value + item4u3Value + item5u3Value
    const total4 = item1u4Value + item2u4Value + item3u4Value + item4u4Value + item5u4Value
    const total5 = item1u5Value + item2u5Value + item3u5Value + item4u5Value + item5u5Value

    const username1 = document.getElementById('name1').value
    const username2 = document.getElementById('name2').value
    const username3 = document.getElementById('name3').value
    const username4 = document.getElementById('name4').value
    const username5 = document.getElementById('name5').value

    const sevTax = parseFloat(document.getElementById('servTax').value) || 0;



    /* ////// USER 1 ITEM CALCULATION ////// */

    const totalAndTax = total1 + (total1 * (sevTax / 100));
    const totalAndTaxFix = totalAndTax.toFixed(2);
    const totaluser1 = document.getElementById('totaluser1');
    const user1name = document.getElementById('user1name');
    const align = document.getElementById('muncul')
    const username1Value = username1 || '';

if (username1Value) {
    user1name.innerText = '🐱 ' + username1Value;
}

if (totalAndTax) {
    totaluser1.innerText = 'RM ' + totalAndTaxFix;
    const totalfriends = document.createElement('div');
    totalfriends.classList.add('totalfriends');
    totalfriends.style.height = '29px';

    const label = document.createElement('label');
    label.setAttribute('id', 'user1name');
    label.innerText = '🐱 ' + username1Value;
    totalfriends.appendChild(label);

    const paragraph = document.createElement('p');
    paragraph.setAttribute('id', 'totaluser1');
    paragraph.innerText = 'RM ' + totalAndTaxFix;
    totalfriends.appendChild(paragraph);

    align.appendChild(totalfriends);
}


     /* ////// USER 2 ITEM CALCULATION ////// */


    const totalAndTax2 = total2 + (total2*(sevTax/100))
    const totalAndTax2Fix = totalAndTax2.toFixed(2);
    const totaluser2 = document.getElementById('totaluser2');
    const user2name = document.getElementById('user2name');
    const align2 = document.getElementById('muncul')
    const username2Value = username2 || '';

    if (username1Value) {
        user2name.innerText = '🐰 ' + username2Value;
    }
    
    if (totalAndTax2) {
        totaluser2.innerText = 'RM ' + totalAndTax2Fix;
        const totalfriends = document.createElement('div');
        totalfriends.classList.add('totalfriends');
        totalfriends.style.height = '29px';
    
        const label = document.createElement('label');
        label.setAttribute('id', 'user2name');
        label.innerText = '🐰 ' + username2Value;
        totalfriends.appendChild(label);
    
        const paragraph = document.createElement('p');
        paragraph.setAttribute('id', 'totaluser2');
        paragraph.innerText = 'RM ' + totalAndTax2Fix;
        totalfriends.appendChild(paragraph);
    
        align2.appendChild(totalfriends);
    }

     /* ////// USER 3 ITEM CALCULATION ////// */


    const totalAndTax3 = total3 + (total3*(sevTax/100))
    const totalAndTax3Fix = totalAndTax3.toFixed(2);
    const totaluser3 = document.getElementById('totaluser3');
    const user3name = document.getElementById('user3name');
    const align3 = document.getElementById('muncul')
    const username3Value = username3 || '';

    if (username3Value) {
        user3name.innerText = '🦊 ' + username3Value;
    }
    
    if (totalAndTax3) {
        totaluser3.innerText = 'RM ' + totalAndTax3Fix;
        const totalfriends = document.createElement('div');
        totalfriends.classList.add('totalfriends');
        totalfriends.style.height = '29px';
    
        const label = document.createElement('label');
        label.setAttribute('id', 'user3name');
        label.innerText = '🦊 ' + username3Value;
        totalfriends.appendChild(label);
    
        const paragraph = document.createElement('p');
        paragraph.setAttribute('id', 'totaluser3');
        paragraph.innerText = 'RM ' + totalAndTax3Fix;
        totalfriends.appendChild(paragraph);
    
        // Append the totalfriends to wherever you want it to appear
        // For example, if you want to append it to the body:
        align3.appendChild(totalfriends);
    }

     /* ////// USER 4 ITEM CALCULATION ////// */


    const totalAndTax4 = total4 + (total4*(sevTax/100))
    const totalAndTax4Fix = totalAndTax4.toFixed(2);
    const totaluser4 = document.getElementById('totaluser4');
    const user4name = document.getElementById('user4name');
    const align4 = document.getElementById('muncul')
    const username4Value = username4 || '';

    if (username4Value) {
        user4name.innerText = '🐸 ' + username4Value;
    }
    
    if (totalAndTax4) {
        totaluser4.innerText = 'RM ' + totalAndTax4Fix;
        const totalfriends = document.createElement('div');
        totalfriends.classList.add('totalfriends');
        totalfriends.style.height = '29px';
    
        const label = document.createElement('label');
        label.setAttribute('id', 'user4name');
        label.innerText = '🐸 ' + username4Value;
        totalfriends.appendChild(label);
    
        const paragraph = document.createElement('p');
        paragraph.setAttribute('id', 'totaluser4');
        paragraph.innerText = 'RM ' + totalAndTax4Fix;
        totalfriends.appendChild(paragraph);
    
        // Append the totalfriends to wherever you want it to appear
        // For example, if you want to append it to the body:
        align4.appendChild(totalfriends);
    }

       /* ////// USER 5 ITEM CALCULATION ////// */


    const totalAndTax5 = total5 + (total5*(sevTax/100))
    const totalAndTax5Fix = totalAndTax5.toFixed(2);
    const totaluser5 = document.getElementById('totaluser5');
    const user5name = document.getElementById('user5name');
    const align5 = document.getElementById('muncul')
    const username5Value = username5 || '';

    if (username5Value) {
        user5name.innerText = '🦋 ' + username5Value;
    }
    
    if (totalAndTax5) {
        totaluser5.innerText = 'RM ' + totalAndTax5Fix;
        const totalfriends = document.createElement('div');
        totalfriends.classList.add('totalfriends');
        totalfriends.style.height = '29px';
    
        const label = document.createElement('label');
        label.setAttribute('id', 'user5name');
        label.innerText = '🦋 ' + username5Value;
        totalfriends.appendChild(label);
    
        const paragraph = document.createElement('p');
        paragraph.setAttribute('id', 'totaluser5');
        paragraph.innerText = 'RM ' + totalAndTax5Fix;
        totalfriends.appendChild(paragraph);
        align5.appendChild(totalfriends);
    }


     /* ////// CALLING DATA INTO THE FUNCTION ////// */


    const share1 = parseFloat(document.getElementById('share1').value) || 0;
    const share2 = parseFloat(document.getElementById('share2').value) || 0;
    const share3 = parseFloat(document.getElementById('share3').value) || 0;
    const share4 = parseFloat(document.getElementById('share4').value) || 0;
    const share5 = parseFloat(document.getElementById('share5').value) || 0;
    const FriendNumber = parseFloat(document.getElementById('FriendNumber').value) || 0;


    /* ////// SHARE ITEM CALCULATION LOGIC ////// */


    const TotalShare = (share1 + share2 + share3 + share4 + share5)
    const TotalPerPerson = (TotalShare + (TotalShare*(sevTax/100)))/FriendNumber
    const TotalPerPersonFix = TotalPerPerson.toFixed(2)
    console.log(TotalPerPersonFix)

    const shareitems = document.getElementById('shareItems')
    const appear = document.getElementById('sharedItemsPrice')
    const align6 = document.getElementById('muncul')
    
    
    if (TotalShare) {
        shareitems.innerText = 'Shared items';
    }
    
    if (TotalShare) {
        appear.innerText = 'RM ' + TotalPerPersonFix;
        const totalfriends = document.createElement('div');
        totalfriends.classList.add('totalfriends');
        totalfriends.style.height = '29px';
    
        const label = document.createElement('label');
        label.setAttribute('id', 'shareItems');
        label.innerText = 'Shared items';
        totalfriends.appendChild(label);
    
        const paragraph = document.createElement('p');
        paragraph.setAttribute('id', 'shareItemPrice');
        paragraph.innerText = 'RM ' + TotalPerPersonFix + ' P.P';
        totalfriends.appendChild(paragraph);
    
        align6.appendChild(totalfriends);
    }


    /* ////// GRANG TOTAL CALCULATION LOGIC ////// */


    const totalPrice = document.getElementById('totalprice')
    const allTotal = total1 + total2 + total3 + total4 + total5 + TotalShare;
    const allTotalTax = allTotal + (allTotal*(sevTax/100))
    const dec2TotalTax = allTotalTax.toFixed(2)
    totalPrice.innerText = 'RM '+ dec2TotalTax;

}
/* function disableDivClick() {
    const div = document.getElementById('calculate');
    if (div) {
        div.style.pointerEvents = 'none';
        document.querySelector('.buttoncalc').classList.add('buttoncalcClicked')
    }
} */
function resetTotalPrice(){
    const sevTax = document.getElementById('servTax')
    const totalPrice = document.getElementById('totalprice')
    totalPrice.innerText = 'RM 0.00';
    sevTax.value =''

}
function resetElements() {
    // Remove the previously created elements
    const align = document.getElementById('muncul');
    align.innerHTML = ''; // Remove all child elements
}