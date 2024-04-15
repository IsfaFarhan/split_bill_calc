
function addItems (){
    let useritem02 = document.getElementById('useritem02');
    let useritem03 = document.getElementById('useritem03');
    let useritem04 = document.getElementById('useritem04');
    let useritem05 = document.getElementById('useritem05');
    if (useritem02.style.display === 'none' || useritem02.style.display === '') {
        useritem02.style.display = 'block';
        document.querySelector('#useritem01 .itemprice').classList.add('bottom-corner-prev');
        document.querySelector('#useritem02 .itemprice').classList.add('bottom-corner-last');
      } else if (useritem03.style.display === 'none' || useritem03.style.display === '') {
        useritem03.style.display = 'block';
        document.querySelector('#useritem02 .itemprice').classList.add('bottom-corner-prev');
        document.querySelector('#useritem03 .itemprice').classList.add('bottom-corner-last');
      } else if (useritem04.style.display === 'none' || useritem04.style.display === '') {
        useritem04.style.display = 'block';
        document.querySelector('#useritem03 .itemprice').classList.add('bottom-corner-prev');
        document.querySelector('#useritem04 .itemprice').classList.add('bottom-corner-last');
      } else if (useritem05.style.display === 'none' || useritem05.style.display === '') {
        useritem05.style.display = 'block';
        document.querySelector('#useritem04 .itemprice').classList.add('bottom-corner-prev');
        document.querySelector('#useritem05 .itemprice').classList.add('bottom-corner-last');
      } else {
          maxItem()
      }
    }

    function resetItems() {
        let username = document.getElementById('name1');
        let useritem01 = document.getElementById('useritem01')
        let useritem02 = document.getElementById('useritem02');
        let useritem03 = document.getElementById('useritem03');
        let useritem04 = document.getElementById('useritem04');
        let useritem05 = document.getElementById('useritem05');
        if (useritem01.style.display === 'block' || useritem01.style.display === '') {
          item1u1.value =''
          username.value=''
          document.querySelector('#useritem01 .itemprice').classList.remove('bottom-corner-prev')
        }
        if (useritem02.style.display === 'block' || useritem02.style.display === '') {
            useritem02.style.display = 'none';
            item2u1.value =''
            document.querySelector('#useritem02 .itemprice').classList.remove('bottom-corner-prev')

        }
        if (useritem03.style.display === 'block' || useritem03.style.display === '') {
            useritem03.style.display = 'none';
            item3u1.value =''
            document.querySelector('#useritem03 .itemprice').classList.remove('bottom-corner-prev')

        } 
        if (useritem04.style.display === 'block' || useritem04.style.display === '') {
            useritem04.style.display = 'none';
            item4u1.value =''
            document.querySelector('#useritem04 .itemprice').classList.remove('bottom-corner-prev')

        }
        if (useritem05.style.display === 'block' || useritem05.style.display === '') {
            useritem05.style.display = 'none';
            item5u1.value =''
            document.querySelector('#useritem05 .itemprice').classList.remove('bottom-corner-last')

        }
        if(item1u1.value ===''){
          reseting()
        }
}

////User2////

