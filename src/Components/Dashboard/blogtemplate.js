import React from 'react';


function BlogTemplate(){
    return(
        <div>
            <form className="flex flex-col m-4 w-2/3">
                <input type="text" placeholder="Title" className="my-2 p-2 focus:border-black border-2" autoFocus />
                <textarea rows="5" className="focus:border-black border-2 resize-none p-2" placeholder="Blog description">Blog Description</textarea>
                <button type="submit" className="my-2 bg-green-400 w-28 py-2 rounded-sm hover:bg-green-600">Create a New </button>
            </form>
        </div>
    )
}

export default BlogTemplate;