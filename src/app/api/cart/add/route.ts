import { type IAddCreatedCoin } from '@/entities/cart/model'
import { appHeaders } from '@/shared/api'
import {
  HTTP_STATUS,
  HTTP_STATUS_CODE,
  PRISMA_STATUS_CODE,
} from '@/shared/config'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { coinId, userCartId }: IAddCreatedCoin = await request.json()

    const feedback = await prisma.userCoin.create({
      data: { userCartId, coinId, quantity: 1 },
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
        message: 'this coin already exists',
      }
      return new NextResponse(JSON.stringify(error_response), {
        status: HTTP_STATUS_CODE.CONFLICT,
        headers: appHeaders,
      })
    }

    let error_response = {
      status: HTTP_STATUS.ERROR,
      message: error,
    }
    return new NextResponse(JSON.stringify(error_response), {
      status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
      headers: appHeaders,
    })
  }
}
