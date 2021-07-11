const ProfilePhoto = () => {
    return (
        <div className="profile-image">
            <img src={ require(`../../assets/images/profile-min.jpg`).default }
                alt="Andrew Ogilvie wearing sunglasses and smiling in front of the Montreal Biosphere" />
        </div>
    )
}

export default ProfilePhoto