import { tableRender } from './tableView.js';
import { getGoods, deleteGoods } from './serviceAPI.js';
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

    tableGoods.addEventListener('click', async ({target}) => {
        const delBtn = target.closest('.btn-delete');//при svg подняться до родителя для клика
        if (delBtn) {
            const row = delBtn.closest('.table-goods-item');
            const isDel = await deleteGoods(row.dataset.id);
            if (isDel) {
                row.remove();
            }
        }
    });

    const goods = await getGoods();
    tableRender(goods);
};