import { ofetch } from 'ofetch'
import * as serverApi from '~services/server-api'
import { uuid } from '~utils'

async function activateLicense(key: string, instanceName: string) {
  return uuid();
}

async function deactivateLicense(key: string, instanceId: string) {
  return console.log("Deactivate license", { key, instanceId })
}

type LicenseKey = {
  valid: boolean
}

async function validateLicense(key: string, instanceId: string): Promise<LicenseKey> {
  console.log("Spoof validate", { key, instanceId})
  return { valid: true }
}

export { activateLicense, deactivateLicense, validateLicense }
