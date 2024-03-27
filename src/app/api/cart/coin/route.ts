import { appHeaders } from '@/shared/api'
import {
  HTTP_STATUS,
  HTTP_STATUS_CODE,
  PRISMA_STATUS_CODE,
} from '@/shared/config'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get('userId')
  const slug = request.nextUrl.searchParams.get('slug')
  if (!userId || !slug) {
    let error_response = {
      status: HTTP_STATUS.ERROR,
      message: 'Invalid params',
    }
    return new NextResponse(JSON.stringify(error_response), {
      status: HTTP_STATUS_CODE.BAD_REQUEST,
      headers: appHeaders,
    })
  }
  try {
    const feedbacks = await prisma.userCoin.findFirst({
      where: {
        userId,
        coin: {
          slug,
        },
      },
    })

    const json_response = {
      status: HTTP_STATUS.SUCCESS,
      data: feedbacks,
    }
    return new NextResponse(JSON.stringify(json_response), {
      status: HTTP_STATUS_CODE.OK,
      headers: appHeaders,
    })
  } catch (error: any) {
    if (error.code === PRISMA_STATUS_CODE.NOT_FOUND) {
      let error_response = {
        status: HTTP_STATUS.ERROR,
        message: 'User coin is not found',
      }
      return new NextResponse(JSON.stringify(error_response), {
        status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
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
