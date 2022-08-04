import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: () => ({
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    // storeDomain:
    //   // @ts-ignore
    //   Oxygen?.env?.SHOPIFY_STORE_DOMAIN || 'hydrogen-preview.myshopify.com',
    // storefrontToken:
    //   // @ts-ignore
    //   Oxygen?.env?.SHOPIFY_STOREFRONT_API_PUBLIC_TOKEN ||
    //   '3b580e70970c4528da70c98e097c2fa0',
    storeDomain: 'wuwei01.myshopify.com',
    storefrontToken: '1ad48a338f435c5b4b9f3f7625dd8ba2',
    storefrontApiVersion: '2022-07',
  }),
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
