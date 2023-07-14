import './App.css';
import GroupImage from './assets/PPImage.jpg'
function App() {
  return (
    <div className="container">
      <div className='back-ground'></div>
      <div className='chat-container'>
        <div className='user-container'>
          <div className="user-info">
            <img src={GroupImage} className="user-image" alt='Userphoto'></img>
            <div className="user-settings">
              <img src={GroupImage} className="user-image" alt='Userphoto'></img>
              <img src={GroupImage} className="user-image" alt='Userphoto'></img>
              <img src={GroupImage} className="user-image" alt='Userphoto'></img>
              <img src={GroupImage} className="user-image" alt='Userphoto'></img>
            </div>
          </div>
        </div>

        <div className='mensages-container'>

        </div>
      </div>
    </div>
  );
}

export default App;
