function calculate(){
     var a = parseFloat(document.getElementById("HS_a").value);
     var b = parseFloat(document.getElementById("HS_b").value);
     var resultElement = document.getElementById("result");
     if(isNaN(a) || isNaN(b)){
        resultElement.textContent = "Vui lòng nhập đúng giá trị a và b.";
     }else {
        if(a === 0 ){
            if(b === 0){
                resultElement.textContent = "Phương trình vô số nghiệm";
            }else{
                resultElement.textContent = "Phương trình vô nghiệm";
            }
        }else{
            var x = -b/a;
            resultElement.textContent = "Phương trình có nghiệm là x = "+x;
        }
     }
}