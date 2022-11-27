const name = 'Владимир Владимирович';
const number = 7;

export default function Hello() {
    return (
        <div>
            <h3>Привет, {name}</h3>
            <p>Твое счастливое число это {number}</p>
        </div>
    );
}