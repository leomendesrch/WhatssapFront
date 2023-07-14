import './App.css';

import GroupImage from './assets/PPImage.jpg'
import FilterIcon from './assets/filter-results-button.png'
import SearchIcon from './assets/searchIcon.png'
import SettingsIcon from './assets/more.png'
import PeopleIcon from './assets/people.png'
import StatusIcon from './assets/status.png'
import CommentIcon from './assets/comment.png'
import SendIcon from './assets/send.png'
import LeoIcon from './assets/eu.png'

function App() {
  const ContactsArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]

  return (
    <div className="container">
      <div className='back-ground'></div>
      <div className='chat-container'>
        <div className='user-container'>
          {/* UserInfo */}
          <div className="user-info">
            <img src={LeoIcon} className="user-image" alt='Userphoto'></img>
            <div className="user-settings">
              <div className="icon-container">
                <img src={PeopleIcon} className="icon-image" alt='Userphoto'></img>
              </div>
              <div className="icon-container">
                <img src={StatusIcon} className="icon-image" alt='Userphoto'></img>
              </div>
              <div className="icon-container">
                <img src={CommentIcon} className="icon-image" alt='Userphoto'></img>
              </div>
              <div className="icon-container">
                <img src={SettingsIcon} className="icon-image" alt='Userphoto'></img>
              </div>
            </div>
          </div>

          {/* SearchBar */}
          <div className="search-container">
            <div className='search-input-container'>
              <img className='search-input-icon'src={SearchIcon} alt='search'></img>
              <input className="search-input" placeholder='Pesquisar ou começar uma nova conversa'></input>
            </div>
            <div className="search-filter-icon">
              <img src={FilterIcon} alt='Filter' className="filter-icon" />
            </div>
          </div>

          {/* ContactsMessages */}
          <div className="contacts-messages">
            {ContactsArray.map(() => (
                <div className="contact-message-item">
                  <div className="user-message-container">
                    <img src={GroupImage} alt="ProfilePic" className="contact-image" />
                    <div className="user-message-info">
                      <span className='title-message'>leo mendes</span>
                      <span className='last-message'>V (lastMessage)</span>
                    </div>
                  </div>

                  <div className="message-data">
                    <span className='last-message-time'>Ontem</span>
                    <span className='message-quantity'>1</span>
                  </div>
                  <div className="item-border-bottom"></div>
                </div>
                
            ))}
        </div>
        </div>


        <div className='mensages-container'>
          <header className='chat-header'>
            <div className="contact-message-item">
                <div className="user-message-container">
                  <img src={GroupImage} alt="ProfilePic" className="user-image" />
                  <div className="user-message-info">
                    <span className='title-message'>leo mendes</span>
                    <span className='last-message'>Mensagens para mim</span>
                  </div>
                </div>

                <div className='message-settings'>
                  <div className='icon-container'>
                    <img src={SearchIcon} alt="Search" className='icon-image' style={{ height: '18px' }}/>
                  </div>

                  <div className='icon-container'>
                    <img src={SettingsIcon} alt="Settings" className='icon-image' />
                  </div>
                </div>
            </div>
          </header>

          <div className="chat-messages-area">
              
          </div>

          <div className="chat-input-area">
            <input placeholder='Mensagem' className='chat-input'></input>
            <img src={SendIcon} alt='SendMessage' className='send-image'></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
