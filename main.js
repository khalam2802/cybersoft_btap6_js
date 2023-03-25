// bài 1

function timSoNguyenDuong(){
    var soNguyenDuong=document.querySelector("#txtSoNguyenDuong").value*1;
   var sum = 0;
for(var i = 1; sum < soNguyenDuong; i ++){
    sum += i
}

document.getElementById("kqBai1").innerHTML=(i);
}

//bài 2

function tinhTong(){
    var sot1 = document.getElementById("txtSoThu1").value*1;
    var sot2= document.getElementById("txtSoThu2").value*1;
    var tong=0;
    for (var i=1;i<sot2;i++){
        tong +=Math.pow(sot1,sot2);
        
    }
    
    document.getElementById("kqBai2").innerHTML=`<h5>Tổng S là: ${tong}</h5>`

}

// bài 3

function tinhGiaiThua() {
  // Lấy giá trị của n từ phần tử input
  var n = document.getElementById("txtN").value;

  

  var giaiThua = 1;
  for (let i = 1; i <= n; i++) {
    giaiThua *= i;
  }

  document.getElementById("kqBai3").innerHTML = "Giai thừa của " + n + " là: " + giaiThua;
}

//  bài 4
function taoTheDiv() {
  var container = document.getElementById("taoThe");
  for (var i = 0; i < 10; i++) {
    var div = document.createElement("div");
    div.innerHTML = "Đây là thẻ div" + (i + 1);
    if (i%2==0){
        div.style.backgroundColor="green";
    }
    else {
        div.style.backgroundColor="red";
    }
    container.appendChild(div);
  }
}
