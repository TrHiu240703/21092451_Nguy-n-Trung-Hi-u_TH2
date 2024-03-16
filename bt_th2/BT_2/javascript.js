function showAlert(){
var showName = document.getElementById("fullname").value;
var showId = document.getElementById("id").value;
var showSTD = document.getElementById("std").value;
var showEmail = document.getElementById("email").value;
var showCLKH = document.getElementById("CLKH").value;
var showHD = document.getElementById("HD").value;
var showContent = document.getElementById("content").value;

if (showName && showId && showSTD && showEmail && showCLKH&& showHD && showContent) {
    confirm("Họ và tên: " + showName +  "\nMã thẻ: " + showId + "\nSố điện thoại: " + showSTD + "\nE-mail: " + showEmail + "\nLoại KH: "+ showCLKH + "\nMã HĐ: "+ showHD + "\nNội dung góp ý:\n"+ showContent)
}else{
    confirm("Vui lòng nhập đủ thông tin");
}

    
}