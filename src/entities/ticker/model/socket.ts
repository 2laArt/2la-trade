/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { TICKER } from '../config'
import type { UpdateTickersType } from './types'

const WS_URL = 'wss://ws-feed.exchange.coinbase.com'
export const useTickersSocket = (tickersHandler: UpdateTickersType) => {
  const ws = React.useRef<WebSocket>()

  const onMessage = (e: MessageEvent<string>) => {
    const data = JSON.parse(e.data)

    if (data.type === TICKER.CHANNEL) {
      const key: string = data?.product_id.split('-')[0]
      tickersHandler(key, data)
    }
    if (data.type === 'error') {
      const key: string = data?.reason.split('-')[0]
      tickersHandler(key, data)
    }
  }

  // send
  const sendMessage = (message: Object) => {
    const msg = JSON.stringify(message)

    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(msg)
    }
    ws.current?.addEventListener(
      'open',
      () => {
        ws.current?.send(msg)
      },
      { once: true }
    )
  }
  // sub----unsub
  const subscribeMessage = (symbols: string[]) => {
    const tickers = getTickers(symbols)
    let msg = {
      type: 'subscribe',
      product_ids: tickers,
      channels: [TICKER.CHANNEL],
    }

    sendMessage(msg)
  }
  const unsubscribeMessage = (symbols: string[]) => {
    const tickers = getTickers(symbols)
    let msg = {
      type: 'unsubscribe',
      product_ids: tickers,
      channels: [TICKER.CHANNEL],
    }
    sendMessage(msg)
  }
  const getTickers = (symbols: string[], currency: string = TICKER.CURRENCY) =>
    symbols.map((symbol) => `${symbol}-${currency}`)

  const closeSocket = () => {
    if (ws.current?.readyState === WebSocket.OPEN) {
      console.log('webSocket closed')

      ws.current?.close()
    }
  }
  React.useEffect(() => {
    if (!ws.current) {
      ws.current = new WebSocket(WS_URL)
      return
    }

    ws.current.addEventListener('message', onMessage)

    return () => {
      ws.current?.removeEventListener('message', onMessage)
      closeSocket()
    }
  }, [])

  const subscribeToUpdate = React.useCallback((tickers: string[]) => {
    subscribeMessage(tickers)
  }, [])
  const unsubscribeToUpdate = React.useCallback((symbols: string[]) => {
    unsubscribeMessage(symbols)
  }, [])
  return { subscribeToUpdate, unsubscribeToUpdate }
}
