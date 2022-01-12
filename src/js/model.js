import data from '../data.json';


export const state = {
    users: data,
    page: 1,
    resultsPerPage: 10,
    sorting: {}
}

function transformUsersData() {
    state.users = data.map(user => {
        return {
            firstName: user.name.firstName,
            lastName: user.name.lastName,
            about: user.about,
            eyeColor: user.eyeColor
        }
    })
}

function addSortingState() {
    for (const prop in state.users) {
        state.sorting.prop = false;
    }
}

export function getUsersPage(page = state.page) {
    state.page = page;

    const start = (page - 1) * state.resultsPerPage;
    const end = page * state.resultsPerPage;

    return state.users.slice(start, end);
}

export function sortUsers(criteria, direction) {
    if (state.sorting[criteria] === direction) return

    const orderNumber = direction === 'up' ? 1 : -1;
    state.users.sort((user1, user2) => {
        if (user1[criteria] < user2[criteria]) {
            return orderNumber;
        }
        if (user1[criteria] < user2[criteria]) {
            return -orderNumber;
        }
        return 0
    })

}

transformUsersData();
addSortingState()
