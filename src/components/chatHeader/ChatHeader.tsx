import Image from 'next/image'
import { ReactNode } from 'react';
import style from "./ChatHeader.module.css"

interface HeaderProps {
  children?: ReactNode;
  className?: string;

}

export function ChatHeader({ children, className = "" }: HeaderProps) {

  return (
    <div className={`${style.chatHeader} ${className}`}>
      <Image src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png" width={40} height={40} alt="Chatbot Icon" />
      <h2>Assistente de ACCs</h2>
      {children}
    </div>
  )
}
