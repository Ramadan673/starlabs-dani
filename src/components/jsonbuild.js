import React from "react"
import JSONData from "../../content/dhena"

const jsonbuild = () => (
    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
        <h1>{JSONData.title}</h1>
        <ul>
            {JSONData.content.map((data, index) => {
                return <li key={`content_item_${index}`}>{data.item}</li>
            })}
        </ul>
    </div>
)
export default jsonbuild