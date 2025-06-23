"use client"

import { Suggestion } from "../suggestions/Suggestion"
import { ChatHeader } from "../chatHeader/ChatHeader"
import style from "./Chat.module.css"
import { ChatMessage } from "../chatMessage/ChatMessage"
import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form";
import { useChatbot } from "@/hooks/useChatbot"

interface messageContent {
  bot?: true | false;
  content?: string;
  time?: string;
  confidence?: number
}

interface userInput {
  userMessage?: string;
  useSuggestion?: string;
}


export function Chat() {
  const [messages, setMessages] = useState<messageContent[]>([])
  const { register, handleSubmit, setValue, getValues, reset } = useForm<userInput>();
  const { detectIntent, getResponse } = useChatbot()

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const onSubmit = async (data: userInput) => {
    console.log("Dados enviados:", data);


    setMessages((prev) => [...prev, {
      bot: false,
      content: data.userMessage || data.useSuggestion,
      time: "agora"

    }])

    const intentData = await detectIntent(data.userMessage || data.useSuggestion || "");
    if (!intentData || intentData.confidence < 0.3) {
      setMessages((prev) => [...prev, {
        bot: true, content: `Não tenho certeza sobre a resposta para essa pergunta. 
                Se precisar de ajuda mais específica, recomendo entrar em contato com o professor responsável pelas ACCs do seu curso.`, time: "agora"
      }]);
    } else {
      const response = getResponse(intentData.intent);
      setMessages((prev) => [...prev, { bot: true, content: response, time: "agora", confidence: Math.round(intentData.confidence * 100) }]);
    }

    reset()
  };


  const handlSuggestion = (value = "") => {
    setValue("useSuggestion", value)

    onSubmit(getValues())
  }

  return (
    <div className={style.chatContainer}>
      <ChatHeader className={style.chatHeader} />

      <div className={style.chatMessages} style={{ overflowY: "auto" }}>
        {
          messages?.map((message, id) => (
            <ChatMessage
              key={id}
              title={message.bot ? "Assistente de ACCs" : "Você"}
              time="agora"
              avatar={message.bot ? true : false}
              className={message.bot ? style.botMessage : style.userMessage}
              message={message.content}
              confidence={message.confidence}
            />

          ))
        }
        <div ref={bottomRef} />
      </div>

      <div className={style.suggestions}>
        <input type="hidden" {...register("useSuggestion")} />
        <Suggestion handleSuggestion={handlSuggestion} value="O que são accs?" message="O que são accs?" />
        <Suggestion handleSuggestion={handlSuggestion} message="Como obter accs?" />
        <Suggestion handleSuggestion={handlSuggestion} message="Preciso validar minhas accs?" />
        <Suggestion handleSuggestion={handlSuggestion} message="Que projetos oferecem accs?" />
      </div>

      <div className={style.chatInput}>
        <input
          {...register("userMessage", { required: "" })}
          className={style.userInput} type="text"
          placeholder="Digite sua pergunta sobre ACCs..."
          onKeyDown={(e) => e.key === 'Enter' && onSubmit(getValues())}
          autoFocus />
        <button onClick={handleSubmit(onSubmit)} className={style.sendButton}>Enviar</button>
      </div>

    </div >
  )


}
