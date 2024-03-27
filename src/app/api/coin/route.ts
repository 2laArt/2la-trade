import { type ICreationCoin } from '@/entities/cart/model'
import { appHeaders } from '@/shared/api'
import {
  HTTP_STATUS,
  HTTP_STATUS_CODE,
  PRISMA_STATUS_CODE,
} from '@/shared/config'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const coin: ICreationCoin = await request.json()

    const feedback = await prisma.coin.create({
      data: coin,
    })

    const json_response = {
      status: HTTP_STATUS.SUCCESS,
      data: feedback,
    }
    return new NextResponse(JSON.stringify(json_response), {
      status: HTTP_STATUS_CODE.CREATED,
      headers: appHeaders,
    })
  } catch (error: any) {
    if (error.code === PRISMA_STATUS_CODE.CONSTRAINT) {
      let error_response = {
        status: HTTP_STATUS.ERROR,
        message: 'This coin already exists',
      }
      return new NextResponse(JSON.stringify(error_response), {
        status: HTTP_STATUS_CODE.CONFLICT,
        headers: appHeaders,
      })
    }

    let error_response = {
      status: HTTP_STATUS.ERROR,
      message: error.message,
    }
    return new NextResponse(JSON.stringify(error_response), {
      status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
      headers: appHeaders,
    })
  }
}
