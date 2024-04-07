import React, {useState} from "react"
import "./style.css"

export default function SearchBar(props){
    const [content, setContent] = useState("")
    
    function handleChange(event){
        setContent(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        // add user's question
        props.AddNewConv("User", content)
        // clear the text input area
        setContent("") 
        // add AI's response
        props.AddNewConv("AI", "Some response (include the response content and reference of the response, e.g. page number of the reference book)")
    }

    return (
        <div>
            <form className="SearchBarForm" onSubmit={handleSubmit}>
                <textarea 
                    placeholder="Ask your question here..."
                    className="SearchBar"
                    value={content}
                    onChange={handleChange}
                />
                <button className="submitButton">Ask!</button>
            </form>
        </div>
    )
}

