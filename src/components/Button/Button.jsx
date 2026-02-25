import './Button.css'

export default function Button ({color, title}){
    return (
        <button className={color}>
            {title}
        </button>
    )
}

