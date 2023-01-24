import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App(props) {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting='soy el ItemListContainer'/>
    </>
  )
}

export default App
