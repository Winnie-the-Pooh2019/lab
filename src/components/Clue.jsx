export default function Clue(props) {
    const style = {
        color: '#ff0000'
    }

    return (
        <h2 style={style}>Задание № {props.taskList.join(', ')}</h2>
    );
}