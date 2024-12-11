import { useState, useEffect } from "react";
import Image from '../components/Image'

const Home = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://picsum.photos/v2/list?page=3 &limit=100')
            .then(response => response.json())
            .then(data => {
                setImages(data);
                console.log(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching images:', error);
                setLoading(false);
            });
    }, []);
    return (
        <>
            <h1>Welcome to my Gallery</h1>
            {loading ? (
                <p>Loading images...</p>
            ) : (<div className="gallery">
                {images.map((image, index) => (
                    <Image key={index} image={image.download_url} alt={image.author} />
                ))}
            </div>)
            }
        </>
    )
}

export default Home