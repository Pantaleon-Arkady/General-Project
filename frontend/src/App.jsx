import './App.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function App() {

  return (
    <>
        <div>
            <Link to="/trials">Trials</Link>
            <Button variant="primary">Primary Button by react - bootstrap</Button>
            <button className="btn btn-primary">Primary Button by bootstrap</button>
        </div>
    </>
  )
}

export default App;
