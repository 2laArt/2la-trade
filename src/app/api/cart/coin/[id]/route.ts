import { appHeaders } from '@/shared/api'
import {
  HTTP_STATUS,
  HTTP_STATUS_CODE,
  PRISMA_STATUS_CODE,
} from '@/shared/config'
import { NextRequest, NextResponse } from 'next/server'

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { count }: any = await request.json()

    if (!count || isNaN(+count) || !Number(count)) {
      let error_response = {
        status: HTTP_STATUS.ERROR,
        message: 'Invalid params',
      }
      return new NextResponse(JSON.stringify(error_response), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
        headers: appHeaders,
      })
    }

    const feedbacks = await prisma.userCoin.update({
      where: { id: params.id },
      data: { quantity: +count },
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
    if (error.code === PRISMA_STATUS_CODE.CONSTRAINT) {
      let error_response = {
        status: HTTP_STATUS.ERROR,
        message: 'Unique constraint failed',
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!params.id) {
    let error_response = {
      status: HTTP_STATUS.ERROR,
      message: 'param coinId is required',
    }
    return new NextResponse(JSON.stringify(error_response), {
      status: HTTP_STATUS_CODE.BAD_REQUEST,
      headers: appHeaders,
    })
  }
  try {
    const feedbacks = await prisma.userCoin.delete({
      where: { id: params.id },
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
    if (error.code === PRISMA_STATUS_CODE.CONSTRAINT) {
      let error_response = {
        status: HTTP_STATUS.ERROR,
        message: 'Unique constraint failed',
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
