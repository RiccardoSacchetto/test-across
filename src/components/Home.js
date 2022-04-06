import {useState} from "react";
import ContainerUsers from "./ContainerUsers";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import getCurrentDateTime from "../utilities/getCurrentDateTime";
import editSearchStorage from "../utilities/editSearchStorage"
import Skeleton from "./Skeleton";

function Home() {

    const [searchInput, setSearchInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isResponse, setIsResponse] = useState(false)
    const [users, setUsers] = useState([])

    async function searchGitHubUsers(key) {
        const response = await (await fetch(`https://api.github.com/search/users?q=${key}`)).json()
        const responseItems = response.items
        setUsers(responseItems)
        editSearchStorage(key, responseItems, getCurrentDateTime())
        setIsLoading(false)
        setIsResponse(true)
    }
    
    /* Functions to handle the input and submitting the form */
    function handleSearchChange(event) {
        const {value} = event.target
        setSearchInput(value) 
    }
    function handleSearchSubmit(event) {
        event.preventDefault()
        if(searchInput.trim() !== "") {
            setIsResponse(false)
            setIsLoading(true)
            searchGitHubUsers(searchInput)
        }
    }

    return (
        <div className="search-container">
            <div className="search-bar-container">
                <form onSubmit={handleSearchSubmit}>
                    <input 
                        type="text"
                        placeholder="Search username"
                        onChange={handleSearchChange}
                        name="inputUsers"
                        value={searchInput}>
                    </input>
                    <button>
                        <SearchRoundedIcon className="search-icon"/>
                    </button>
                </form>
            </div>
            {isResponse && <ContainerUsers page="home" users={users}/>}
            {isLoading && <Skeleton/>}
        </div>
    )
}

export default Home