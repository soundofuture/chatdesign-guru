import { BackButton } from "@/components/BackButton";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

interface Ticket {
  id: number;
  title: string;
  status: "open" | "closed";
  messages: { content: string; isUser: boolean }[];
}

const Maintenance = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [newMessage, setNewMessage] = useState("");

  const createNewTicket = () => {
    const newTicket: Ticket = {
      id: tickets.length + 1,
      title: `Ticket #${tickets.length + 1}`,
      status: "open",
      messages: []
    };
    setTickets([...tickets, newTicket]);
    setSelectedTicket(newTicket);
  };

  const sendMessage = () => {
    if (!newMessage.trim() || !selectedTicket) return;

    const updatedTickets = tickets.map(ticket => {
      if (ticket.id === selectedTicket.id) {
        return {
          ...ticket,
          messages: [...ticket.messages, { content: newMessage, isUser: true }]
        };
      }
      return ticket;
    });

    setTickets(updatedTickets);
    setNewMessage("");
    
    // Simuler une réponse du support
    setTimeout(() => {
      const supportMessage = { content: "Merci pour votre message. Un conseiller va vous répondre dans les plus brefs délais.", isUser: false };
      setTickets(tickets.map(ticket => {
        if (ticket.id === selectedTicket.id) {
          return {
            ...ticket,
            messages: [...ticket.messages, { content: newMessage, isUser: true }, supportMessage]
          };
        }
        return ticket;
      }));
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col p-4 relative">
      <BackButton />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-1 gap-4 mt-16"
      >
        {/* Liste des tickets */}
        <div className="w-64 bg-dark-light rounded-lg p-4">
          <Button 
            className="w-full mb-4"
            onClick={createNewTicket}
          >
            Nouveau ticket
          </Button>
          <ScrollArea className="h-[calc(100vh-200px)]">
            {tickets.map(ticket => (
              <div
                key={ticket.id}
                className={`p-3 mb-2 rounded-md cursor-pointer transition-colors ${
                  selectedTicket?.id === ticket.id ? 'bg-primary/20' : 'hover:bg-dark-lighter'
                }`}
                onClick={() => setSelectedTicket(ticket)}
              >
                <h3 className="font-medium">{ticket.title}</h3>
                <span className={`text-sm ${
                  ticket.status === 'open' ? 'text-green-500' : 'text-gray-500'
                }`}>
                  {ticket.status}
                </span>
              </div>
            ))}
          </ScrollArea>
        </div>

        {/* Chat */}
        <div className="flex-1 bg-dark-light rounded-lg p-4 flex flex-col">
          {selectedTicket ? (
            <>
              <ScrollArea className="flex-1 mb-4">
                {selectedTicket.messages.map((message, index) => (
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
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400">
              Sélectionnez un ticket ou créez-en un nouveau
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Maintenance;