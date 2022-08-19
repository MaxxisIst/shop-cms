import { API_URI } from './const.js';
import { category, form, modal } from './elems.js';
import { closeModal } from './modalContrller.js';
import { showPreview } from './previewController.js';
import { editGoods, getCategory, getGoods, postGoods } from './serviceAPI.js';
import { editRow, renderRow } from './tableView.js';
import { toBase64, currencyFormatUAH } from './utils.js';

const updateCategory = async () => {
    category.textContent = '';
    const categoryList = await getCategory();
    const categoryOption = categoryList.map(cat => {
        const option = document.createElement('option');
        option.value = cat;
        return option;
    });
    category.append(...categoryOption);
};

export const formController = () => {
    updateCategory();
    form.addEventListener('submit', async event => {
        event.preventDefault();
        const formData = [...new FormData(form)];
        // const data = Object.fromEntries(formData);
        const data = {};
        for (const [key, value] of formData) {
            if (value) {
                data[key] = value;
            }
        }
        if (data.image.size) {
            data.image = await toBase64(data.image);
        } else {
            delete data.image;
        }
        if (data.imagesave) {
            const goods = await editGoods(data);
            editRow(goods);
        } else {
            const goods = await postGoods(data);
            renderRow(goods);
        }
        closeModal(modal, 'd-block');
        updateCategory();
    });
};

export const fillingForm = async (id) => {
const {title, category, description, display, price, image} = await getGoods(id);
form.title.value = title;
form.category.value = category;
form.description.value = description.join('\n');
form.display.value = display;
form.price.value = `${currencyFormatUAH(price)}`;
form.imagesave.value = image;
form.identificator.value = id;
showPreview(`${API_URI}${image}`);
};