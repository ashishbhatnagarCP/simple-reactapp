import "./Card.css"
const Card=(props)=> {
    const clasesApplied = 'card ' + props.className;
    return (<div className={clasesApplied}>{props.children}</div>);
}

export default Card;