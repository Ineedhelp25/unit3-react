// Greeting component that receives a 'name' prop
const Greeting = (props) => {
    return (
        <div>
            <h2>Hello, {props.name}!</h2>
            <p>Welcome to our website.</p>
        </div>
    );
};

// ParentComponent passing a 'name' prop to Greeting
function ParentComponent() {
    return (
        <div>
            <Greeting name="Alice" />
        </div>
    );
}

export default Greeting;