export default function Cards(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <img
                src={props.photo}
                alt="avatar_img"
            />
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>
    );
}