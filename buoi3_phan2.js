function doSomething(callback) {
    console.log('Bắt đầu');
    // delay 2 giây
    //setTimeout(() => callback(), 2000)
    callback(5, 10)
}
function onSuccess() {
    console.log('Làm gì đó ở đây');
    console.log('Kết thúc');
};

function tinhTong(a, b) {
    console.log("Tổng 2 số là: " + (a + b))
};

// function tinhTong ((a, b) => {
//     // ...
// })
doSomething(tinhTong)


console.log('---------Test Promise--------')

let promise = new Promise(
    function (resolve, reject) {
        setTimeout(() => resolve("done!"), 1000);

    }
);
// resolve sẽ invoke then

promise.catch(error => console.log("Thất bại: ", error))

promise.then(result => console.log("Thành công ", result))
promise.finally(() => console.log('Hoàn thành promise'))

// console.log('---------Test Async / Await--------')

async function doSomething() {
    console.log('Tạo một Promise');

    //console.log(a)
    try {
        console.log(a)
    } catch (err) {
        console.log("Loi: " + err)
    }

    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve('Hoàn thành. Làm gì đó ở đây');
            reject('Loi mang')
        }, 1000);
    }).catch(function (err) {
        console.log(err)
    });
}