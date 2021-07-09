// Question1
function ketQua() {
    var toan = document.getElementById('toan').value;
    var van = document.getElementById('van').value;
    var anhVan = document.getElementById('anhVan').value;

    var diemChuan = document.getElementById('diemChuan').value;
    var khuVuc = document.querySelector('input[type="radio"][name="khuVuc"]:checked').value;
    var doiTuong = document.querySelector('input[type="radio"][name="doiTuong"]:checked').value;


    toan = parseInt(toan);
    van = parseInt(van);
    anhVan = parseInt(anhVan);

    diemChuan = parseInt(diemChuan);
    console.log(diemChuan);
    doiTuong = parseInt(doiTuong);

    var ketQua = '';
    var tongDiem = 0;

    var diem_khuVuc = 0
    switch (khuVuc){
        case 'A':
            diem_khuVuc = 2;
            break;
        case 'B':
            diem_khuVuc = 1;
            break;
        case 'C':
            diem_khuVuc = 0.5;
            break;
        case 'x':
            diem_khuVuc = 0;
            break;
    }

    var diem_doiTuong = 0
    switch (doiTuong){
        case 1:
            diem_doiTuong = 2.5;
            break;
        case 2:
            diem_doiTuong = 1.5;
            break;
        case 3:
            diem_doiTuong = 1;
            break;
        case 0:
            diem_doiTuong = 0;
            break;
    }
  
    tongDiem = toan + van + anhVan + diem_khuVuc + diem_doiTuong;

    console.log(tongDiem);

    if (toan == 0 || van == 0 || anhVan == 0){
        ketQua = 'Rớt';
        console.log(ketQua);
    }else{
        if (tongDiem >= diemChuan){
            ketQua = 'Đậu';
            console.log(ketQua);
        }else{
            ketQua = 'Rớt';
            console.log(ketQua);
        }
    }

    var question1__result = document.getElementById('question1__result');
    question1__result.style.display = 'block';

    var question1__resultspan1 = document.getElementById('question1__resultspan1');
    question1__resultspan1.innerHTML = ketQua;

    var question1__resultspan2 = document.getElementById('question1__resultspan2');
    question1__resultspan2.innerHTML = tongDiem;
}
