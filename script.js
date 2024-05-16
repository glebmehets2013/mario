let left = 0;
let bottom = 100;
let isJump = false;
let coins = 0;
let isGame = true;

function toRight() {}
let block = document.querySelectorAll(".block");

$("body").keyup(function (e) {
  if (isGame == true) {
    takeCoins();
    lava();
    let code = e.keyCode;
    //alert(code)
    if (code == 39) {
      // right
      left += 20;
      $(".mario").css("left", left + "px");
      $(".mario").css("transform", "scale(1, 1)");

      if (checkGameOver()) {
        return;
      }

      jump();
      $(".mario").css("bottom", bottom + "px");
    }

    if (code == 37) {
      // left
      left -= 20;
      $(".mario").css("left", left + "px");
      $(".mario").css("transform", "scale(-1, 1)");

      if (checkGameOver()) {
        return;
      }

      jump();
      $(".mario").css("bottom", bottom + "px");
    }

    if (code == 38) {
      // jump
      // bottom

      if (isJump == false) {
        if (left < 200) {
          bottom = 184+50;
          $(".mario").css("bottom", bottom + "px");
          setTimeout(function () {
            bottom = 184;
            $(".mario").css("bottom", bottom + "px");
          }, 500);
        }

        else if(left<310){
          bottom = 220+50;
          $(".mario").css("bottom", bottom + "px");
          setTimeout(function () {
            bottom = 220;
            $(".mario").css("bottom", bottom + "px");
          }, 500);

        }

       else if(left < 380 ) {
        bottom = 220+50;
        $(".mario").css("bottom", bottom + "px");
        setTimeout(function () {
          bottom = 220;
          $(".mario").css("bottom", bottom + "px");
        }, 500);
       }



       else if(left < 600 ) {
        bottom = 255+50;
        $(".mario").css("bottom", bottom + "px");
        setTimeout(function () {
          bottom = 255;
          $(".mario").css("bottom", bottom + "px");
        }, 500);
       }


       let cc = 0;

        const int = setInterval(function () {
          cc += 5;
          if (cc > 200) {
            clearInterval(int);
          }
          left += 3;
          $(".mario").css("left", left + "px");
        }, 5);

        $(".mario").css("bottom", bottom + "px");
        isJump = true;
        setTimeout(function () {
          if (checkGameOver()) {
            return;
          }
          console.log(left);

          jump();

          $(".mario").css("bottom", bottom + "px");
          isJump = false;
        }, 800);
      }
    }
  }
});

function checkGameOver() {
  if ((bottom > 130 && left < 40) || (left > 430 && left < 480)) {
    gameOver();
    return;
  }
}

function isBlock() {
  for (let i = 0; i < block.length; i++) {
    let blockBottom = parseInt(block[i].getBoundingClientRect().bottom);
    let blockLeft = parseInt(block[i].getBoundingClientRect().left);

    if (blockLeft - 75 < left) {
      return true;
    }
  }
  return false;
}
function takeCoins() {
  let coinsEl = document.getElementsByClassName("coins");
  for (let i = 0; i < coinsEl.length; i++) {
    let x = parseInt(coinsEl[i].getBoundingClientRect().left);
    let y = parseInt(coinsEl[i].getBoundingClientRect().bottom);

    if (x < left + 70) {
      coinsEl[i].remove();
      coins++;
      $(".dolar").text(coins);
      if (coins == 5) {
        $(".alert__win").css("display", "flex");
      }
    }
  }
}

function lava() {
  let lavaEl = document.getElementsByClassName("lava");
  for (let i = 0; i < lavaEl.length; i++) {
    let x = parseInt(lavaEl[i].getBoundingClientRect().left);
    let y = parseInt(lavaEl[i].getBoundingClientRect().bottom);

    if (x < left + 70 && bottom < 120) {
      gameOver();
      // lavaEl[i].remove()
      // lava ++
      // $('.dolar').text(lava)
    }
  }
}

function gameOver() {
  $(".alert__w").css("display", "flex");
  isGame = false;
  // $('.mario').css('display', 'none')
  $(".mario").css("bottom", "-100px");
}

setInterval(function () {
  $(".x").text(left);
  $(".y").text(bottom);
}, 100);

function jump() {
  // if (left > 80 && left < 220) {
  //   bottom = 185;
  // }
  // if (left > 340) {
  //   bottom -= 34;
  // }
}
