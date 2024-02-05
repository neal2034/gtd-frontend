import createAvatar from '@utils/createAvatar'
import Avatar, { Props as AvatarProps } from './Avatar'
interface IUser {
  photoURL?: string
  displayName: string
}
interface IAvatarProps extends AvatarProps {
  user?: IUser
}

export default function MyAvatar({ user, ...rest }: IAvatarProps) {
  return (
    <Avatar
      sx={{ width: 30, height: 30 }}
      src={user?.photoURL}
      alt={user?.displayName}
      color={user?.photoURL ? 'default' : createAvatar(user?.displayName || '').color}
      {...rest}
    >
      {createAvatar(user?.displayName || '').name}
    </Avatar>
  )
}
