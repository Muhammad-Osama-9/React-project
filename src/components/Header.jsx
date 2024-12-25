
import reactImg from '../assets/react-core-concepts.png';
import './Header.css'  



const reactRandomWords = ["Fundmental", "Crucial", "Core"];


function getRandomNumber(num) {
    return Math.floor(Math.random() * (num));
}


export default function Header() {
    let randomWord = reactRandomWords[getRandomNumber(3)];
    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {randomWord} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}