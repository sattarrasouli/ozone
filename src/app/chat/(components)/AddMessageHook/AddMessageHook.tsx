import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Message {
    text: string;
    isSent: boolean
}

interface MessageContextType {
    messages: Message[];
    addMessage: (message: Message) => void;
}

const MessageContext = createContext<MessageContextType | undefined>(undefined);
const initialMessages: Message[] = [
    { text: 'Hi, how are you?', isSent: true },
    { text: 'I\'m doing well, thank you!', isSent: false },
    { text: 'Hi, how are you?', isSent: true },
    { text: 'I\'m doing well, thank you!', isSent: false },
    { text: 'Hi, how are you?', isSent: true },
    { text: 'I\'m doing well, thank you!', isSent: false },
    { text: 'Hi, how are you?', isSent: true },
    { text: 'I\'m doing well, thank you!', isSent: false },
    { text: 'Hi, how are you?', isSent: true },
    { text: 'I\'m doing well, thank you!', isSent: false },
    { text: 'Hi, how are you?', isSent: true },
    { text: 'I\'m doing well, thank you!', isSent: false },
    { text: 'Hi, how are you?', isSent: true },
    { text: 'I\'m doing well, thank you!', isSent: false },
];

export const MessageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [messages, setMessages] = useState<Message[]>(initialMessages);

    const addMessage = (message: Message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    const contextValue: MessageContextType = {
        messages,
        addMessage,
    };

    return (
        <MessageContext.Provider value={contextValue}>
            {children}
        </MessageContext.Provider>
    );
};

export const useMessageContext = (): MessageContextType => {
    const context = useContext(MessageContext);
    if (!context) {
        throw new Error('useMessageContext must be used within a MessageProvider');
    }
    return context;
};
