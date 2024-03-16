document.getElementById('calculateBtn').addEventListener('click', function() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    // var age = parseInt(document.getElementById('age').value);

    if (!isNaN(weight) && !isNaN(height) && height > 0 && weight > 0) {
        var bmi = calculateBMI(weight, height);
        var category = getBMICategory(bmi);
        document.getElementById('result').innerText =  + bmi.toFixed(2) +  "\n"+ category + ".";
    } else {
        document.getElementById('result').innerText = "Vui lòng nhập cân nặng và chiều cao hợp lệ.";
    }
});

function calculateBMI(weight, height) {
    var heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Dưới chuẩn";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Bình thường";
    } else if (bmi >= 25.0 && bmi < 29.9) {
        return "Thừa cân"
    }else if (bmi>=30 &&34.9){
        return "Béo phì cấp độ I ";
    }else if (bmi>=35.0 &&39.9){
        return "Béo phì cấp độ II ";
    }else if (bmi>=40.0){
        return "Béo phì cấp độ III ";
    }
     else {
        return "Béo phì";
    }
}

