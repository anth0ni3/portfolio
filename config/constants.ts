import { env } from './env'

const profile = {
  name: 'Anthony Onu',
  title: 'Anthony Onu | Creative Developer',
  description:
    'Frontend developer and linux enthusiast interested in user/dev experience, design systems, statically typed languages and functional programming',
  image: '/images/cover.png',
  url: env.web.url,
  username: 'anthonie',
  links: {
    email: 'mailto:seboh44@gmail.com',
    github: 'https://github.com/atomslyte',
    twitter: 'https://twitter.com/anthonie',
    linkedin: 'https://linkedin.com/in/anthonie',
  },
}

export const constants = {
  profile,

  links: {
    internal: [
      { name: 'Home', link: '/' },
      { name: 'Blog', link: '/blog' },
      { name: 'Projects', link: '/projects' },
      { name: 'Uses', link: '/uses' },
    ],
    external: [
      { name: 'Email', link: profile.links.email },
      { name: 'GitHub', link: profile.links.github },
      { name: 'Twitter', link: profile.links.twitter },
      { name: 'LinkedIn', link: profile.links.linkedin },
    ],
  },

  projects: [
    {
      name: 'Credo',
      description: 'Fintech application',
      link: 'https://credocentral.com',
      using: ['TypeScript', 'React', 'Node.js', 'GraphQL', 'WebRTC'],
    },
    {
      name: 'Bosscab',
      description: 'Taxi Hailing app',
      link: 'https://bosscab-home.nugitech.com',
      using: ['TypeScript', 'React', 'React Router', 'Tailwind', 'Vite'],
    },
  ],

  uses: {
    environment: [
      { name: 'Arch', description: 'Lightweight Linux distribution', link: 'https://archlinux.org' },
      { name: 'Brave', description: 'Privacy focused web browser', link: 'https://brave.com' },
      { name: 'Fish', description: 'User friendly interactive shell', link: 'https://fishshell.com' },
      { name: 'Gnome', description: 'Desktop environment - Wayland', link: 'https://www.gnome.org' },
      { name: 'JetBrains', description: 'Font with ligatures support', link: 'https://www.jetbrains.com/lp/mono' },
      { name: 'Kitty', description: 'GPU accelerated terminal emulator', link: 'https://sw.kovidgoyal.net/kitty' },
      { name: 'Neovim', description: 'Vim-based text editor', link: 'https://neovim.io' },
      { name: 'Raycast', description: 'Better Spotlight - Productivity', link: 'https://www.raycast.com' },
      { name: 'Tmux', description: 'Terminal sessions management', link: 'https://github.com/tmux/tmux' },
    ],
    cli: [
      { name: 'FZF', description: 'General purpose fuzzy finder', link: 'https://github.com/junegunn/fzf' },
      { name: 'PNPM', description: 'JavaScript package manager', link: 'https://pnpm.io' },
      { name: 'Ripgrep', description: 'Better grep', link: 'https://github.com/BurntSushi/ripgrep' },
      { name: 'Slides', description: 'Terminal-based presentation', link: 'https://github.com/maaslalani/slides' },
      { name: 'Stow', description: 'Dotfiles management', link: 'https://www.gnu.org/software/stow' },
      { name: 'Vifm', description: 'Vim-based file manager', link: 'https://vifm.info' },
      { name: 'Volta', description: 'JavaScript tool manager', link: 'https://volta.sh' },
    ],
  },
}
