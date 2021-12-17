$(document).ready(function() { alert('jQuery 사용 알림'); });

document.getElementById("submit").onclick = function () {
    let id = document.getElementById("username").value;
    let pw = document.getElementById("password").value;
    if (id.length === 0) {
        alert("아이디를 입력해주세요");
    }
    if (pw.length === 0) {
        alert("비밀번호를 입력해주세요")
    }
}