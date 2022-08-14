import {modalBtn} from './elems.js';
// import {modalBtn, modal} from './elems.js';
import { formController } from './formController.js';
import { modalController } from './modalContrller.js';
import { previewController } from './previewController.js';
import { tableController } from './tableController.js';

const init = () => {
    modalController({
        // modal,
        btn: modalBtn,
        // classOpen: 'd-block',
        // classClose: 'btn-close'
    });
    previewController();
    tableController();
    formController();
};

init();