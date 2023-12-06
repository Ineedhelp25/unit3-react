function LoginForm(props) {
    function handleSubmit(event) {
        const name = event.target.name.value;
        props.onSubmit(name);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your name" name="name"></input>
            <button type="submit"></button>
        </form>
    );
}

export default LoginForm;