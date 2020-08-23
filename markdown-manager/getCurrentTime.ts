export const getCurrentTime=():string=> {
    var now = new Date();
    var res = "" + now.getFullYear() + '-' + padZero(now.getMonth() + 1) + '-' + padZero(now.getDate()) + ' ' + padZero(now.getHours()) + ':' + padZero(now.getMinutes()) + ':' + padZero(now.getSeconds());
    return res;
}

//先頭ゼロ付加
const padZero=(num:number)=> {
    return (num < 10 ? "0" : "") + num;
}