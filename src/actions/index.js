export const setCities = (city) => {
    let payload = {
        city: city
    }
    return {
        type: "CITY",
        payload
    }
}

export const setSearch = (search) => {
    let payload = {
        search: search
    }
    return {
        type: "SEARCH",
        payload
    }
}