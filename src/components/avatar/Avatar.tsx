
interface AvatarProps {
  message?: string
  className?: string;
}

export function Avatar({ message, className }: AvatarProps) {
  return (
    <div className={className}>
      {message}
    </div>
  )
}
