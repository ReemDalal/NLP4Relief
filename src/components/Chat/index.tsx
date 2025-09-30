import { HStack, IconButton, Image, VStack } from '@chakra-ui/react'
import { IoMdSend } from 'react-icons/io'
import BotImage from '../../assets/bot_avatar.jpg'
import UserImage from '../../assets/user_avatar_2.png'

import './index.css'
import { useEffect, useRef, useState } from 'react'
import InputEmojiWithRef from 'react-input-emoji'

const BotAvatar = () => {
  return <Image src={BotImage} boxSize="50px" borderRadius="full" />
}

const UserAvatar = () => {
  return <Image src={UserImage} boxSize="50px" borderRadius="full" />
}

const dummy_chat = [
  {
    type: 'user',
    message: 'Hello World!'
  },
  {
    type: 'bot',
    message: 'Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello!'
  }
]

const Chat = () => {
  const [message, setMessage] = useState('')
  const chatEndRef = useRef<HTMLDivElement>(null)
  const [chat, setChat] = useState(dummy_chat)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chat])

  return (
    <VStack
      h="100vh"
      w="100vw"
      p="16px"
      px="32px"
      alignItems="flex-start"
      gap={0}
    >
      {/* <Text textStyle="2xl" pl="16px" fontWeight="600" color="#1f4ead">
        Tell me what you're feeling
      </Text> */}
      <div className="page-container">
        <div className="chat-container">
          <div className="chat">
            {chat.map((message) => {
              return (
                <div className={`${message.type}-section`}>
                  {message.type === 'user' ? <UserAvatar /> : <BotAvatar />}
                  <div className={`${message.type}-text-bubble`}>
                    {message.message}
                  </div>
                </div>
              )
            })}
            <div ref={chatEndRef} />
          </div>

          <HStack
            mt="24px"
            w="full"
            px="16px"
            mb="16px"
            gap="0.5"
            alignItems="center"
            justifyContent="center"
          >
            <InputEmojiWithRef
              value={message}
              onChange={setMessage}
              cleanOnEnter
              onEnter={() => setChat([...chat, { type: 'user', message }])}
              placeholder="Type a message"
              shouldReturn={false}
              shouldConvertEmojiToImage={false}
            />

            <IconButton
              borderRadius="full"
              onClick={() => {
                setChat([...chat, { type: 'user', message }])
                setMessage('')
              }}
            >
              <IoMdSend color="black" />
            </IconButton>
          </HStack>
        </div>

        <div className="general-info-container">
          <VStack
            className="info-card"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <h2>💙 Welcome to NLP4Relief</h2>
            <p>
              NLP4Relief is a simple AI-powered space designed to support you
              when you’re feeling low.
            </p>
            <ul>
              <li>No history, no tracking — just a safe place to chat.</li>
              <li>Short, comforting conversations with an AI that listens.</li>
              <li>
                A tool to help you reflect, calm down, and feel a little
                lighter.
              </li>
            </ul>
            <div>
              <p className="disclaimer">
                This isn’t a replacement for professional care, but it can be a
                gentle companion when you need a moment of relief.
              </p>
              <div className="cta">
                ✨ Take a breath. Start chatting when you’re ready.
              </div>
            </div>
          </VStack>
        </div>
      </div>
    </VStack>
  )
}

export default Chat
