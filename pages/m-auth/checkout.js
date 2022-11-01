import redirect from 'nextjs-redirect'

const Redirect = redirect('https://github.com/pablopunk')

export default () => (
  <Redirect>
    {/* <MyLayout>Redirecting </MyLayout> */}
    <h1>Redirecting to Mpesa</h1>
  </Redirect>
)