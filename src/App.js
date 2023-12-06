import LoginForm from "./LoginForm";
import Greeting from "./Greeting";
function App() {
    
  let submitted = false;

  function handleOnSubmit(){
      submitted = true;
      console.log(submitted);
  }

  return (
        <div className="App">
            {/* Comment out last class code*/}

            {/* <h1>Hello React!</h1>
            <MyComponent />
            <MyComponent />
            <MyComponent /> */}

            <LoginForm onSubmit={handleOnSubmit}/>
            <Greeting />
        </div>
    );
}

export default App;