import { Avatar } from "../avatar/Avatar";
import style from "./ChatMessage.module.css"

interface ChatMessageProps {
  className?: string;
  title?: string;
  time?: string;
  avatar?: true | false;
  message?: string;
  confidence?: number

}

export function ChatMessage({ className, title, time, avatar, message, confidence }: ChatMessageProps) {
  return (
    <div className={`${style.message} ${className}`}>

      <div className={style.messageHeader}>
        {avatar ? <Avatar className={style.botAvatar} message="AC" /> : ""}
        <strong>{title}</strong>
        <span className={style.messageTime}>{time}</span>

      </div>
      <p>
        {message}
      </p>

      {avatar ?
        <div className={style.confidenceMeter}>
          <span className={style.confidenceLabel}>Confiança:</span>
          <div className={style.confidenceBar}>
            <div className={style.confidenceFill}></div>
          </div>
          <span className={style.confidenceValue}>{confidence}</span>
        </div>
        : ""}

    </div >

  )
}
