import React from 'react';



function Userblog(){
    return(
        <div className="m-4">
            <h2 className="text-xl border-b-2 border-green-500">Find your all blogs here!</h2>
            <div className="my-4 w-2/3">
                <h3 className="font-bold my-2 bg-gray-200 p-2">Blog title</h3>
                <p className="font-normal my-4 p-2 border-2 border-gray-200">Blog Description</p>
                <div>
                    <button className="px-3 py-1 bg-yellow-500 text-white rounded-sm hover:bg-yellow-600">Edit</button>
                    <button className="px-3 py-1 bg-red-500 text-white mx-4 rounded-sm hover:bg-red-600">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Userblog;