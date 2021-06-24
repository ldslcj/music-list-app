import React from 'react'
import { Table } from 'semantic-ui-react'
import Music from './Music'

const Musics = ({ musics, remove }) => (
    <Table celled padded>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Song ID</Table.HeaderCell>
                <Table.HeaderCell>Song Title</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {
                musics.map ( music => (
                    <Music key={musics.id} {...music} remove={remove}/>
                
                ))
            }
        </Table.Body>
    </Table>
)

export default Musics