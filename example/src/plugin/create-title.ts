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
          return `<lay-field title="${
            info || defaultTitle
          }" style="margin-top:20px;margin-bottom: 20px;">`
        } else {
          return '</lay-field>\n'
        }
      },
    },
  ]
}
