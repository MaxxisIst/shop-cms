// import { form, modalTitle } from './elems.js';
import { form, modal, modalSubmitBtn, modalTitle } from './elems.js';
import { fillingForm } from './formController.js';
import { hidePreview } from './previewController.js';
// (modal, classOpen)
const openModal = (id) => {
    if (id) {
        fillingForm(id);
    }
    modal.classList.add('d-block');
};
// (modal, classOpen)
export const closeModal = () => {
    modal.classList.remove('d-block');
    form.reset();
    hidePreview();
};
// ({ modal, btn, classOpen, classClose, delegation })
export const modalController = ({ btn, delegation }) => {
    if (btn) {
        btn.addEventListener('click', () => {
            modalTitle.textContent = 'Добавить новый товар';
            modalSubmitBtn.textContent = 'Добавить товар';
            // openModal(modal, classOpen);
            openModal();
        });
    }
    if (delegation) {
        delegation.parent.addEventListener('click', ({target}) => {
            const goodsRow = target.closest(delegation.target);
            const targetExclude = target.closest(delegation.targetExclude);
            if (goodsRow && !targetExclude) {
                modalTitle.textContent = `Изменить товар #${goodsRow.dataset.id}`;
                modalSubmitBtn.textContent = 'Изменить товар';
                // openModal(modal, classOpen, goodsRow.dataset.id);
                openModal(goodsRow.dataset.id);
            }
        });
    }
    modal.addEventListener('click', ({target}) => {
        if (target === modal || target.classList.contains('btn-close')) {
            // closeModal(modal, classOpen);
            closeModal();
        }
    });
};