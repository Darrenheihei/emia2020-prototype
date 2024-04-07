import React, {useState} from "react"
import SearchBar from "./SearchBar"
import BurgerMenu from "./BurgerMenu"
import ConvBlock from "./ConvBlock"
import "./style.css"

// how to upload to github: https://github.com/gitname/react-gh-pages?tab=readme-ov-file

export default function App(){
    const [conversations, setConversations] = useState([
        {user: "AI", content: "This is the chatbot for EMIA2020, you can ask me anything related to the topics mentioned in the course."}
    ])

    const convBlocks = conversations.map(data => {
        return <ConvBlock user={data.user} content={data.content} />
    })

    function AddNewConv(_user, _conv){ // conv means conversation
        setConversations(prevConv => [...prevConv, {user: _user, content: _conv}])
    }

    return (
        <div>
            {/* burger menu */}
            <BurgerMenu />
            {/* title */}
            <br />
            <h1 className="title">Name of the product</h1>
            {/* conversation history */}
            <br />
            <br />
            <div className="convContainer">
                {convBlocks}
            </div>
            {/* search bar */}
            <br />
            <br />
            <SearchBar AddNewConv={AddNewConv}/>
        </div>
    )
}