function addItems2 (){
    let user2item02 = document.getElementById('user2item02');
    let user2item03 = document.getElementById('user2item03');
    let user2item04 = document.getElementById('user2item04');
    let user2item05 = document.getElementById('user2item05');
    if (user2item02.style.display === 'none' || user2item02.style.display === '') {
        user2item02.style.display = 'block';
        document.querySelector('#user2item01 .itemprice').classList.add('bottom-corner-prev');
        document.querySelector('#user2item02 .itemprice').classList.add('bottom-corner-last');

      } else if (user2item03.style.display === 'none' || user2item03.style.display === '') {
        user2item03.style.display = 'block';
        document.querySelector('#user2item02 .itemprice').classList.add('bottom-corner-prev');
        document.querySelector('#user2item03 .itemprice').classList.add('bottom-corner-last');

      } else if (user2item04.style.display === 'none' || user2item04.style.display === '') {
        user2item04.style.display = 'block';
        document.querySelector('#user2item03 .itemprice').classList.add('bottom-corner-prev');
        document.querySelector('#user2item04 .itemprice').classList.add('bottom-corner-last');

      } else if (user2item05.style.display === 'none' || user2item05.style.display === '') {
        user2item05.style.display = 'block';
        document.querySelector('#user2item04 .itemprice').classList.add('bottom-corner-prev');
        document.querySelector('#user2item05 .itemprice').classList.add('bottom-corner-last');

      } else {
        maxItem()
      }
    }

    function resetItems2() {
        let username = document.getElementById('name2');
        let user2item01 = document.getElementById('user2item01')
        let user2item02 = document.getElementById('user2item02');
        let user2item03 = document.getElementById('user2item03');
        let user2item04 = document.getElementById('user2item04');
        let user2item05 = document.getElementById('user2item05');
        if (user2item01.style.display === 'block' || user2item01.style.display === '') {
            item1u2.value =''
            username.value=''
            document.querySelector('#user2item01 .itemprice').classList.remove('bottom-corner-prev')

        }
        if (user2item02.style.display === 'block' || user2item02.style.display === '') {
            user2item02.style.display = 'none';
            item2u2.value =''
            document.querySelector('#user2item02 .itemprice').classList.remove('bottom-corner-prev')

        }
        if (user2item03.style.display === 'block' || user2item03.style.display === '') {
            user2item03.style.display = 'none';
            item3u2.value =''
            document.querySelector('#user2item03 .itemprice').classList.remove('bottom-corner-prev')

        } 
        if (user2item04.style.display === 'block' || user2item04.style.display === '') {
            user2item04.style.display = 'none';
            item4u2.value =''
            document.querySelector('#user2item04 .itemprice').classList.remove('bottom-corner-prev')

        }
        if (user2item05.style.display === 'block' || user2item05.style.display === '') {
            user2item05.style.display = 'none';
            item5u2.value =''
            document.querySelector('#user2item05 .itemprice').classList.remove('bottom-corner-last')

        }
        if(item1u2.value ===''){
            reseting()
        }
}

////User3////

function addItems3 (){
    let user3item02 = document.getElementById('user3item02');
    let user3item03 = document.getElementById('user3item03');
    let user3item04 = document.getElementById('user3item04');
    let user3item05 = document.getElementById('user3item05');
    if (user3item02.style.display === 'none' || user3item02.style.display === '') {
        user3item02.style.display = 'block';
        document.querySelector('#user3item01 .itemprice').classList.add('bottom-corner-prev');
        document.querySelector('#user3item02 .itemprice').classList.add('bottom-corner-last');

      } else if (user3item03.style.display === 'none' || user3item03.style.display === '') {
        user3item03.style.display = 'block';
        document.querySelector('#user3item02 .itemprice').classList.add('bottom-corner-prev');
        document.querySelector('#user3item03 .itemprice').classList.add('bottom-corner-last');

      } else if (user3item04.style.display === 'none' || user3item04.style.display === '') {
        user3item04.style.display = 'block';
        document.querySelector('#user3item03 .itemprice').classList.add('bottom-corner-prev');
        document.querySelector('#user3item04 .itemprice').classList.add('bottom-corner-last');

      } else if (user3item05.style.display === 'none' || user3item05.style.display === '') {
        user3item05.style.display = 'block';
        document.querySelector('#user3item04 .itemprice').classList.add('bottom-corner-prev');
        document.querySelector('#user3item05 .itemprice').classList.add('bottom-corner-last');

      } else {
        maxItem()
      }
    }

    function resetItems3() {
        let username = document.getElementById('name3');
        let user3item01 = document.getElementById('user3item01')
        let user3item02 = document.getElementById('user3item02');
        let user3item03 = document.getElementById('user3item03');
        let user3item04 = document.getElementById('user3item04');
        let user3item05 = document.getElementById('user3item05');
        let user3 = document.getElementById('user3');
        if (user3item01.style.display === 'block' || user3item01.style.display === '') {
            item1u3.value =''
            username.value=''
            document.querySelector('#user3item01 .itemprice').classList.remove('bottom-corner-prev')

        }
        if (user3item02.style.display === 'block' || user3item02.style.display === '') {
            user3item02.style.display = 'none';
            item2u3.value =''
            document.querySelector('#user3item02 .itemprice').classList.remove('bottom-corner-prev')

        }
        if (user3item03.style.display === 'block' || user3item03.style.display === '') {
            user3item03.style.display = 'none';
            item3u3.value =''
            document.querySelector('#user3item03 .itemprice').classList.remove('bottom-corner-prev')

        } 
        if (user3item04.style.display === 'block' || user3item04.style.display === '') {
            user3item04.style.display = 'none';
            item4u3.value =''
            document.querySelector('#user3item04 .itemprice').classList.remove('bottom-corner-prev')

        }
        if (user3item05.style.display === 'block' || user3item05.style.display === '') {
            user3item05.style.display = 'none';
            item5u3.value =''
            document.querySelector('#user3item05 .itemprice').classList.remove('bottom-corner-last')

        }
        if(item1u3.value ===''){
          reseting()
        }
        if(user3.style.display === 'none'){
          resetingRemoveFriend()
        }
      
    }
