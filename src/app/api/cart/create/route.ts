import { appHeaders } from '@/shared/api'
import {
  HTTP_STATUS,
  HTTP_STATUS_CODE,
  PRISMA_STATUS_CODE,
} from '@/shared/config'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get('userId')
  if (!userId) {
    let error_response = {
      status: HTTP_STATUS.ERROR,
      message: 'param userId is required',
    }
    return new NextResponse(JSON.stringify(error_response), {
      status: HTTP_STATUS_CODE.BAD_REQUEST,
      headers: appHeaders,
    })
  }
  try {
    const feedbacks = await prisma.userCart.create({
      data: {
        userId,
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
    if (error.code === PRISMA_STATUS_CODE.INVALID_FIELDS) {
      let error_response = {
        status: HTTP_STATUS.ERROR,
        message: error,
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
