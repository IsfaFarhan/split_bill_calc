function splitEqual(){

const share1 = parseFloat(document.getElementById('share1').value) || 0;
const share2 = parseFloat(document.getElementById('share2').value) || 0;
const share3 = parseFloat(document.getElementById('share3').value) || 0;
const share4 = parseFloat(document.getElementById('share4').value) || 0;
const share5 = parseFloat(document.getElementById('share5').value) || 0;
const FriendNumber = parseFloat(document.getElementById('FriendNumber').value) || 0;
const sevTax = parseFloat(document.getElementById('servTax').value) || 0;
const TotalShare = (share1 + share2 + share3 + share4 + share5)
const TotalPerPerson = (TotalShare + (TotalShare*(sevTax/100)))/FriendNumber
const TotalPerPersonFix = TotalPerPerson.toFixed(2)
const shareitems = document.getElementById('shareItems')
const appear = document.getElementById('sharedItemsPrice')
const align6 = document.getElementById('muncul')


/* appear.innerText= TotalPerPerson     */

if (TotalPerPersonFix) {
    shareitems.innerText = '🐱 ' + 'Shared';
}

if (TotalPerPersonFix) {
    appear.innerText = 'RM ' + TotalPerPersonFix;
    const totalfriends = document.createElement('div');
    totalfriends.classList.add('totalfriends');
    totalfriends.style.height = '29px';

    const label = document.createElement('label');
    label.setAttribute('id', 'shareItems');
    label.innerText = '🐱 ' + 'Shared';
    totalfriends.appendChild(label);

    const paragraph = document.createElement('p');
    paragraph.setAttribute('id', 'shareItemPrice');
    paragraph.innerText = 'RM ' + TotalPerPersonFix + ' P.P';
    totalfriends.appendChild(paragraph);

    align6.appendChild(totalfriends);
}

}
