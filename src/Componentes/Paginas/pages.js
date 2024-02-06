import React from "react";

const Pages = (props) => {
    const { page, totalPages, onLeftClick, onRightClick } = props
    return (
        <div className="pages-container">
            <button onClick={onLeftClick}><div>◀️</div></button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}><div>▶️</div></button>
        </div>
    )
}

export default Pages