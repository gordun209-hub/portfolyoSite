import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = sanityClient({
  projectId: 'up7ezka8',
  dataset: 'production',
  apiVersion: '2020-02-01',
  useCdn: true,
  token:
    'skTgrBgn69MiS4J5UWHjv3oDrtlfzztahOP7e30a3mPjcfCJLFcHFgMs3W877QQP94eQ8hEKCU0YZIRnEg16q3CphKHJEd98Yl2yyIf16dzWWlWIls7dLIJS8pL7RwIFEapOpackicaYPd610J34GBT9W3Ibj4rTPXpmXrfVBNsVMKH0QPNF'
})

const builder = imageUrlBuilder(client)
export const urlFor = (source: SanityImageSource) => builder.image(source)
