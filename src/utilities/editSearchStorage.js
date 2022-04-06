/* Function to keep the storage of the searches to 10 results adding the last one in the beginning */
export default function editSearchStorage(user, responseItem, dateTime) {
    if(localStorage.getItem("historySearch") === null) {
        localStorage.setItem("historySearch", JSON.stringify([]))
    }
    const historySearch = JSON.parse(localStorage.getItem("historySearch"))
    if(historySearch.length === 10) {
        historySearch.pop()
    }
    const searchObj = {
        search: user,
        time: dateTime,
        response: responseItem
    }
    historySearch.unshift(searchObj)
    localStorage.setItem("historySearch", JSON.stringify(historySearch))
}