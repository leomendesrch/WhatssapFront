import { IconContainer, IconImage, UserContainerComponent, UserImage, UserInfo, UserSettings, SearchContainer, SearchInputContainer, SearchInputIcon, SearchInput, SearchFilterIcon, FilterIconComponent, ContactsMessage, UserMessageContainer, ContactsMessageItem, ContactImage, UserMessageInfo, TitleMessage, LastMessage, MessageData, UnreadMessageQuantity, LastMessageTime, ItemBorderBottom } from './userContainer.style';

import GroupImage from '../../assets/PPImage.jpg'
import FilterIcon from '../../assets/filter-results-button.png'
import SearchIcon from '../../assets/searchIcon.png'
import SettingsIcon from '../../assets/more.png'
import PeopleIcon from '../../assets/people.png'
import StatusIcon from '../../assets/status.png'
import CommentIcon from '../../assets/comment.png'
import LeoIcon from '../../assets/eu.png'
import { UserContainerProps } from '../../types/user-container';

const ContactsArray = [0,0,0]

function UserContainer({ messages }: UserContainerProps){
  return(
    <>
    <UserContainerComponent>
          {/* UserInfo */}
          <UserInfo>
            <UserImage src={LeoIcon} alt="Userphoto"></UserImage>
            <UserSettings>
              <IconContainer>
                <IconImage src={PeopleIcon} alt="Userphoto"></IconImage>
              </IconContainer>

              <IconContainer>
                <IconImage src={StatusIcon}alt="StatusBtn"></IconImage>
              </IconContainer>

              <IconContainer>
                <IconImage src={CommentIcon}alt="CommentBtn"></IconImage>
              </IconContainer>

              <IconContainer>
                <IconImage src={SettingsIcon} alt="SettingsBtn"></IconImage>
              </IconContainer>
            </UserSettings>
          </UserInfo>

          {/* SearchBar */}
          <SearchContainer>
            <SearchInputContainer>
              <SearchInputIcon src={SearchIcon} alt="search"></SearchInputIcon>
              <SearchInput placeholder="Pesquisar ou começar uma nova conversa"></SearchInput>
            </SearchInputContainer>

            <SearchFilterIcon>
              <FilterIconComponent src={FilterIcon} alt="Filter" />
            </SearchFilterIcon>
          </SearchContainer>

          {/* ContactsMessages */}
          <ContactsMessage>
            {ContactsArray.map(() => (
                <ContactsMessageItem>
                  <UserMessageContainer>
                    <ContactImage src={GroupImage} alt="ProfilePic"/>
                    <UserMessageInfo>
                      <TitleMessage>Profissão Programador</TitleMessage>
                      <LastMessage>
                        <TitleMessage>
                          {
                            messages.length?
                            `${messages[messages.length - 1].name}: ${messages[messages.length - 1].message}` 
                            : 
                            ''
                          }
                        </TitleMessage>
                      </LastMessage>
                    </UserMessageInfo>
                  </UserMessageContainer>

                  <MessageData>
                    <LastMessageTime>Ontem</LastMessageTime>
                    <UnreadMessageQuantity></UnreadMessageQuantity>
                  </MessageData>
                  <ItemBorderBottom></ItemBorderBottom>
                </ContactsMessageItem>
            ))}
        </ContactsMessage>
        </UserContainerComponent>
    </>
  )
}

export default UserContainer