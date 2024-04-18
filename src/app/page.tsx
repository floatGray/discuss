import { Button } from '@nextui-org/react';
import * as actions from '@/actions';
import { useSession } from 'next-auth/react';

export default function Home() {
  // const session = useSession();
  return (
    <>
      <form action={actions.signIn}>
        <Button type="submit">dianji</Button>
      </form>
      <form action={actions.signOut}>
        <Button type="submit">tuichu</Button>
      </form>
      {/* {session.data?.user ? (
        <div>{JSON.stringify(session.data)}</div>
      ) : (
        <div>asdfasdfasdfasdf</div> */}
      {/* )} */}
    </>
  );
}
