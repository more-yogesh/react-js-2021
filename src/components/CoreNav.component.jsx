const CoreNav = ({ navigation }) => {
    return (
        <ul>
            {
                navigation.map((value, index) => {
                    return <li>{value}</li>
                })
            }
        </ul>
    );
}

export default CoreNav;