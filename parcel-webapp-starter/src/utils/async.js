const promiseMe = (returnMe, timeout) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(returnMe);
        }, timeout);
    });
};

const random = (max) => Math.ceil((Math.random() * max));

export { promiseMe, random };
