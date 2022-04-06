import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

function ContainerUsers({users, page}) {

    const usersComponent = users.map((user) => 
        (
            <a  href={user.html_url}
                target="_blank"
                className={page === "home" ? 
                    "user-container user-container-home"
                    :
                    "user-container user-container-history"} 
                key={user.id}>
                <div className="img-login-container">
                    <img className="user-img" src={user.avatar_url}/>
                    <p className="user-login">{user.login}</p>
                </div>
                {page === "home"  && <OpenInNewOutlinedIcon className="arrow-icon"/>}
            </a>
        )
    )

    return(
        <div className={page === "home" ? 
                            "component-container-users-home" 
                            : 
                            "component-container-users-history"}>
            {
                usersComponent.length !== 0 
                ? 
                usersComponent
                : 
                <h3>No user match with the input</h3>
            }
        </div>
    )
} 

export default ContainerUsers