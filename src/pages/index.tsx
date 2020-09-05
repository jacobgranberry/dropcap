import useSWR from 'swr';
import Link from 'next/link';
import { useTheme } from '../contexts/themeContext';
import { Box } from 'rebass';
import { MainLayout } from '../components/layouts/mainLayout/mainLayout';

// const fetcher = (url: string, token: string) =>
//   fetch(url, {
//     method: 'GET',
//     headers: new Headers({ 'Content-Type': 'application/json', token }),
//     credentials: 'same-origin',
//   }).then((res) => res.json());

export const Home = (): JSX.Element => {
  const themeState = useTheme();

  // const { data, error } = useSWR(user ? ['/api/getFood', user.token] : null, fetcher);

  // if (!user) {
  //   return (
  //     <MainLayout>
  //       <button onClick={() => themeState.toggle()}>
  //         {themeState.dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
  //       </button>
  //       <p>Hi there!</p>
  //       <p>
  //         You are not signed in.{' '}
  //         <Link href={'/login'}>
  //           <a>Sign in</a>
  //         </Link>
  //       </p>
  //     </MainLayout>
  //   );
  // }

  return (
    <MainLayout>
      main layout
      {/* <p>You're signed in. Email: {user.email}</p> */}
      {/* {error && <div>Failed to fetch food!</div>}
      {data && !error ? <Box>Your favorite food is {data.food}.</Box> : <div>Loading...</div>} */}
    </MainLayout>
  );
};
export default Home;
