import { tableRender } from './tableView.js';
import { getGoods } from './serviceAPI.js';
import { modalController } from './modalContrller.js';
import { tableGoods } from './elems.js';
// import { modal, tableGoods } from './elems.js';

export const tableController = async () => {
    modalController({
        // modal,
        // classClose: 'btn-close',
        // classOpen: 'd-block',
        delegation: {
            parent: tableGoods,
            target: '.table-goods-item',
            targetExclude: '.btn-delete'
        }
    });

    const goods = await getGoods();
    tableRender(goods);
};