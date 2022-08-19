import { tableGoods } from './elems.js';
import { currencyFormatUAH } from './utils.js';

const fillingRow = (goodsRow, {id, title, category, price}) => {
    goodsRow.innerHTML = `
        <td>${id}</td>
        <td>${title}</td>
        <td>${category}</td>
        <td class="text-end">${currencyFormatUAH(price)}</td>
        <td class="d-flex">
            <button class="btn-table btn-delete">
                <svg width="30" height="30">
                    <use xlink:href="#delete" />
                </svg>
            </button>
            <button class="btn-table btn-edit">
                <svg width="30" height="30">
                    <use xlink:href="#edit" />
                </svg>
            </button>
        </td>
    `;
    return goodsRow;
};

export const renderRow = (data) => {
    const goodsRow = document.createElement('tr');
    goodsRow.classList.add('table-row', 'table-goods-item');
    goodsRow.dataset.id = data.id;
    tableGoods.append(fillingRow(goodsRow, data));
    // tableGoods.insertAdjacentHTML('beforeend', `
    //     <tr class="table-row table-goods-item" data-id="${id}">
    //         <td>${id}</td>
    //         <td>${title}</td>
    //         <td>${category}</td>
    //         <td class="text-end">${currencyFormatUAH(price)}</td>
    //         <td class="d-flex">
    //             <button class="btn-table btn-delete">
    //             <svg width="30" height="30">
    //                 <use xlink:href="#delete" />
    //             </svg>
    //             </button>
    //         </td>
    //     </tr>
    // `);
};
export const editRow = (data) => {
    const goodsRow = document.querySelector(`[data-id='${data.id}']`);
    fillingRow(goodsRow, data);
};

export const tableRender = (goods) => {
    tableGoods.textContent = '';

    goods.forEach(renderRow);
};