import { ToastMsg } from '../Style';

export const GetToast = (addToast, type, msg) => {
    addToast(<ToastMsg>{typeof msg === 'object' ? msg.error : msg}</ToastMsg>, { appearance: type, autoDismiss: true, autoDismissTimeout: 2000 });
};