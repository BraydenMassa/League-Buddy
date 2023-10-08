import schema from './schema'
import bcrypt from 'bcrypt'
import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/prisma/client'

export async function POST(req: NextRequest) {
	const body = await req.json()
	const validation = schema.safeParse(body)
	if (!validation.success) {
		return NextResponse.json(validation.error.errors, { status: 400 })
	}
	const user = await prisma.user.findUnique({
		where: { username: body.username }
	})
	if (user) {
		return NextResponse.json({ error: 'User already exists' }, { status: 400 })
	}
	const hashedPassword = await bcrypt.hash(
		body.password,
		await bcrypt.genSalt()
	)
	const newUser = await prisma.user.create({
		data: {
			username: body.username,
			email: body.email,
			hashedPassword
		}
	})
	return NextResponse.json(
		{
			username: newUser.username,
			email: newUser.email
		},
		{ status: 201 }
	)
}
