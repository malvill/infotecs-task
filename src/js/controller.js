import * as model from "./model";
import tableView from './views/tableView';
import paginationView from "./views/paginationView";

function controlPagination(goToPage) {
    tableView.render(model.getUsersPage(goToPage));
    paginationView.render(model.state);
}

function controlSorting(criteria, direction) {
    model.sortUsers(criteria, direction);
    tableView.render(model.getUsersPage());
}

function init() {
    controlPagination(1);
    paginationView.addHandlerPageClick(controlPagination);
    tableView.addHandlerSort(controlSorting)
}

init()
