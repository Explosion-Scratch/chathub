import { useAtom } from 'jotai'
import { FetchError } from 'ofetch'
import useSWR from 'swr'
import { licenseKeyAtom } from '~app/state'
import { clearLicenseInstances, getLicenseInstanceId, validateLicenseKey } from '~services/premium'

export function usePremium() {
  return {
    activated: true,
    isLoading: false,
  }
}
