function check_pw(){  //비밀번호 확인
    var p = document.getElementById('password').value;
    var p2 = document.getElementById('password2').value;

    if (p!== p2) {
        alert("비밀번호가 다릅니다.");
        return false;
    }
    if (p === p2) {
        return true;
    }
}

function isValidForm () {
    if (check_pw()) {
        return true;
    }

    else {
        return false
    }
}