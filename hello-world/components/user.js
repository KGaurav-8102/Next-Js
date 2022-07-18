function User({ user }) {
    return (
        <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    );
}

export default User;