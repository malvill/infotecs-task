import {View} from "./view";

class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');

    addHandlerPageClick(handler) {
        this._parentElement.addEventListener('click', function (e) {
            const button = e.target.closest('.btn');
            if (!button) return;
            const goToPage = button.dataset.goto;
            handler(goToPage);
        });
    }

    _generateMarkup() {
        const page = +this._data.page;
        const numPages = Math.ceil(
            this._data.users.length / this._data.resultsPerPage
        );
        // Первая страница, и есть еще страницы
        if (page === 1 && numPages > 1) {
            return `<button data-goto='${page + 1}' class='btn pagination__btn_next'>
                        <span class="btn__text">${page + 1}</span>
                    </button>`;
        }

        // Последняя страница
        if (page === numPages && numPages > 1) {
            return `<button data-goto='${page - 1}' class='btn pagination__btn_previous'>
                    <span class="btn__text">${page - 1}</span>
                </button>`;
        }

        // Любая страница между первой и последней
        if (page < numPages) {
            return `<button data-goto='${page - 1}' class='btn pagination__btn_previous'>
                        <span class="btn__text">${page - 1}</span>
                    </button>
                    <button data-goto='${page + 1}' class='btn pagination__btn_next'>
                        <span class="btn__text">${page + 1}</span>
                    </button>`
        }
    }
}

export default new PaginationView();
