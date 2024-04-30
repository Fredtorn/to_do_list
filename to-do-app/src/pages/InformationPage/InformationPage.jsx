import './InformationPage.css';
import abstract from '../../assets/abstract.png';

const InformationPage = () => {
    return (
        <div className='informationContainer'>
            <div className='instructions'>
                <h1 className='infoText'>HOW TO DO TO DO'S:</h1>
                <ul>
                    <li>Go to TO DO in the meny</li>
                    <li>Type in your TO DO and press +</li>
                    <li>Do your TO DO</li>
                    <li>Check the box for your TO DO when finished</li>
                </ul>
            </div>
            <img src={abstract} alt="metal abstract" />
        </div>
    )
}

export default InformationPage;