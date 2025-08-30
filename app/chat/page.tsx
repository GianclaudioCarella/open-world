"use client";
import Link from "next/link";
import { useState, useRef, useEffect, FormEvent } from "react";
import "../css/chat.css";

export default function ChatPage() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([
    { sender: "bot", text: "Bem Vindo! O que posso ajudar?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setInput("");
    setIsLoading(true);

    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    try {
      const response = await fetch("http://localhost:4280/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      if (!response.ok) throw new Error(`Function returned status ${response.status}`);
      const data = await response.json();
      setMessages((prev) => [...prev, { sender: data.sender, text: data.text }]);
    } catch {
      setMessages((prev) => [...prev, { sender: "bot", text: "Desculpe, estou desconectado no momento. Tente novamente mais tarde." }]);
    }
    setIsLoading(false);
  };

  return (
    <div className="chat-root">
      <header style={{ padding: "20px 0", textAlign: "center" }}>
        <h1>Open World &gt;&gt; Serviços especializado na área de comércio exterior</h1>
        <nav style={{ margin: "20px 0" }}>
          <Link href="/" className="home" style={{ marginRight: 16 }}>
            Página inicial
          </Link>
          <Link href="/sobre" style={{ marginRight: 16 }}>
            Sobre a Open World
          </Link>
          <Link href="/servicos" style={{ marginRight: 16 }}>
            Serviços
          </Link>
          <Link href="/links" style={{ marginRight: 16 }}>
            Links
          </Link>
          <Link href="/chat">Chat</Link>
        </nav>
      </header>
      {/* <div className="banner-internas" style={{ background: "#eee", padding: 16, textAlign: "center", marginBottom: 24 }}>
        <p>Banner interno</p>
      </div> */}
      <section style={{ flex: 1 }}>
        <div className="chat-container" style={{ maxWidth: 500, margin: "0 auto", background: "#fafafa", borderRadius: 8, boxShadow: "0 2px 8px #0001" }}>
          <div className="chat-messages" style={{ overflowY: "auto" }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chat-message ${msg.sender}`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="chat-message bot loading">
                <span>Pensando<span className="typing"></span></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form className="chat-input-container" onSubmit={sendMessage} style={{ display: "flex", gap: 8 }}>
            <input
              className="chat-input"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ flex: 1, padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
            />
            <button className="chat-send-btn" type="submit" style={{ padding: "8px 16px", borderRadius: 4, background: "#1976d2", color: "#fff", border: "none" }}>
              {isLoading ? "Enviando..." : "Send"}
            </button>
          </form>
        </div>
      </section>
      <footer style={{ textAlign: "center", padding: 24, background: "#eee", marginTop: 32 }}>
        <p>Todos os direitos reservados - Open World 2025</p>
        <a href="http://www.quedesign.com.br/" title="Desenvolvimento de websites" target="_blank" rel="noopener noreferrer">@quedesign</a>
      </footer>
    </div>
  );
}

