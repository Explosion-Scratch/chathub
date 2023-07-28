import { DuckDuckGoSearch } from './duckduckgo'
import { truncate } from 'lodash-es'

const webSearch = new DuckDuckGoSearch()

export async function searchRelatedContext(query: string) {
  const result = await webSearch.search(query)
  console.debug('web search result', result.items.length)
  const context: string[] = []
  for (const item of result.items) {
    let chunk = item.title
    if (item.abstract) {
      chunk += '\n' + truncate(item.abstract, { length: 150 })
    }
    context.push(chunk)
  }
  return context.join('\n\n')
}
