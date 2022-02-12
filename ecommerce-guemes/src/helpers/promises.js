export const task = new Promise((resolve, reject) => {
    resolve(true);
    //reject('Error message from reject');
})

export const productsAPI = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([
            {id: '1', name: 'angie', surname: 'guemes'},
            {id: '2', name: 'andy', surname: 'guemes'},
            {id: '3', name: 'jaime', surname: 'orozco'}
        ]);
    }, 3000);
});