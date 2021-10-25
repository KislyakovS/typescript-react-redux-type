export const required = (value: string) => value ? void 0 : 'Value is requied';
export const minLength = (value: string) => value.length < 4 ? 'Value must be at least 4 characters long' : void 0;
export const maxLength = (value: string) => value.length > 10 ? 'Value is too long' : void 0;
export const matchesPassword = (value: string, allValues) => {
    return value === allValues.password ? void 0 : 'Password must match';
};
export const asyncValidate = (values) => {
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    return sleep(1000).then(() => {
        console.log('sleep');
        const db = ['oliver', 'andrii'];
        if(db.includes(values.username)) {
            return Promise.reject({
                username: 'Username already taken'
            });
        }
    });
}