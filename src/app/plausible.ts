import Plausible from 'plausible-tracker'
import { getVersion } from '~utils'

export const plausible = Plausible({
  domain: 'chathub.gg',
  hashMode: true,
  apiHost: 'https://localhost:5935',
})

export function trackEvent(name: string, props?: { [propName: string]: string | number | boolean }) {
  return;
  try {
    plausible.trackEvent(name, {
      props: {
        version: getVersion(),
        ...(props || {}),
      },
    })
  } catch (err) {
    console.error('plausible.trackEvent error', err)
  }
}
