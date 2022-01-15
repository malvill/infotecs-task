import * as model from "./model";
import tableView from './views/tableView';
import paginationView from "./views/paginationView";
import formView from "./views/formView"

function controlPagination(goToPage) {
    tableView.render(model.getUsersPage(goToPage));
    paginationView.render(model.state);
}

function controlSorting(criteria, direction) {
    model.sortUsers(criteria, direction);
    tableView.render(model.getUsersPage());
}

function controlRowEdit(row) {
    formView.render(row);
    formView.addHandlerFormClick(userChanged => {
        model.updateUser(userChanged)
    })
}

function init() {
    controlPagination(1);
    paginationView.addHandlerPageClick(controlPagination);
    tableView.addHandlerSort(controlSorting);
    tableView.addHandlerChangeRow(controlRowEdit);
}

init()
