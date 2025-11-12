import LikeButton from "./like-button";

function Header({ title }) {
    return <h1>{title ? title : "Default Title"}</h1>;
}

export default function Homepage() {
    const names = ['John', 'Paul', 'George', 'Ringo'];

    return (
        <div>
            <Header title="Develop. Preview. Ship." />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <LikeButton />
        </div>
    );
}