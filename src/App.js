
import NavBar from './Components/NavBar';



function App() {
  const [page, setPage] = useState('home');
  return (

        <NavBar page={page} set={setPage} />
  );
}

export default App;

