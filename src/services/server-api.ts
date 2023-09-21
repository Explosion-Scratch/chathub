import { ofetch } from 'ofetch'
import { uuid } from '~utils'

export async function decodePoeFormkey(headHtml: string): Promise<string> {
  const resp = await ofetch('https://chathub.gg/api/poe/decode-formkey', {
    method: 'POST',
    body: { headHtml },
  })
  return resp.formkey
}

type ActivateResponse =
  | {
    activated: true
    instance: { id: string }
    meta: { product_id: number }
  }
  | { activated: false; error: string }

export async function activateLicense(key: string, instanceName: string) {
  return {
    activated: true,
    instance: { id: uuid() },
    meta: { product_id: 1 },
  }
}

interface Product {
  price: number
}

export async function fetchPremiumProduct() {
  return { price: 0 }
}
