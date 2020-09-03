import useSWR from 'swr'
import Link from 'next/link'
import { useUser } from '../utils/hooks/useUser'
import { useTheme } from "../contexts/themeContext";
import { Box } from 'rebass';

const fetcher = (url: string, token: string) =>
  fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json', token }),
    credentials: 'same-origin',
  }).then((res) => res.json())

export const Home = (): JSX.Element => {
  const { user, logout } = useUser()
  const themeState = useTheme();
  const { data, error } = useSWR(
    user ? ['/api/getFood', user.token] : null,
    fetcher
  )
  if (!user) {
    return (
      <Box bg="background">
      <button onClick={() => themeState.toggle()}>
          {themeState.dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
        <p>Hi there!</p>
        <p>
          You are not signed in.{' '}
          <Link href={'/auth'}>
            <a>Sign in</a>
          </Link>
        </p>
      </Box>
    )
  }

  console.log(user)

  return (
    <Box bg="background">
      <div>
        <p>You're signed in. Email: {user.email}</p>
        <p
          style={{
            display: 'inline-block',
            color: 'blue',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
          onClick={() => logout()}
        >
          Log out
        </p>
      </div>
      <div>
        <Link href={'/example'}>
          <a>Another example page</a>
        </Link>
      </div>
      {error && <div>Failed to fetch food!</div>}
      {data && !error ? (
        <Box>Your favorite food is {data.food}.</Box>
      ) : (
        <div>Loading...</div>
      )}
    </Box>
  )

}
export default Home
