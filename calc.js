function calc() {
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

    const total1 = item1Value + item2Value + item3Value + item4Value + item5Value;
    const total2 = item1u2Value + item2u2Value + item3u2Value + item4u2Value + item5u2Value;
    const total3 = item1u3Value + item2u3Value + item3u3Value + item4u3Value + item5u3Value;
    const total4 = item1u4Value + item2u4Value + item3u4Value + item4u4Value + item5u4Value;
    const total5 = item1u5Value + item2u5Value + item3u5Value + item4u5Value + item5u5Value;

    const username1 = document.getElementById('name1').value
    const username2 = document.getElementById('name2').value
    const username3 = document.getElementById('name3').value
    const username4 = document.getElementById('name4').value
    const username5 = document.getElementById('name5').value

    const sevTax = parseFloat(document.getElementById('servTax').value) || 0;

    const totalAndTax = total1 + (total1*(sevTax/100))
    const totaluser1 = document.getElementById('totaluser1');
    const user1name = document.getElementById('user1name');
    const username1Value = username1 || '';
    if (username1Value) {
        user1name.innerText = username1Value;
    }
    if (totalAndTax) {
        totaluser1.innerText = totalAndTax;
    }

    const totalAndTax2 = total2 + (total2*(sevTax/100))
    const totaluser2 = document.getElementById('totaluser2');
    const user2name = document.getElementById('user2name');
    const username2Value = username2 || '';
    if (username2Value) {
        user2name.innerText = username2Value;
    }
    if (totalAndTax2) {
        totaluser2.innerText = totalAndTax2;
    }

    const totalAndTax3 = total3 + (total3*(sevTax/100))
    const totaluser3 = document.getElementById('totaluser3');
    const user3name = document.getElementById('user3name');
    const username3Value = username3 || '';
    if (username3Value) {
        user3name.innerText = username3Value;
    }
    if (totalAndTax3) {
        totaluser3.innerText = totalAndTax3;
    }

    const totalAndTax4 = total4 + (total4*(sevTax/100))
    const totaluser4 = document.getElementById('totaluser4');
    const user4name = document.getElementById('user4name');
    const username4Value = username4 || '';
    if (username4Value) {
        user4name.innerText = username4Value;
    }
    if (totalAndTax4) {
        totaluser4.innerText = totalAndTax4;
    }
    
    const totalAndTax5 = total5 + (total5*(sevTax/100))
    const totaluser5 = document.getElementById('totaluser5');
    const user5name = document.getElementById('user5name');
    const username5Value = username5 || '';
    if (username5Value) {
        user5name.innerText = username5Value;
    }
    if (totalAndTax5) {
        totaluser5.innerText = totalAndTax5;
    }


    const totalPrice = document.getElementById('totalprice')
    const allTotal = total1 + total2 + total3 + total4 + total5;
    const allTotalTax = allTotal + (allTotal*(sevTax/100))
    totalPrice.innerText = allTotalTax
}