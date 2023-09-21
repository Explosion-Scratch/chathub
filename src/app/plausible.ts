import { isUndefined, omitBy } from 'lodash-es'
import Plausible from 'plausible-tracker'
import { getVersion } from '~utils'

export const plausible = Plausible({
  domain: 'chathub.gg',
  hashMode: true,
  apiHost: 'http://localhost:5555'
})

export function trackEvent(name: string, props?: { [propName: string]: string | number | boolean | undefined }) {
  return console.log("Blocked plausible", { name, props })
}
