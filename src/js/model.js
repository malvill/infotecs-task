import data from '../data.json';


export const state = {
    users: [],
    page: 1,
    resultsPerPage: 10,
}

function transformUsersData() {
    // В изначальных данных был еще номер телефона, но по заданию он не понадобился
    state.users = data.map(user => {
        return {
            id: user.id,
            firstName: user.name.firstName,
            lastName: user.name.lastName,
            about: user.about,
            eyeColor: user.eyeColor
        }
    })
}

export function getUsersPage(page = state.page) {
    state.page = page;

    const start = (page - 1) * state.resultsPerPage;
    const end = page * state.resultsPerPage;

    return state.users.slice(start, end);
}

export function sortUsers(criteria, direction) {
    const orderNumber = direction === 'up' ? 1 : -1;
    state.users.sort((user1, user2) => {
        if (user1[criteria] < user2[criteria]) {
            return orderNumber;
        }
        if (user1[criteria] > user2[criteria]) {
            return -orderNumber;
        }
        return 0
    })
}

export function updateUser(userChanged) {
    let userToChange = state.users.find(user => user.id === userChanged.id);
    Object.assign(userToChange, userChanged);
}

transformUsersData();

