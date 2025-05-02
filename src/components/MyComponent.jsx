import { Flex, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

const MyComponent = ({ divOne }) => {
    console.log(divOne)
    return (
        <SimpleGrid columns={3}>
            <div style={{ width: divOne?.width, height: divOne?.height, backgroundColor: divOne?.backgroundColor }}>
                <h2>{divOne?.title}</h2>
                <b>{divOne?.price}</b>
            </div>
            <div></div>
            <div></div>
        </SimpleGrid>
    );
}

export default MyComponent;