////User4////

function addItems4 (){
    let user4item02 = document.getElementById('user4item02');
    let user4item03 = document.getElementById('user4item03');
    let user4item04 = document.getElementById('user4item04');
    let user4item05 = document.getElementById('user4item05');
    if (user4item02.style.display === 'none' || user4item02.style.display === '') {
        user4item02.style.display = 'block';
        document.querySelector('#user4item01 .itemprice').classList.add('bottom-corner-prev');
        document.querySelector('#user4item02 .itemprice').classList.add('bottom-corner-last');

      } else if (user4item03.style.display === 'none' || user4item03.style.display === '') {
        user4item03.style.display = 'block';
        document.querySelector('#user4item02 .itemprice').classList.add('bottom-corner-prev');
        document.querySelector('#user4item03 .itemprice').classList.add('bottom-corner-last');

      } else if (user4item04.style.display === 'none' || user4item04.style.display === '') {
        user4item04.style.display = 'block';
        document.querySelector('#user4item03 .itemprice').classList.add('bottom-corner-prev');
        document.querySelector('#user4item04 .itemprice').classList.add('bottom-corner-last');

      } else if (user4item05.style.display === 'none' || user4item05.style.display === '') {
        user4item05.style.display = 'block';
        document.querySelector('#user4item04 .itemprice').classList.add('bottom-corner-prev');
        document.querySelector('#user4item05 .itemprice').classList.add('bottom-corner-last');

      } else {
        maxItem()
      }
    }

    function resetItems4() {
        let username = document.getElementById('name4');
        let user4item01 = document.getElementById('user4item01')
        let user4item02 = document.getElementById('user4item02');
        let user4item03 = document.getElementById('user4item03');
        let user4item04 = document.getElementById('user4item04');
        let user4item05 = document.getElementById('user4item05');
        let user4 = document.getElementById('user4');
        if (user4item01.style.display === 'block' || user4item01.style.display === '') {
            item1u4.value =''
            username.value=''
            document.querySelector('#user4item01 .itemprice').classList.remove('bottom-corner-prev')

        }
        if (user4item02.style.display === 'block' || user4item02.style.display === '') {
            user4item02.style.display = 'none';
            item2u4.value =''
            document.querySelector('#user4item02 .itemprice').classList.remove('bottom-corner-prev')

        }
        if (user4item03.style.display === 'block' || user4item03.style.display === '') {
            user4item03.style.display = 'none';
            item3u4.value =''
            document.querySelector('#user4item03 .itemprice').classList.remove('bottom-corner-prev')

        } 
        if (user4item04.style.display === 'block' || user4item04.style.display === '') {
            user4item04.style.display = 'none';
            item4u4.value =''
            document.querySelector('#user4item04 .itemprice').classList.remove('bottom-corner-prev')

        }
        if (user4item05.style.display === 'block' || user4item05.style.display === '') {
            user4item05.style.display = 'none';
            item5u4.value =''
            document.querySelector('#user4item05 .itemprice').classList.remove('bottom-corner-last')

        }
          if(item1u4.value ===''){
            reseting()
        }
        if(user4.style.display === 'none'){
          resetingRemoveFriend()
        }
        
}

////User5////

