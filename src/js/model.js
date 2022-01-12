import data from '../data.json';


export const state = {
    users: data,
    page: 1,
    resultsPerPage: 10,
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

export function getUsersPage(page = state.page) {
    state.page = page;

    const start = (page - 1) * state.resultsPerPage;
    const end = page * state.resultsPerPage;

    return state.users.slice(start, end);
}

transformUsersData()
