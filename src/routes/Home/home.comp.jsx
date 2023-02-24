import { useState } from 'react';
import '../Home/home.styles.scss';

// Images
import heroImage1 from '../../assets/home/desktop/image-hero-paramour.jpg';
import heroImage2 from '../../assets/home/desktop/image-hero-seraph.jpg';
import heroImage3 from '../../assets/home/desktop/image-hero-federal.jpg';
import heroImage4 from '../../assets/home/desktop/image-hero-trinity.jpg';
import iconArrow from '../../assets/icons/icon-arrow.svg';

export default function Home() {

    const heroData = {
        paramour: {
            header: "Project Paramour",
            description: "Project made for an art museum near Southwest London.  Project Paramour is a statement of bold, modern architecture.",
            image: heroImage1,
        },
        seraph: {
            header: "Seraph Station",
            description: "The Seraph Station project challenged us to design a unique station that would transport people through time.  The result is a fresh and futuristing model inspired by space stations.",
            image: heroImage2
        },
        federal: {
            header: "Federal II Tower",
            description: "A sequel theme project for a tower originally built in the 1800s.  We achieved this with a striking look of brutal minimalism with modern touches.",
            image: heroImage3
        },
        trinity: {
            header: "Trinity Bank Tower",
            description: "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earchquake frequency.  For this project we used curves to blend design and stability to meet our objectives.",
            image: heroImage4
        }
    }

    const [buttonState, setButtonState] = useState([
        {backgroundColor: 'black',
        color: 'white'},
    ]);

    const [heroImage, setHeroImage] = useState(heroData.paramour.image);
    const [heroDataHeader, setHeroDataHeader] = useState(heroData.paramour.header);
    const [heroDataDescription, setHeroDataDescription] = useState(heroData.paramour.description);

    const carouselHandler = (event) => {
        // Sets Hero Data
        let i = event.target.id;
        setHeroDataHeader(heroData[i].header);
        setHeroDataDescription(heroData[i].description);
        setHeroImage(heroData[i].image);
        // Button Styling
        var buttons = document.getElementsByClassName('carousel-button');
        for (var e = 0; e < buttons.length; e++) {
            buttons[e].classList.remove('clicked');
        }
        event.target.classList.add('clicked')
    }

    return(
        <div>
            <div className='page-container'>
                <div className='carousel-container'>
                    <div className='hero-data'>
                        <h1>{heroDataHeader}</h1>
                        <p>{heroDataDescription}</p>
                        <div className='button'>
                            <h4>See Our Portfolio</h4>
                            <img src={iconArrow}/>
                        </div>
                    </div>

                    <img src={heroImage} className='hero-image' alt='hero image'/>

                    <div className='carousel-buttons'>
                        <div className='button-container'>
                            <span 
                                onClick={carouselHandler} 
                                className='carousel-button clicked' 
                                id='paramour' 
                                value='0'
                            >01</span>

                            <span 
                                onClick={carouselHandler} 
                                className='carousel-button' 
                                id='seraph' 
                                value='1'
                            >02</span>

                            <span 
                                onClick={carouselHandler} 
                                className='carousel-button' 
                                id='federal' 
                                value='2'
                            >03</span>

                            <span 
                                onClick={carouselHandler} 
                                className='carousel-button' 
                                id='trinity' 
                                value='3'
                            >04</span>

                        </div>
                    </div>
                </div>
            </div>

            <div className='vert-container'>
                <span className='vert-line'></span>
                <p className='vert-text'>HOME</p>
            </div>
        </div>
    )
}