import { BackButton } from "@/components/BackButton";
import { motion } from "framer-motion";
import { useState } from "react";
import { StylesGrid } from "@/components/StylesGrid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const Create = () => {
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [messages, setMessages] = useState<{ content: string; isUser: boolean }[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    setMessages([...messages, { content: newMessage, isUser: true }]);
    setNewMessage("");
    
    // Simuler une réponse de l'assistant
    setTimeout(() => {
      setMessages(prev => [...prev, {
        content: "Je suis là pour vous aider à créer votre site web. Que souhaitez-vous savoir ?",
        isUser: false
      }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col p-4 relative">
      <BackButton />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1"
      >
        {!selectedStyle ? (
          <>
            <h1 className="text-4xl font-bold gradient-text mb-8 text-center mt-16">
              Choisissez votre style
            </h1>
            <StylesGrid onSelect={setSelectedStyle} />
          </>
        ) : (
          <div className="flex flex-col h-[calc(100vh-100px)] mt-16">
            <h2 className="text-2xl font-bold mb-4">
              Chat de création - Style {selectedStyle}
            </h2>
            <div className="flex-1 bg-dark-light rounded-lg p-4 flex flex-col">
              <ScrollArea className="flex-1 mb-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-4 ${
                      message.isUser ? 'text-right' : 'text-left'
                    }`}
                  >
                    <div
                      className={`inline-block p-3 rounded-lg ${
                        message.isUser
                          ? 'bg-primary text-white'
                          : 'bg-dark-lighter text-white'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
              </ScrollArea>
              <div className="flex gap-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Votre message..."
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <Button onClick={sendMessage}>Envoyer</Button>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Create;