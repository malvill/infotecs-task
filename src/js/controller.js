import * as model from "./model";
import tableView from './views/tableView';
import paginationView from "./views/paginationView";

function controlPagination(goToPage) {
    tableView.render(model.getUsersPage(goToPage));
    paginationView.render(model.state);
}

function controlSorting(criteria, direction) {

}

function init() {
    controlPagination(1);
    tableView.addHandlerSort()
    paginationView.addHandlerPageClick(controlPagination);
}

init()
