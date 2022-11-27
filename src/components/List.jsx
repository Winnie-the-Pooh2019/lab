export default function List() {
    const foodList = ['Питса', 'Роллы', 'Котлетки с макаарошками', 'Нет с пюрешкой', 'Шава'];
    const listItems = foodList.map((food, index) => <li key={index}>{food}</li>);

    return (
        <ul>{listItems}</ul>
    );
}