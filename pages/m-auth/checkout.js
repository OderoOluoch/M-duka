import redirect from 'nextjs-redirect'

const Redirect = redirect('https://m-auth-2.vercel.app/auth/checkout')


export default function Checkout() {
  return (
    <Redirect>
    {/* <MyLayout>Redirecting </MyLayout> */}
    <h1>Redirecting to Mpesa</h1>
  </Redirect>
  );
}