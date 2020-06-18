let currNumber = '';
let preNumber = '';
let operation = '';
let result = document.getElementById("result");
//let equalRes = ''; // thêm dòng này 
let dotAllow = ' không cho phép ';
let isEqual = false;
// hiển thị số 
function onNumber(number) {

    isEqual = false;
    if (number == '.' && (dotAllow == 'đã nhập dấu chấm ' || dotAllow == ' không cho phép ')) return false;
    if (number == '.' && dotAllow == 'cho phép ') {
        dotAllow = 'đã nhập dấu chấm '
    }
    else {
        if (dotAllow == ' không cho phép ') {
            dotAllow = 'cho phép '
        };
    }

    currNumber = currNumber + number;
    onShow()
};

function onOpera(opera) {

    dotAllow = ' không cho phép ';
    if (!currNumber) return;
    if (preNumber && ((opera && !isEqual) || (isEqual))) {
        onSave();
    }
    // alert(currNumber);
    if (opera) operation = opera;
    // console.log(opera);
    preNumber = currNumber;
    // console.log(preNumber);
    if (!isEqual) currNumber = '';
    onShow();

}

function onSave() {
    let res = '';
    //  equalRes = '';// thêm dòng này 
    if (!preNumber || !currNumber) return;
    currNumber = parseFloat(currNumber);
    preNumber = parseFloat(preNumber);
    switch (operation) {
        case '+':
            res = preNumber + currNumber;
            break;
        case '-':
            res = preNumber - currNumber;
            break;
        case '*':
            res = preNumber * currNumber;
            break;
        case '/':
            res = preNumber / currNumber;
            break;

    }
    // equalRes = res;//thêm dòng này 
    currNumber = res;

    //	alert(equalRes);
    operation = '';
    preNumber = '';

}
// xóa 
function onReset() {
    dotAllow = ' không cho phép ';
    currNumber = '';
    preNumber = '';
    operation = '';
    result.value = '';
}

function onShow() {

    let res = currNumber + operation;
    // alert(res);
    if (operation && preNumber) res = preNumber + operation + currNumber;

    result.value = res;

}

// bấm dấu bằng
function onEqual() {
    isEqual = true;
    onOpera();
    preNumber = '';
    isEqual = false;
}
