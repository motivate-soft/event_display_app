import NodeEventDisplay from './NodeEventDisplay';
import { NodeDisplaySession } from './NodeDisplaySession';
import { NodeInterface } from './../../DataTypes/Node';

/**
 * Create View Component
 *
 * @param incoming: NodeInterface
 */
export const NodeComponentFactory = (incoming: NodeInterface) => {
    console.debug('NodeComponentFactory', incoming);
    switch (incoming.type) {
        case 'node--event':
            return NodeEventDisplay;
        case 'node--session':
            return NodeDisplaySession;
        default:
            console.error('Cannot determine Component', incoming);
            throw new Error('Cannot Determine Component for '.concat(incoming.type));
    }
};

export default NodeComponentFactory;
