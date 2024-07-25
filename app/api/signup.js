import { User } from '../../api/db';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { firstName, lastName, email, password, gender, TOS, age } = req.body;
        try {
            const newUser = await User.create({
                firstName,
                lastName,
                email,
                password,
                gender,
                TOS,
                age
            });
            res.status(201).json({ user: newUser });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
