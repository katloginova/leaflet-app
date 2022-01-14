function CardDescription () {
    const title = 'title';
    const describe = 'describe';

    return (
        <div className="card__desription card-description">
            <div className="card-description__title">{ title }</div>
            <div className="card-description__describe">{ describe }</div>
        </div>
    )
}

export default CardDescription;