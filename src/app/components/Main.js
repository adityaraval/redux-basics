import React from 'react';

export const Main = (props) => {
        return(
            <div>
            <h1>Main Page</h1>
            <button
                className="btn btn-primary"
                onClick={()=>props.changeUsername()}>click here</button>
            </div>
        );
};