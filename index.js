var cnt=0;
var resultNum = " ";
var ranNum1,ranNum2,ranNum3;
var userNum1,userNum2,userNum3;
var userInputNum = [];
var scoreList=[];
var checkWin;
var compareNumberPush=-1;
//random 난 수 생성하기 
window.onload=function(){ 
    ranNum1=Math.floor((Math.random()*9)+1);
    ranNum2=Math.floor((Math.random()*9)+1);
    if(ranNum1 == ranNum2){//같은 수일 경우 다시 랜던 수 생성
        ranNum2=Math.floor((Math.random()*9)+1);
    }
    ranNum3=Math.floor((Math.random()*9)+1);
    if(ranNum1 == ranNum3 || ranNum2 ==ranNum3){//3번째 수가 두번 째나 첫 번째 수와 같다면 다시 생성 하게 한다. 
        ranNum3=Math.floor((Math.random()*9)+1);
    }
    console.log(ranNum1,ranNum2,ranNum3);
}

function selectNumber(num){// 이벤트 함수는 함수 이름+ 무슨이벤트  pick 잘 안쓴다. 대신 select 를 쓴다. 
    var tmpNum=document.getElementById(num).value;
    var NumONe=document.getElementById("inputNum1");
    var NumTwo=document.getElementById("inputNum2");
    var NumTree=document.getElementById("inputNum3");
    userInputNum[cnt] = tmpNum;
    if(cnt == 0){
        // NumONe.innerHTML= userInputNum[cnt];
        NumONe.innerHTML=userInputNum[cnt];
        cnt++;
    }else if(cnt == 1){
        NumTwo.innerHTML = userInputNum[cnt];
        cnt++;
    }else if(cnt == 2){
        NumTree.innerHTML = userInputNum[cnt];
        cnt++;
    }
}
//random 숫자와 사용자가 입력한 숫가 같은지를 보는 함수 
function compareNumbers(){//함수 이름  지금 처럼 하면 알아 보지 않는다. 
    compareNumberPush++;//비교 하는 함수 호 출 할때 마다 호출 한 번수를 기록 하기 위한 변수 
    userNum1=userInputNum[0];
    userNum2=userInputNum[1];
    userNum3=userInputNum[2];
    console.log(userNum1,userNum2,userNum3);

    if(ranNum1 == userNum1 && ranNum2 == userNum2 && ranNum3 ==userNum3){
        scoreList.push("3 strike!!");
        checkWin=true;
        userCheckWin(checkWin);
    }else if(ranNum1 == userNum1){
        if(ranNum2 == userNum3 && ranNum3 == userNum2){
            scoreList.push("1 strike 2 ball");
        }else if(ranNum2 == userNum2 || ranNum3 == userNum3){
            scoreList.push("2 strike");
        }else if(ranNum2 == userNum3 || ranNum3 == userNum2){
            scoreList.push("1 strike 1 ball");
        }else{
            scoreList.push("1 strike");
        } 

    }else if(ranNum2 == userNum2){
        if(ranNum1 == userNum3 && ranNum3 == userNum1){
            scoreList.push("1 strike 2 ball");
        }else if(ranNum1 == userNum3 || ranNum3 == userNum1){
            scoreList.push("1 strike 1 ball");
        }else if(ranNum1 == userNum1 || ranNum3 == userNum3){
            scoreList.push("2 strike");
        }else{
            scoreList.push("1 strike");
        } 
    }else if(ranNum3 == userNum3){
        if(ranNum1 == userNum2 && ranNum2 == userNum1){
            scoreList.push("1 strike 2 ball");
        }else if(ranNum1 == userNum2 || ranNum2 == userNum1){
            scoreList.push("1 strike 1 ball");
        }else if(ranNum1 == userNum1 || ranNum2 == userNum2){
            scoreList.push("2 strike");
        }else{
            scoreList.push("1 strike");
        } 
    }else if(ranNum1 == userNum2 && ranNum2 == userNum3 && ranNum3==userNum1){
        scoreList.push("3 ball");
    }else if(ranNum1 == userNum3 && ranNum2 == userNum1 || ranNum3==userNum1 && ranNum1 == userNum3 ||ranNum1 === userNum2 &&ranNum3==userNum1){
        scoreList.push("2 ball");
    }else if(ranNum1 == userNum1 || ranNum1 ==userNum2 || ranNum1 == userNum3){
        scoreList.push("1 ball");
    }else if(ranNum2 == userNum1 || ranNum2 ==userNum2 || ranNum2 ==userNum3){
        scoreList.push("1 ball");
    }else if(ranNum3 == userNum1 || ranNum3 ==userNum2 || ranNum3 == userNum3){
        scoreList.push("1 ball");
    }
    else{
        scoreList.push("0 strike 0 ball");
        // checkWin=false;
        // if(compareNumberPush == 7){
        //     userCheckWin(checkWin);
        // }
    }
    showScoreList(compareNumberPush);
    // 비워 주는 로직 3줄 추가  resultNum="" 추가 변수 3개로 만드는 것을 좋다. 
    if(compareNumberPush == 6){
        checkWin=false;
        userCheckWin(checkWin);
    }
    deletBotton();

}

function showScoreList(index){
    var tmpScor=document.getElementsByClassName("mainSectionTowListDiv")[index];
    tmpScor.innerHTML=scoreList[index];
}

function userCheckWin(Boolean){
    if(Boolean == true){
        document.getElementById("mainScectionTwoDivTitle").innerHTML="";
        document.getElementById("mainScectionTwoDivTitle").innerHTML="WIN!";
    }else{
        document.getElementById("mainScectionTwoDivTitle").innerHTML="";
        document.getElementById("mainScectionTwoDivTitle").innerHTML="FAIL!";
    }
}

function deletBotton(){
    document.getElementById("inputNum1").innerHTML=" ";
    document.getElementById("inputNum2").innerHTML=" ";
    document.getElementById("inputNum3").innerHTML=" ";
    userNum1 = 0;
    userNum2 = 0;
    userNum3 = 0;
    cnt=0;
    
}