function addItems5 (){
    let user5item02 = document.getElementById('user5item02');
    let user5item03 = document.getElementById('user5item03');
    let user5item04 = document.getElementById('user5item04');
    let user5item05 = document.getElementById('user5item05');
    if (user5item02.style.display === 'none' || user5item02.style.display === '') {
        user5item02.style.display = 'block';
        document.querySelector('#user5item01 .itemprice').classList.add('bottom-corner-prev');
        document.querySelector('#user5item02 .itemprice').classList.add('bottom-corner-last');

      } else if (user5item03.style.display === 'none' || user5item03.style.display === '') {
        user5item03.style.display = 'block';
        document.querySelector('#user5item02 .itemprice').classList.add('bottom-corner-prev');
        document.querySelector('#user5item03 .itemprice').classList.add('bottom-corner-last');

      } else if (user5item04.style.display === 'none' || user5item04.style.display === '') {
        user5item04.style.display = 'block';
        document.querySelector('#user5item03 .itemprice').classList.add('bottom-corner-prev');
        document.querySelector('#user5item04 .itemprice').classList.add('bottom-corner-last');

      } else if (user5item05.style.display === 'none' || user5item05.style.display === '') {
        user5item05.style.display = 'block';
        document.querySelector('#user5item04 .itemprice').classList.add('bottom-corner-prev');
        document.querySelector('#user5item05 .itemprice').classList.add('bottom-corner-last');

      } else {
        maxItem()
      }
    }

    function resetItems5() {
        let username = document.getElementById('name5');
        let user5item01 = document.getElementById('user5item01')
        let user5item02 = document.getElementById('user5item02');
        let user5item03 = document.getElementById('user5item03');
        let user5item04 = document.getElementById('user5item04');
        let user5item05 = document.getElementById('user5item05');
        let user5 = document.getElementById('user5');
        if (user5item01.style.display === 'block' || user5item01.style.display === '') {
            item1u5.value =''
            username.value=''
            document.querySelector('#user5item01 .itemprice').classList.remove('bottom-corner-prev')

        }
        if (user5item02.style.display === 'block' || user5item02.style.display === '') {
            user5item02.style.display = 'none';
            item2u5.value =''
            document.querySelector('#user5item02 .itemprice').classList.remove('bottom-corner-prev')

        }
        if (user5item03.style.display === 'block' || user5item03.style.display === '') {
            user5item03.style.display = 'none';
            item3u5.value =''
            document.querySelector('#user5item03 .itemprice').classList.remove('bottom-corner-prev')

        } 
        if (user5item04.style.display === 'block' || user5item04.style.display === '') {
            user5item04.style.display = 'none';
            item4u5.value =''
            document.querySelector('#user5item04 .itemprice').classList.remove('bottom-corner-prev')

        }
        if (user5item05.style.display === 'block' || user5item05.style.display === '') {
            user5item05.style.display = 'none';
            item5u5.value =''
            document.querySelector('#user5item05 .itemprice').classList.remove('bottom-corner-last')

        }
        if(item1u5.value ===''){
          reseting()
      }
      if(user5.style.display === 'none'){
        resetingRemoveFriend()
      }
}

function addUser() {
    let user3 = document.getElementById('user3');
    let user4 = document.getElementById('user4');
    let user5 = document.getElementById('user5');
    let notification = document.getElementById("notificationUser");
    let notificationMassageMax = document.getElementById("notificationMessageMax")
    let notificationMassageMin = document.getElementById("notificationMessageMin")
    let bgNotification = document.getElementById("black")

    if (user3.style.display === 'none' || user3.style.display === '') {
        user3.style.display = 'block';
    } else if (user4.style.display === 'none' || user4.style.display === ''){
        user4.style.display = 'block';
    }else if (user5.style.display === 'none' || user5.style.display === ''){
        user5.style.display = 'block';
    }else{
        bgNotification.style.display = "block"
        notification.style.display = "flex";
        notificationMassageMax.style.display = "flex";
        notificationMassageMin.style.display = "none";
}
}

