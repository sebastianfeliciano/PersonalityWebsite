// app/api/signup/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, password, gender, TOS, age } = body;
        console.log('Received data:', body);

        // Mock user creation
        const newUser = {
            id: Date.now(),
            firstName,
            lastName,
            email,
            password,
            gender,
            TOS,
            age
        };

        return NextResponse.json({ user: newUser }, { status: 201 });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
