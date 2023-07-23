import { ofetch } from 'ofetch'

type ActivateResponse =
  | {
      activated: true
      instance: { id: string }
      meta: {
        product_id: number
      }
    }
  | { activated: false; error: string }

async function activateLicense(key: string, instanceName: string) {
  console.log("Activate license")
  return "c6bf21df-987b-4665-aa9f-1791a5efa0cf";
  const resp = await ofetch<ActivateResponse>('https://api.lemonsqueezy.com/v1/licenses/activate', {
    method: 'POST',
    body: {
      license_key: key,
      instance_name: instanceName,
    },
  })
  if (!resp.activated) {
    throw new Error(resp.error)
  }
  if (resp.meta.product_id !== 58153) {
    throw new Error('Unmatching product')
  }
  return resp.instance.id
}

async function deactivateLicense(key: string, instanceId: string) {
  return
  await ofetch('https://api.lemonsqueezy.com/v1/licenses/deactivate', {
    method: 'POST',
    body: {
      license_key: key,
      instance_id: instanceId,
    },
  })
}

type LicenseKey = {
  valid: boolean
}

async function validateLicense(key: string, instanceId: string): Promise<LicenseKey> {
  return { valid: true }
  const resp = await ofetch('https://api.lemonsqueezy.com/v1/licenses/validate', {
    method: 'POST',
    body: {
      license_key: key,
      instance_id: instanceId,
    },
  })
  return { valid: resp.valid }
}

export { activateLicense, deactivateLicense, validateLicense }
