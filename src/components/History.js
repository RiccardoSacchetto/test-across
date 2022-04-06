import {useEffect, useState} from 'react';
import ContainerUsers from './ContainerUsers';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function History() {

    const [historySearch, setHistorySearch] = useState([])
    const [showUsersSearch, setShowUsersSearch] = useState(new Array(10).fill(false))

    useEffect(() => {
        if(localStorage.getItem("historySearch") === null) { // Setting localStorage to an empty string to prevent problems with undefined
            localStorage.setItem("historySearch", JSON.stringify([]))
        }
        setHistorySearch(JSON.parse(localStorage.getItem("historySearch")))
    }, [])

    /*  Function to change the historySearch state to show only one list of users or close the one clicked
        it is also used when removeItemSearchStorage is called to set false that element in the state */
    function toggleShowUsersSearch(index) { 
        setShowUsersSearch(showUsersSearch.map((element, i) => {
                if(i === index) {
                    return !element    
                } else {
                    return false
                }
            }))
    }

    function removeItemSearchStorage(index) {
        const newHistorySearch = historySearch.filter((e, i) => i !== index)
        setHistorySearch(newHistorySearch)
        localStorage.setItem("historySearch", JSON.stringify(newHistorySearch))
        if(showUsersSearch[index]) {
            toggleShowUsersSearch(index)
        }
    }

    function deleteSearchStorage() {
        localStorage.removeItem("historySearch")
        setHistorySearch([])
    }

    const searchesComponent = historySearch.map((element, index) => 
        (
            <div className="history-element-container" key={index}>
                <div className="history-key-container">
                    <div 
                        className="history-toggle-container"
                        onClick={() => toggleShowUsersSearch(index)}>
                        <div className="history-key-time-container">
                            <p className="history-time">{element.time}</p>
                            <p className="history-key">{element.search}</p>

                        </div>
                        {showUsersSearch[index] ?
                            <KeyboardArrowUpIcon className="toggle-icon"/> 
                            :
                            <KeyboardArrowDownIcon className="toggle-icon"/>
                        }
                    </div>
                    <button  onClick={() => removeItemSearchStorage(index)}>
                        <DeleteOutlinedIcon className="delete-icon"/>
                    </button>
                </div>

                {showUsersSearch[index] &&
                    <ContainerUsers page="history" users={element.response}/>   
                }
            </div>
            
        )
    )

    return (
        <div className="history-container">
             {historySearch.length !=0 && searchesComponent}
            {historySearch.length != 0 &&
                <div className="delete-forever-container" onClick={deleteSearchStorage}>
                    <p>Clear history</p>
                    <DeleteForeverOutlinedIcon className="delete-forever-icon"/>
                </div>
            }   
        </div>
    )
}

export default History