import redirect from 'nextjs-redirect'

const Redirect = redirect('http://localhost:3005/auth/authenticator')

export default () => (
  <Redirect>
    {/* <MyLayout>Redirecting </MyLayout> */}
    <h1>Redirecting to Mpesa</h1>
  </Redirect>
)