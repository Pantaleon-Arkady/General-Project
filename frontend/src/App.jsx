import './App.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function App() {

  return (
    <>
        <div className="h-100 w-100 p-3 bg-white">
            <div className="h-100 border border-2 rounded bg-light p-3">
                <Link to="/trials" className="btn btn-primary">Trials</Link>
                <Button variant="primary">Primary Button by react - bootstrap</Button>
                <button className="btn btn-primary">Primary Button by bootstrap</button>
            </div>
        </div>
    </>
  )
}

export default App;
