import {mainStore} from "./redux/store";
import {TodoListContainer} from "./containers/TodoListContainer";
import {Footer} from "./component/Footer/Footer";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #3C9690;
    padding: 0;
    margin: 0;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`

function App() {
  return (
    <Container>
      <GlobalStyle/>
      <button className={"btn btn-success w-25 mt-4 mb-4"} onClick={() => console.log(mainStore.getState())}>Show Store</button>
      <TodoListContainer/>
      <Footer/>
    </Container>
  );
}

export default App;
