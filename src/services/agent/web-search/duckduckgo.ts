import { ofetch } from 'ofetch'
import WebSearch, { SearchResult } from './base'

export class DuckDuckGoSearch extends WebSearch {
  async search(query: string): Promise<SearchResult> {
    const html = await this.fetchSerp(query)
    const items = this.extractItems(html)
    return { items }
  }

  private async fetchSerp(query: string) {
    const html = await ofetch('https://html.duckduckgo.com/html/', {
      method: 'POST',
      body: new URLSearchParams({ q: query, df: 'y' }),
    })
    return html
  }

  private extractItems(html: string) {
    // TODO: .zci-wrapper
    const dom = new DOMParser().parseFromString(html, 'text/html')
    const nodes = dom.querySelectorAll('.results_links')
    return Array.from(nodes)
      .slice(10)
      .map((node) => {
        const nodeA = node.querySelector('.result__a')!
        const link = nodeA.getAttribute('href')!
        const title = nodeA.textContent || ''
        const nodeAbstract = node.querySelector('.result__snippet')
        const abstract = nodeAbstract?.textContent || ''
        return { title, link, abstract }
      })
  }
}
