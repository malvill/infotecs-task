import { View } from "./view";

class TableView extends View {
    _data;
    _parentElement = document.querySelector('tbody');
    _sortBtnClicked;

    addHandlerSort(handler) {
        const tableHeader = document.querySelector('thead');
        tableHeader.addEventListener('click', function (e) {
            const sortBtn = e.target.closest('.table-header__sort-icon');

            if (this._sortBtnClicked) {
                if (sortBtn.isSameNode(this._sortBtnClicked)) return;
                this._sortBtnClicked.classList.remove('table-header__sort-icon_clicked');
            }

            sortBtn.classList.add('table-header__sort-icon_clicked');
            this._sortBtnClicked = sortBtn;
            const criteria = sortBtn.closest('.table-header').id;
            const direction = sortBtn.dataset.direction;
            handler(criteria, direction);
        });
    }

    _generateMarkup() {
        return this._data.map(this._generateRowMarkup).join('');
    }

    _generateRowMarkup(user) {
        return `<tr class="row">
                    <td class="cell">${user.firstName}</td>
                    <td class="cell">${user.lastName}</td>
                    <td class="cell cell_short">${user.about}</td>
                    <td class="cell" style="background: ${user.eyeColor}"></td>
                </tr>
                <tr class="spacer">
                    <td colspan="5"></td>
                </tr>`
    }
}

export default new TableView();
