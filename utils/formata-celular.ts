// @ts-nocheck
import StringMask from 'string-mask'
const formatter = new StringMask('+00 (00) 00000-0000')

export function formataCelular(phoneNumber: string) {
  return formatter.apply(phoneNumber)
}
