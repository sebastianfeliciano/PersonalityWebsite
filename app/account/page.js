'use client'

import React, { useEffect, useState } from 'react';
import supabase from '../api/api';
import { useRouter } from 'next/navigation';

const Page = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [hobbies, setHobbies] = useState([]);
    const [aboutMe, setAboutMe] = useState('');
    const router = useRouter();

    const signOff = async () => {
        const { data, error } = await supabase.auth.getUser();
        if (data.user !== null) {
            await supabase.auth.signOut();
            router.push('/');
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.auth.getUser();
            if (data.user) {
                setEmail(data.user.email);
                // Fetch additional user details from your database
                const userProfile = await supabase
                    .from('profiles')
                    .select('username, about_me, hobbies')
                    .eq('id', data.user.id)
                    .single();
                setUsername(userProfile.data.username);
                setAboutMe(userProfile.data.about_me);
                setHobbies(userProfile.data.hobbies);
            }
        };
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Update user profile in your database
        const updates = {
            id: (await supabase.auth.getUser()).data.user.id,
            username,
            about_me: aboutMe,
            hobbies,
        };

        const { data, error } = await supabase.from('profiles').upsert(updates);
        if (error) {
            console.error('Error updating profile:', error);
        } else {
            console.log('Profile updated:', data);
        }
    };

    return (
        <div>
            <h1>Account Settings</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled
                    />
                </div>
                <div>
                    <label>About Me:</label>
                    <textarea
                        value={aboutMe}
                        onChange={(e) => setAboutMe(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Hobbies:</label>
                    <input
                        type="text"
                        value={hobbies}
                        onChange={(e) => setHobbies(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Update Account</button>
            </form>
            <button onClick={signOff}>Sign Off</button>
        </div>
    );
};

export default Page;
