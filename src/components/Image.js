
const Image = ({ image, alt }) => {
    return (
        <div>
            <img src={image} alt={`Author: ${alt}`} />
        </div>
    )
}

export default Image