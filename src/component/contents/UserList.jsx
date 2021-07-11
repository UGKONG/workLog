import React from 'react';
import Styled from 'styled-components';

const UserList = () => {
    return (
        <>
            <Title>User List</Title>
        </>
    )
}

export default UserList;
const Title = Styled.h2`
    font-size: 16px;
    font-weight: 500;
    font-family: 'Baloo Tammudu 2', cursive;
    border-bottom: 1px solid #eee;
    white-space: nowrap;
`;