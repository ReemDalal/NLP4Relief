import { HStack, Input, Icon, IconButton } from '@chakra-ui/react'
import { IoMdSend } from 'react-icons/io'

import './index.css'

const Chat = () => {
  return (
    <div className="page-container">
      <div className="chat-container">
        <div className="chat">
          <div className="user-section">
            <div className="avatar" />
            <div className="user-text-bubble">
              Hello World!Hello World!Hello World!Hello World!Hello World!Hello
              World!Hello World!Hello World!Hello World!Hello World!Hello
              World!Hello World!Hello World!Hello World!Hello World!Hello
              World!Hello World!
            </div>
          </div>
          <div className="bot-section">
            <div className="avatar" />
            <div className="bot-text-bubble">
              Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello!
              Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello!
              Hello! Hello! Hello! Hello!Hello! Hello! Hello! Hello! Hello!
              Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello!
              Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello!
              Hello! Hello! Hello!
            </div>
          </div>
          <div className="user-section">
            <div className="avatar" />
            <div className="user-text-bubble">
              Hello World!Hello World!Hello World!Hello World!Hello World!Hello
              World!Hello World!Hello World!Hello World!Hello World!Hello
              World!Hello World!Hello World!Hello World!Hello World!Hello
              World!Hello World!
            </div>
          </div>
          <div className="bot-section">
            <div className="avatar" />
            <div className="bot-text-bubble">
              Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello!
              Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello!
              Hello! Hello! Hello! Hello!Hello! Hello! Hello! Hello! Hello!
              Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello!
              Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello!
              Hello! Hello! Hello!
            </div>
          </div>
          <div className="user-section">
            <div className="avatar" />
            <div className="user-text-bubble">
              Hello World!Hello World!Hello World!Hello World!Hello World!Hello
              World!Hello World!Hello World!Hello World!Hello World!Hello
              World!Hello World!Hello World!Hello World!Hello World!Hello
              World!Hello World!
            </div>
          </div>
          <div className="bot-section">
            <div className="avatar" />
            <div className="bot-text-bubble">
              Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello!
              Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello!
              Hello! Hello! Hello! Hello!Hello! Hello! Hello! Hello! Hello!
              Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello!
              Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello!
              Hello! Hello! Hello!
            </div>
          </div>
        </div>

        <HStack mt="24px" w="full">
          <Input />
          <IconButton>
            <IoMdSend color="black" />
          </IconButton>
        </HStack>
      </div>
      <div className="general-info-container">
        <p className="general-info-text">
          This is a bot to help you talk about your feelings, general guidelines
          blah blah blah{' '}
        </p>
      </div>
    </div>
  )
}

export default Chat
