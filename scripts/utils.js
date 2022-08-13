export const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener('loadend', () => {
            resolve(reader.result);
        });
        reader.addEventListener('error', (err) => {
            reject(err);
        });
        reader.readAsDataURL(file);
    });
};

export const currencyFormatUAH = (number) => {
    return new Intl.NumberFormat('ua-UA', {
        style: 'currency',
        currency: 'UAH',
        // maximumFractionDigits: 0
    }).format(number);
};