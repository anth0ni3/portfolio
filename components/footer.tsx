import { constants } from '@/config'
import { Link } from '@/elements'

export const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer className="flex flex-col-reverse items-center justify-between gap-8 p-2 text-sm md:flex-row md:gap-32">
      <span className="text-default opacity-70">&copy; {year} Anthony Onu</span>

      <nav>
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {constants.links.external.map(({ name, link }) => (
            <li key={name} data-cursor-stick={'#link' + name} data-cursor="-exclusion -opaque -md">
              <Link href={link} id={'link' + name}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}
