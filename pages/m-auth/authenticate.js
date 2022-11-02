import redirect from 'nextjs-redirect';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Authenticate() {
  const router = useRouter();
  const { query } = router;
  useEffect(() => {
    console.log('query', query);
  }, []);
  const Redirect = redirect(
    `http://localhost:3000/auth/authenticator?client_id=m-duka&redirect_uri=http://localhost:3005/authenticate/callback&state=${query.state}&scopesread:customer.info,authorize:transactions`
  );
  return (
    <Redirect>
      <h1>Redirecting to Mpesa</h1>
    </Redirect>
  );
}
