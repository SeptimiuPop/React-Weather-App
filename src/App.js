import logo from './logo.svg';
import './App.css';
import Search from './components/search/search';

function App() {
  
  const handleOnChange = (searchData) => {
    conlsole.log(searchData);
  }
  
  return (
    <div className="container">
      <Search onSearchChange={handelOnSearchChange}/>
    </div>
  );
}

export default App;
