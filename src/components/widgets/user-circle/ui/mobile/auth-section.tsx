import { Button } from "@/components/ui/button"

type Props = {
  loginLink?: string
}
const AuthSection = ({ loginLink='https://darkmaterial.space' }: Props) => {
  const defaultLoginLink = 'https://auth.darkmaterial.space/login?continue='
  const defaultSignUpLink = 'https://auth.darkmaterial.space/signup?continue='
  const sign_in_link = `${defaultLoginLink}${loginLink}`
  const sign_up_link = `${defaultSignUpLink}${loginLink}`
  return (
    <div className="w-full h-fit flex flex-col gap-2 mb-4">
      <Button asChild variant='outline'>
        <a href={sign_in_link}>Войти</a>
      </Button>
      <Button asChild variant='default'>
        <a href={sign_up_link}>Зарегистрироваться</a>
      </Button>
    </div>
  )
}

export default AuthSection