function removeUser() {
    let user3 = document.getElementById('user3');
    let user4 = document.getElementById('user4');
    let user5 = document.getElementById('user5');
    let notification = document.getElementById("notificationUser");
    let notificationMassageMax = document.getElementById("notificationMessageMax")
    let notificationMassageMin = document.getElementById("notificationMessageMin")
    let bgNotification = document.getElementById("black")
    if (user5.style.display === 'block' || user5.style.display === '') {
        user5.style.display = 'none';
        resetItems5();
    } else if (user4.style.display === 'block' || user4.style.display === ''){
        user4.style.display = 'none';
        resetItems4();
    }else if (user3.style.display === 'block' || user3.style.display === ''){
        user3.style.display = 'none';
        resetItems3();
    }else{
      bgNotification.style.display = "block"
      notification.style.display = "flex";
      notificationMassageMax.style.display="none"
      notificationMassageMin.style.display = "flex";
    }
}


function showAlert() { //// For Loading Splitting Bills ////
  let notification = document.getElementById("notification");
  let bgNotification = document.getElementById("black")
  bgNotification.style.display = "block"
  notification.style.display = "flex";
  setTimeout(function(){
    closeNotification();
  }, 2000);
}

// Function to close the notification
function closeNotification() {
  let notification = document.getElementById("notification");
  let bgNotification = document.getElementById("black")
  bgNotification.style.display = "none";
  notification.style.display = "none";
}

function closeNotificationUser() {
  let notification = document.getElementById("notificationUser");
  let bgNotification = document.getElementById("black")
  bgNotification.style.display = "none";
  notification.style.display = "none";
}

function closeNotificationItem() {
  let notification = document.getElementById("notificationItem");
  let bgNotification = document.getElementById("black")
  bgNotification.style.display = "none";
  notification.style.display = "none";
}

function maxItem(){
  let notification = document.getElementById("notificationItem");
  let bgNotification = document.getElementById("black")
  bgNotification.style.display = "block"
    notification.style.display = "flex";
  }

  function reseting(){
    let notification = document.getElementById("notificationReset");
    let bgNotification = document.getElementById("black")
    bgNotification.style.display = "block"
    notification.style.display = "flex";
    setTimeout(function(){
      closeReseting();
    }, 2000);
  }

  function closeReseting() {
    let notification = document.getElementById("notificationReset");
    let bgNotification = document.getElementById("black")
    bgNotification.style.display = "none";
    notification.style.display = "none";
  }
 
  function resetingRemoveFriend(){
    let notification = document.getElementById("notificationRemoveFriend");
    let bgNotification = document.getElementById("black")
    bgNotification.style.display = "block"
    notification.style.display = "flex";
    setTimeout(function(){
      closeResetingRemoveFriend();
    }, 2000);
  }

  function closeResetingRemoveFriend() {
    let notification = document.getElementById("notificationRemoveFriend");
    let bgNotification = document.getElementById("black")
    bgNotification.style.display = "none";
    notification.style.display = "none";
  }


  
  function resetingAll(){
    let notification = document.getElementById("notificationResetAll");
    let bgNotification = document.getElementById("black")
    resetItems();
    resetItems2();
    resetItems3();
    resetItems4();
    resetItems5();
    removeUserAll();
    resetElements();
    resetTotalPrice();
    resetSplitTitle();
    bgNotification.style.display = "block"
    notification.style.display = "flex";
    setTimeout(function(){
      closeResetingAll();
    }, 2000);
  }

  function removeUserAll() {
    let user3 = document.getElementById('user3');
    let user4 = document.getElementById('user4');
    let user5 = document.getElementById('user5');
    if (user5.style.display === 'block' || user5.style.display === '') {
      user5.style.display = 'none';
      } 
    if (user4.style.display === 'block' || user4.style.display === ''){
      user4.style.display = 'none';
    } 
    if (user3.style.display === 'block' || user3.style.display === ''){
      user3.style.display = 'none';
    }
}
  function closeResetingAll() {
    let notification = document.getElementById("notificationResetAll");
    let bgNotification = document.getElementById("black")
    bgNotification.style.display = "none";
    notification.style.display = "none";
  }
  
  function splitTitle(){
    const split = document.getElementById('spint')
    split.style.display = 'flex';
  }

  function resetSplitTitle(){
    const split = document.getElementById('spint')
    split.style.display = 'none';
  }