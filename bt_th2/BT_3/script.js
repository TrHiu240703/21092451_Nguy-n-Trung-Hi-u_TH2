function result(){
    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;

    if (name && email && title && content) {
        confirm("Họ và tên: " + name + "\nE-mail: " + email + "\nTiêu đề: "+ title + "\nNội dung góp ý:\n "+ content )
    }else{
        confirm("Vui lòng nhập đầy đủ thông tin!!!")
    }
}