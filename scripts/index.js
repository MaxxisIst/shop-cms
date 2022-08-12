import {modalBtn, modal} from './elems.js';
import { modalController } from './modalContrller.js';
import { previewController } from './previewController.js';

modalController({
    modal,
    btn: modalBtn,
    classOpen: 'd-block',
    classClose: 'btn-close'
});

previewController();