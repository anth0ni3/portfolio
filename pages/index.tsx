// import { Email, GitHub, Twitter } from '@/components'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Button, Document } from '@/components'
import { constants } from '@/config'
import { Link, List, ListItem } from '@/elements'
import { Page } from '@/layouts'

const keywords = 'personal, website, blog'

export default function Home() {
  const router = useRouter()
  return (
    <Page keywords={keywords}>
      <span className="rounded-full inline-block w-[44px] h-[44px]  bg-purple-500 overflow-hidden ">
        <Image
          src="https://avatars.githubusercontent.com/u/44031803?v=4"
          alt=""
          width={44}
          height={44}
          className="w-full h-full"
        />
      </span>
      <p className="text-md">Hello,</p>
      <h1 className="text-4xl font-semibold">I’m Anthony</h1>
      <p className="text-md  mb-10">Creative Developer</p>

      <section className="mt-8 space-y-2">
        <h2 className="text-md font-normal leading-loose sm:leading-loose text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh senectus enim tellus cursus. Erat nunc vitae
          tellus elit ornare dictum et. Amet arcu sed mauris, posuere nibh. Ipsum ullamcorper id elementum quam id
          tellus eget nulla. Volutpat ut ultricies feugiat gravida sit neque aliquam. Sagittis in est eu tellus mattis
          eget egestas vitae, felis.
        </h2>

        {/* <h3 className="text-md font-normal leading-loose sm:leading-loose">
          I <Link href={constants.profile.url + '/blog'}>blog</Link> about web development, tooling, linux and developer
          productivity.
        </h3> */}
        <div className="flex items-center justify-start">
          <Button
            text="Dowload Resume"
            onClick={() => router.push('/files/Anthony Developer Resume.docx')}
            className="bg-primary text-neutral"
            icon={<Document />}
          />
          {/* <Button text="Learn More" onClick={() => console.log('d')} className="bg-surface" /> */}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mt-28 text-2xl font-bold">Latest projects</h2>

        <List className="mt-12 list-none space-y-4">
          {constants.projects.slice(0, 3).map(({ name, description, link }) => (
            <ListItem key={name}>
              <Link href={link}>{name}</Link> — {description}
            </ListItem>
          ))}
        </List>

        <Link href="/projects" className="mt-10 inline-block font-medium">
          View all projects <span className="ml-2">{'-->'}</span>
        </Link>
      </section>
    </Page>
  )
}

// export const getStaticProps = async () => {
//   const { posts } = await getPostsMeta()

//   return { props: { posts } }
// }
