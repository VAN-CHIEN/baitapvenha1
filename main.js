var flower = function(name, money, quantity, images) {
    this.flowerName = name;
    this.flowerMoney =money;
    this.flowerQuantity =quantity;
    this.flowerImages =images;
}
var getdataSp =function(){
    document.getElementById('nameSp').value= "";
    document.getElementById('giaSp').value= "";
    document.getElementById('soLuong').value= "";
    document.getElementById('imagesSp').value= "";
}
var listSp = [];
var spId = "";
var inputSp = function() {
    var flSp = document.querySelectorAll('.nhaplieu input');
    let st = new flower(flSp[0].value,flSp[1].value,flSp[2].value,flSp[3].value);
    getdataSp();
    listSp.push(st);
    laydulieuSp();
}
var laydulieuSp = function() {
    var row ="";
    for (var index =0; index<listSp.length; index ++) {
        row +=`
        <div class="card" style="width: 18rem;margin-bottom: 10px;">
                <img src=${listSp[index].flowerImages} class="card-img-top" alt="...">
                <input type="button" value="x" id="deleteSp">
                <div class="card-body">
                    <h5 class="card-title"> ${listSp[index].flowerName}</h5>
                    <p class="card-text">Hiện có: ${listSp[index].flowerQuantity}</p>
                    <p class="card-text">Giá: ${listSp[index].flowerMoney} kVND</p>
                    <input type="button" class="btn btn-primary" id="addGio" value="Thêm vào giỏ hàng">
                </div>
            </div>
        `;
    }
    var khunganh =document.getElementById('showSp');
    khunganh.innerHTML=row;
}
// Xử lý modal nhập sản phẩm
var modal = document.getElementById('keybaner');
var inputXh =document.getElementById('xhForm');
var DongForm =document.getElementById('deleteNhap');
inputXh.onclick = function () {
    modal.style.display ="block";
    inputXh.style.display ="none";
}
DongForm.onclick =function() {
    modal.style.display ="none";
    inputXh.style.display ="block";
}
var nutxoa = document.getElementById('deleteSp');
var nutaddSp =document.getElementById('submitSp');
window.onload =function() {
    nutaddSp.onclick = inputSp;
}

