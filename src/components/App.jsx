import List from './List';
import Hello from "./Hello";
import Heading from "./Heading";
import MathShow from "./MathShow";
import Cards from "./Cards";
import Count from "./Count";
import Clock from "./Time";
import Last from "./Last";
import Clue from "./Clue";
import BonneJournee from "./BonneJournee";

export default function App() {
    const commonStyle = {
        color: '#293757',
        fontFamily: 'sans-serif',
        fontSize: '15pt',
        fontWeight: 900
    };

    return (
        <div style={commonStyle}>
            <Clue taskList={[1, 3, 4]}/>
            <Heading/>
            <List/>
            <List />

            <Clue taskList={[2]}/>
            <Hello />

            <Clue taskList={[5]}/>
            <MathShow/>

            <Clue taskList={[6]}/>
            <BonneJournee/>

            <Clue taskList={[7]}/>
            <Cards name="Beyonce"
                   photo="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
                   phone="+123 456 789"
                   email="b@beyonce.com"
            />
            <Cards name="Jack Bauer"
                   photo="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
                   phone="+987 654 321"
                   email="jack@nowhere.com"
            />
            <Cards name="Chuck Norris"
                   photo="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
                   phone="+918 372 574"
                   email="gmail@chucknorris.com"
            />

            <Clue taskList={[8]}/>
            <Count/>

            <Clue taskList={[9]}/>
            <Clock/>

            <Clue taskList={[10]}/>
            <Last/>
        </div>
    );
}