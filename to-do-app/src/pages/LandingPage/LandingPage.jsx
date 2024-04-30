import './LandingPage.css';
import flower_2 from '../../assets/flower_2.png';


const LandingPage = () => {
    return (
        <div className='startContainer'>
            <h1 className='startText'>SEIZE THE DAY: POWER THROUGH TASKS WITH EASE</h1>
            <img src={flower_2} className='flower_2' alt="Metal flower" />
        </div>
    )
}

export default LandingPage;