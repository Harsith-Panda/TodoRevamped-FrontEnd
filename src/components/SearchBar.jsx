import { useState } from "react"
import Tasks from "./Tasks";

function SearchBar({content,setContent}) {
    function search(e) {
        setContent(e.target.value);
    }
    return (
        <div>
            <form>
                <input type="text" value={content} onChange={search}/>
                <button>🔎</button>
            </form>
        </div>
    )
}

export default SearchBar