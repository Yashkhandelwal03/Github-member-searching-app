import React from 'react';
import {Card,CardBody} from 'reactstrap';


const UserCard = ({user}) => {
    return (
        <Card classname='text-center mt-4 mb-5'>
            <img src={user.avatar_url} className='img-thumbnail'/>
            <CardBody>
                <div className='text-primary'>Name:{user.name}</div>
                <div className='text-primary'>No of Public Repositaries:{user.public_repos}</div>
                <div className='text-primary'>No of followers:{user.followers}</div>
                <div className='text-info'>Hireable:{user.hireable ? 'YES':'NO'}</div>
            </CardBody>
        </Card>
    )
}

export default UserCard
