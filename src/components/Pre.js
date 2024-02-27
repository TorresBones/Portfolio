import React from "react";

function Pre(props) {
    return <div id={props.load ? "preloader" : "preloaded-none"}>
    </div>;
}

export default Pre;