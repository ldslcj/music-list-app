import React from 'react'
import {Button, Table} from 'semantic-ui-react'

const Music =({id, artist, title, remove}) => (
    <Table.Row>
        <Table.Cell>{artist}</Table.Cell>
        <Table.Cell>{title}</Table.Cell>
        <Table.Cell>
            <Button color="blue" onClick={()=> remove(id)}>
                Delete
            </Button>
        </Table.Cell>
    </Table.Row>
)

export default Music