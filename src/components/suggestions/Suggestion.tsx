import styles from "./Suggestion.module.css"

interface SuggestionsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  message?: string;
  handleSuggestion: (suggestion?: string) => void;
}


export function Suggestion({ message, className = "", handleSuggestion, ...props }: SuggestionsProps) {

  return (
    <button onClick={() => handleSuggestion(message)} className={`${styles.suggestion} ${className}`} {...props}>
      {message}
    </button>
  )

}
