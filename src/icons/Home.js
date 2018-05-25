// @flow

import React from 'react'

const path = (
  <path d="m8.261 2.252a1.11 1.11 0 0 0-1.408 0l-6.772 5.545a0.224 0.224 0 0 0-0.03 0.313l0.563 0.69a0.224 0.224 0 0 0 0.314 0.03l0.408-0.333v5.502c0 0.245 0.2 0.445 0.445 0.445h4.667c0.122 0 0.222-0.1 0.222-0.222v-3.556h1.778v3.556c0 0.122 0.1 0.222 0.222 0.222h4.666c0.245 0 0.445-0.2 0.445-0.445v-5.505l0.408 0.333a0.224 0.224 0 0 0 0.314-0.03l0.564-0.69a0.227 0.227 0 0 0-0.036-0.31l-6.771-5.545zm4.184 10.858h-2.667v-3.555c0-0.122-0.1-0.222-0.222-0.222h-4c-0.122 0-0.222 0.1-0.222 0.222v3.555h-2.667v-5.708l4.747-3.889c0.08-0.066 0.2-0.066 0.28 0l4.748 3.89v5.707z"/>
)

export default ({ size, ...p }: { size: number }) => (
  <svg viewBox="0 0 15.111 12.444" height={size} width={size} {...p}>
    {path}
  </svg>
)
