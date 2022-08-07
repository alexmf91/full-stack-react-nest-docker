import noisterLogo from '../assets/noister.svg'

export default function Footer() {
  return (
    <footer className="mt-auto flex justify-center py-4">
      <img className="w-16 py-2" src={noisterLogo} alt="noister-logo" />
    </footer>
  )
}
