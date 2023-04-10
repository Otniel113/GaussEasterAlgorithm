function cekValid(){
    var year = document.getElementById("year").value;

    if (year === ""){
        alert("Anda belum memasukkan apa-apa");
    }else{
        if (year < 0){
            alert("Tolong masukkan tahun lebih besar daripada 0");
        }else{
            year = parseInt(year);
            var easter = calculateEaster(year);
            output = "Paskah dirayakan pada tanggal: " + easter;
            alert(output);
        }
    }
}

function calculateEaster(Y){
    let A, B, C, P, Q, M, N, D, E;

    A = Y % 19;
    B = Y % 4;
    C = Y % 7;
    P = Math.floor(Y / 100.0);
 
    Q = Math.floor((13 + 8 * P) / 25.0);
    M = Math.floor(15 - Q + P - Math.floor(P / 4)) % 30;
    N = Math.floor(4 + P - Math.floor(P / 4)) % 7;
    D = Math.floor(19 * A + M) % 30;
    E = Math.floor(2 * B + 4 * C + 6 * D + N) % 7;
 
    let days = Math.floor(22 + D + E);


    if ((D == 29) && (E == 6)) {
        return ("19 April " + Y);
    }

    else if ((D == 28) && (E == 6)) {
        return ("18 April " + Y);
    }
    else {
        if (days > 31) {
            return ((days - 31) + " April " + Y);
        }
        else {
            return (days + " Maret " + Y);
        }
    }
}