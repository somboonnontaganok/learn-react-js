import React from "react";

function MyProfile({ data }) {
    return (
        <div>
            <p>My Name is {data.firstName} {data.lastName}</p>
            <p><img src={data.imgPic} width="400"/></p>
        </div>
    )
}

export default MyProfile