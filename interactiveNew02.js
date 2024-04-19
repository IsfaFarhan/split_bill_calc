/* Share Item Sections */

function addShareItems(){
    let user5item02 = document.getElementById('shareItem02');
    let user5item03 = document.getElementById('shareItem03');
    let user5item04 = document.getElementById('shareItem04');
    let user5item05 = document.getElementById('shareItem05');
    if (user5item02.style.display === 'none' || user5item02.style.display === '') {
        user5item02.style.display = 'block';
        document.querySelector('#shareItem01 .itemprice').classList.add('bottom-corner-prev');
        document.querySelector('#shareItem02 .itemprice').classList.add('bottom-corner-last');

      } else if (user5item03.style.display === 'none' || user5item03.style.display === '') {
        user5item03.style.display = 'block';
        document.querySelector('#shareItem02 .itemprice').classList.add('bottom-corner-prev');
        document.querySelector('#shareItem03 .itemprice').classList.add('bottom-corner-last');

      } else if (user5item04.style.display === 'none' || user5item04.style.display === '') {
        user5item04.style.display = 'block';
        document.querySelector('#shareItem03 .itemprice').classList.add('bottom-corner-prev');
        document.querySelector('#shareItem04 .itemprice').classList.add('bottom-corner-last');

      } else if (user5item05.style.display === 'none' || user5item05.style.display === '') {
        user5item05.style.display = 'block';
        document.querySelector('#shareItem04 .itemprice').classList.add('bottom-corner-prev');
        document.querySelector('#shareItem05 .itemprice').classList.add('bottom-corner-last');

      } else {
        maxItem()
      }
    }

    function resetShareItems() {
        let username = document.getElementById('shareitems');
        let shareItem01 = document.getElementById('shareItem01')
        let shareItem02 = document.getElementById('shareItem02');
        let shareItem03 = document.getElementById('shareItem03');
        let shareItem04 = document.getElementById('shareItem04');
        let shareItem05 = document.getElementById('shareItem05');
        let user5 = document.getElementById('user5'); /* might use for toggle later */
        if (shareItem01.style.display === 'block' || shareItem01.style.display === '') {
            share1.value =''
            username.value=''
            document.querySelector('#shareItem01 .itemprice').classList.remove('bottom-corner-prev')

        }
        if (shareItem02.style.display === 'block' || shareItem02.style.display === '') {
            shareItem02.style.display = 'none';
            share2.value =''
            document.querySelector('#shareItem02 .itemprice').classList.remove('bottom-corner-prev')

        }
        if (shareItem03.style.display === 'block' || shareItem01.style.display === '') {
            shareItem03.style.display = 'none';
            share3.value =''
            document.querySelector('#shareItem03 .itemprice').classList.remove('bottom-corner-prev')

        } 
        if (shareItem04.style.display === 'block' || shareItem04.style.display === '') {
            shareItem04.style.display = 'none';
            share4.value =''
            document.querySelector('#shareItem04 .itemprice').classList.remove('bottom-corner-prev')

        }
        if (shareItem05.style.display === 'block' || shareItem05.style.display === '') {
            shareItem05.style.display = 'none';
            share5.value =''
            document.querySelector('#shareItem01 .itemprice').classList.remove('bottom-corner-last')

        }
        if(share1.value ===''){
          reseting() /* Func in interactNew.js files */
      }
      /*if(user5.style.display === 'none'){   <<<might use for toggle later>>>
        resetingRemoveFriend()
      } */
}

