import { View } from "./view";

class TableView extends View {
    _data;
    _parentElement = document.querySelector('tbody');
    _sortBtnClicked;

    constructor() {
        super();
        this.addHandlerHideShowColumn();
    }

    addHandlerSort(handler) {
        const tableThis = this;
        const tableHeader = document.querySelector('thead');
        tableHeader.addEventListener('click', function (e) {
            const sortBtn = e.target.closest('.table-header__sort-icon');
            if (!sortBtn) return;
            if (tableThis._sortBtnClicked) {
                if (sortBtn.isSameNode(tableThis._sortBtnClicked)) return;
                tableThis._sortBtnClicked.classList.remove('table-header__sort-icon_clicked');
            }

            sortBtn.classList.add('table-header__sort-icon_clicked');
            tableThis._sortBtnClicked = sortBtn;
            const criteria = sortBtn.closest('.table-header').id;
            const direction = sortBtn.dataset.direction;
            handler(criteria, direction);
        });
    }

    addHandlerChangeRow(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const row = e.target.closest('.row');
            handler(row);
        })
    }

    addHandlerHideShowColumn() {
        const tableHeader = document.querySelector('thead');
        tableHeader.addEventListener('click', function (e) {
            const hideBtn = e.target.closest('.table-header__hide-icon');
            if (!hideBtn) return;
            const parent = hideBtn.closest('.table-header');
            if (hideBtn.classList.contains('bxs-hide')) {
                hideBtn.classList.remove('bxs-hide');
                hideBtn.classList.add('bxs-show');
                for (const cell of document.querySelectorAll(`.cell__${parent.id}`)) {
                    cell.style.visibility = 'hidden';
                }
            } else {
                hideBtn.classList.remove('bxs-show');
                hideBtn.classList.add('bxs-hide');
                for (const cell of document.querySelectorAll(`.cell__${parent.id}`)) {
                    cell.style.visibility = 'visible';
                }
            }
        })
    }

    _generateMarkup() {
        return this._data.map(this.generateRowMarkup).join('');
    }

    generateRowMarkup(user) {
        return `<tr class="row" data-id="${user.id}">
                    <td class="cell cell__firstName">${user.firstName}</td>
                    <td class="cell cell__lastName">${user.lastName}</td>
                    <td class="cell cell_short cell__about">${user.about}</td>
                    <td class="cell cell__eyeColor" style="background: ${user.eyeColor}"></td>
                </tr>
                <tr class="spacer">
                    <td colspan="5"></td>
                </tr>`
    }

}

export default new TableView();
