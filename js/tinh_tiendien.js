// Question1
function ketQua() {
    var ten = document.getElementById('ten').value;
    var soKw = document.getElementById('soKw').value;

    soKw = parseInt(soKw);

    var tongTien = 0;

    if (soKw <= 50){
        tongTien = soKw * 500;
    }
    else if (soKw <= 100) {
        tongTien = 50 * 500 + (soKw-50)*650;
    }
    else if (soKw <= 200) {
        tongTien = 50*(500 + 650) + (soKw-100)*850;
    }
    else if (soKw <= 350) {
        tongTien = 50*(500 + 650) + 100*850 + (soKw-200)*1100;
    }
    else if (soKw > 350) {
        tongTien = 50*(500 + 650) + 100*850 + 150*1100 + (soKw-350)*1300;
    }

    var question2__result = document.getElementById('question2__result');
    question2__result.style.display = 'block';

    var question2__resultspan = document.getElementById('question2__resultspan');
    question2__resultspan.innerHTML = tongTien;
}
