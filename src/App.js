import './App.css';
import Form from './componets/Form';
import Header from './componets/Header';

function App() {
  return (
    <div className="App">
      <Header title="Cadastro de Licença" descricao="Preencha os campos a seguir:"/>
      <Form></Form>
    </div>
  );
}

export default App;
