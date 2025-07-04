import { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";

const MyProfile = () => {
    const [profile, setProfile] = useState({
        name: "Rahul Sharma",
        role: "Teacher",
        phone: "9876543210",
        email: "rahul.sharma@gmail.com",
        address: "New Delhi, India",
    });

    const [editMode, setEditMode] = useState(false);

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditMode(false);
        console.log("Updated Profile:", profile);
    };

    return (
        <div className="p-5 mt-10 mx-auto">
            <h1 className="text-2xl font-bold mb-4 dark:text-white">My Profile</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Left Profile Card */}
                <div className="dark:bg-slate-900/50 bg-slate-100 rounded-md p-4 col-span-1 flex flex-col items-center justify-center">
                    <img src="/profilePic.jpg" alt="" className="w-32 h-32 rounded-full object-cover mt-5" />
                    <h1 className="font-semibold text-xl text-slate-500 text-center my-4">{profile.name}</h1>
                    <h2 className="text-slate-400">{profile.role}</h2>
                </div>

                {/* Right Form */}
                <div className="md:col-span-2">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="name">Full Name</Label>
                            <TextInput
                                id="name"
                                name="name"
                                value={profile.name}
                                onChange={handleChange}
                                disabled={!editMode}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="role">Role</Label>
                            <TextInput
                                id="role"
                                name="role"
                                value={profile.role}
                                disabled
                            />
                        </div>

                        <div>
                            <Label htmlFor="phone">Phone</Label>
                            <TextInput
                                id="phone"
                                name="phone"
                                value={profile.phone}
                                onChange={handleChange}
                                disabled={!editMode}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="email">Email</Label>
                            <TextInput
                                id="email"
                                name="email"
                                value={profile.email}
                                onChange={handleChange}
                                disabled={!editMode}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="address">Address</Label>
                            <TextInput
                                id="address"
                                name="address"
                                value={profile.address}
                                onChange={handleChange}
                                disabled={!editMode}
                                required
                            />
                        </div>

                        {editMode ? (
                            <div className="flex gap-2">
                                <Button type="submit">Save</Button>
                                <Button color="gray" onClick={() => setEditMode(false)}>Cancel</Button>
                            </div>
                        ) : (
                            <Button onClick={() => setEditMode(true)}>Edit Profile</Button>
                        )}
                    </form>
                </div>

            </div>
        </div>
    );
};

export default MyProfile;
