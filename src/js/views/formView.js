import {View} from "./view";
import tableView from "./tableView";

class FormView extends View {
    _parentElement = document.querySelector('.table-edit');
    _curForm;

    render(data) {
        super.render(data);
        this._curForm = this._parentElement.querySelector('.table-edit__form');
    }

    addHandlerFormClick(handler) {
        const form = this._curForm;
        form.querySelector('.form__btn_cancel').addEventListener('click', function (e) {
            form.remove();
        })

        // Внутри event listener-а this не ссылается на экземпляр formView, поэтому пришлось использовать bind
        form.addEventListener('submit', updateUser.bind(this))

        function updateUser(e) {
                e.preventDefault();
                const userChanged = {};
                for (const [key, value] of new FormData(form)) {
                    userChanged[key] = value;
                };
                this.updateRow(userChanged);
                form.remove();
                handler(userChanged);
        }
    }

    updateRow (userChanged) {
        let rowMarkup = tableView.generateRowMarkup(userChanged);
        const spacerId = rowMarkup.match(/<tr class="spacer">/).index;
        rowMarkup = rowMarkup.slice(0, spacerId)
        let previous;
        if (this._data.previousSibling) {
            previous = this._data.previousSibling;
            this._data.remove();
            previous.insertAdjacentHTML('afterend', rowMarkup);
        } else {
            previous = this._data.parentElement
            this._data.remove();
            previous.insertAdjacentHTML('afterbegin', rowMarkup);
        }
    }

    _generateMarkup() {
        const rowFields = this._data.children;
        const user = {
            id: this._data.dataset.id,
            firstName: rowFields[0].textContent,
            lastName: rowFields[1].textContent,
            about: rowFields[2].textContent,
            eyeColor: rowFields[3].style.background,
        };
        // Получаем координаты ряда, чтобы отобразить форму примерно рядом с ним
        const yRow = this.getRowCoords(this._data).top;
        return `<form class="table-edit__form" id="${user.id}" style="top: ${yRow}px">
                    <input type="text" style="display: none"  value="${user.id}" name="id">
                    <div class="form__row">
                        <div class="form__column">
                            <label for="firstName" class="form__label">first name</label>
                            <input class="form__input" id="firstName" type="text" value="${user.firstName}" name="firstName">
                        </div>
                        <div class="form__column">
                            <label for="lastName" class="form__label">last name</label>
                            <input class="form__input" id="lastName" type="text" value="${user.lastName}" name="lastName">
                        </div>
                    </div>
                    <div class="form__column">
                        <label for="about" class="form__label">about</label>
                        <textarea id="about" class="form__input" name="about" id="" cols="30" rows="10">${user.about}</textarea>
                    </div>
                    <div class="form__column">
                        <label class="form__label">eye color</label>
                        <input class="form__input" type="text" value="${user.eyeColor}" name="eyeColor">
                    </div>
                    <div class="form__row">
                        <input class="btn form__btn form__btn_submit" type="submit" value="save changes">
                        <button class="btn form__btn form__btn_cancel" type="button">cancel</button>
                    </div>
                </form>`
    }

    getRowCoords(row) {
        let box = row.getBoundingClientRect();

        return {
            top: box.top + window.scrollY - row.offsetHeight * 1.5,
            right: box.right + window.scrollX,
            bottom: box.bottom + window.scrollY,
            left: box.left + window.scrollX
        };
    }
}

export default new FormView();

