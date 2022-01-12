import { View } from "./view";

class TableView extends View {
    _data;
    _parentElement = document.querySelector('tbody')



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
