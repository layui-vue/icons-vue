import container from 'markdown-it-container'
import type Token from 'markdown-it/lib/token'

type ContainerArgs = [
  typeof container,
  string,
  {
    render(tokens: Token[], idx: number): string
  }
]

export default function createContainer(
  klass: string,
  defaultTitle: string
): ContainerArgs {
  return [
    container,
    klass,
    {
      render(tokens, idx) {
        const token = tokens[idx]
        const info = token.info.trim().slice(klass.length).trim()
        if (token.nesting === 1) {
          return `<lay-table-box>${info}`
        } else {
          return '</lay-table-box>\n'
        }
      },
    },
  ]
}
