function CardPrice () {
    const price = 100;
    return (
        <div className="card-price">
            { `${ price } грн` }
        </div>
    )
}

export default CardPrice;