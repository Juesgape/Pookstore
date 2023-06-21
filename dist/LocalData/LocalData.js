class LocalData {
    constructor() {
    }
    getUser() {
        let info = localStorage.getItem('user');
        let infoObj;
        if (info !== null) {
            infoObj = JSON.parse(info);
        }
        else {
            window.location.href = '.././interface/login.html';
            throw new Error('El usuario no está registrado');
        }
        return infoObj;
    }
}
export { LocalData };
