import { NodeInterface } from '../../DataTypes/Node';
import NodeEvent from '../../DataTypes/NodeEvent';
import NodeSession from '../../DataTypes/NodeSession';

/**
 * Create Data Model
 *
 * @param incoming: NodeInterface
 */
export const NodeDataFactory = (incoming: NodeInterface) => {
    console.debug('NodeDataFactory', incoming);
    switch (incoming.type) {
        case 'node--event':
            return new NodeEvent(incoming);
        case 'node--session':
            return new NodeSession(incoming);
        default:
            console.error('Cannot determine Data Class', incoming);
            throw new Error('Cannot Determine Data Class for '.concat(incoming.type));
    }
};

export default NodeDataFactory;
