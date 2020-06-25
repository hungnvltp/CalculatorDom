let currNumber = '';
let preNumber = '';
let operation = '';
let result = document.getElementById("result");
let dotAllow = true;
let isEqual = false;
// hiển thị số 
function onNumber(number) {
    isEqual = false;
    if (number == '.' && !dotAllow) return false;
    if (number == '.' && dotAllow) {
        dotAllow = false;
    }

    currNumber = currNumber + number;
    onShow()
};
function onOpera(opera) {
    dotAllow = true;
    if (!currNumber) return;
    if (preNumber && ((opera && !isEqual) || (isEqual))) {
        onSave();
    }
    if (opera) operation = opera;
    preNumber = currNumber;
    if (!isEqual) currNumber = '';
    onShow();
}

function onSave() {
    let res = '';
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
    currNumber = res;
    operation = '';
    preNumber = '';
    res = '';

}
// xóa 
function onReset() {
    dotAllow = true;
    currNumber = '';
    preNumber = '';
    operation = '';
    result.value = '';
}

function onShow() {

    let res = currNumber + operation;
    if (operation && preNumber) res = preNumber + operation + currNumber;
    result.value = res;
}
// bấm dấu bằng
function onEqual() {

    isEqual = true;
    onOpera();
    preNumber = '';
    onSave();
    isEqual = false;

}
