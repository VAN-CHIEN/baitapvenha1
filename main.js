const infoId_nameHoa = document.getElementById('nameSp');
const giaCa = document.getElementById('giaSp');
const soLuongHoa = document.getElementById('soLuong');
const linkHoa = document.getElementById('imagesSp');
const addBtn = document.getElementById('submitSp'); 
let list =[];
addBtn.onclick =() => {
    let obInfo = {
       nameSP: infoId_nameHoa.value,
       giaCa: giaCa.value,
       soluong: soLuongHoa.value,
       anh: linkHoa.value
    }
    var getdulieuSp =localStorage.getItem("infoSp");
    if (getdulieuSp==null) {
        let list =[];

    } else {
        let list =JSON.parse(getdulieuSp);
    }
    list.push(obInfo);
    localStorage.setItem("infoSp",JSON.stringify(list));
    xhinfoSp()
    reset_form()
}

function xhinfoSp() {
    var getdulieuSp =localStorage.getItem("infoSp");
    if (getdulieuSp==null) {
        list =[];

    } else {
        list =JSON.parse(getdulieuSp);
    }
    let row ="";
    list.forEach((element,index) =>{
        row +=`
        <div class="card" style="width: 15rem; margin-bottom: 10px;">
                <p id="SpiD">${index}</p>
                <img src="${element.anh}" class="card-img-top" alt="...">
                <input type="button" value="x" class="deleteSp">
                <div class="card-body">
                    <h5 class="card-title">Tên sản phẩm:${element.nameSP}</h5>
                    <p class="card-text">Số lượng:${element.soluong}</p>
                    <p class="card-text">Giá sản phẩm:${element.giaCa}</p>
                    <input type="button" class="btn btn-primary clickAdd" value="Thêm vào giỏ hàng">
                </div>
            </div>
        `
    });
    document.getElementById('showSp').innerHTML = row;
    // DelSp = document.querySelectorAll('.deleteSp');
    // console.log(DelSp);
    // for (let u=0; u<DelSp.length;u++) {
    //     DelSp[u].addEventListener("click",function() {
    //         console.log(DelSp[u]);
    //     });
    // }
        var btnGio =document.querySelectorAll('.clickAdd');
        var dulieuSp =JSON.parse(localStorage.getItem("infoSp"));
        var hot = "";
        for (let y =0; y<btnGio.length;y++){
            btnGio[y].addEventListener("click",function() {
                for (z=0;z<dulieuSp.length;z++){
                    if (y ==z) {
                        hot+=`
                            <br>
                            <img src="${dulieuSp[z].anh}" width="50px" height="50px">
                            <span>Tên:${dulieuSp[z].nameSP}</span>
                            <div class="daNhap">
                                <span>Số lượng:1</span>
                                <span>Tổng giá:${dulieuSp[z].giaCa}</span>
                            </div>
                            <input type="button" value="Chỉnh sửa" class="editGio">
                            <br>------------------
                        `
                    }
                }
                document.getElementById('giogio').innerHTML= hot;
                var suaSp =document.querySelectorAll('.editGio');
                var slGia =document.querySelectorAll('.daNhap');
                for (let d =0;d<suaSp.length;d++){
                    suaSp[d].addEventListener("click",function() {
                        for (let f=0;f<slGia.length;f++){
                            if (f==d) {
                                slGia[f].innerHTML=`
                            <div class="daNhap">
                                <span>Số lượng:<input class="nhap1" type="number" size="10"></span>
                                <span>Giá:<input class="nhap2" type="number" size="10"></span>
                            </div>
                            <input type="button" value="Xong" class="hoantat">
                            `
                            }
                        
                        };
                        suaSp[d].style.display="none";
                        var xong =document.querySelectorAll('.hoantat');
                        var nhap1=document.querySelectorAll('.nhap1');
                        var nhap2=document.querySelectorAll('.nhap2');
                        for(let k=0;k<xong.length;k++) {
                            xong[k].addEventListener("click",function() {
                                suaSp[d].style.display="block";
                                xong[k].style.display="none";
                                for (let n =0; n<nhap1.length;n++){
                                    for (let m =0; m<nhap2.length;m++){
                                        for (let f=0;f<slGia.length;f++){
                                                slGia[f].innerHTML=`
                                            <div class="daNhap">
                                                <span>Số lượng:${nhap1[n].value}</span>
                                                <span>Giá:${nhap2[m].value}</span>
                                            </div>
                                            `
                                        };
                                    }
                                }
                            })
                        }
                        
                    });
                }
            });
        }
};
function reset_form() {
    infoId_nameHoa.value = '';
    giaCa.value = '';
    soLuongHoa.value = '';
    linkHoa.value = '';
    infoId_nameHoa.focus();
}
window.onload = () => {
    xhinfoSp();
}
//thêm sản phẩm vào giỏ

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
// Xử lý giỏ hàng
chonGio =function () {
    document.getElementById('top1').style.display="block";
}
var nutxoa = document.getElementById('deleteSp');
var nutaddSp =document.getElementById('submitSp');


