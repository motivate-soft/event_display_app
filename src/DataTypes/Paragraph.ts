import Entity, { EntityInterface } from './Entity';

export interface ParagraphInterface extends EntityInterface {
    default_langcode: boolean;
    langcode: string;
    parent_field_name: string;
    parent_id: string;
    parent_type: string;
    status: boolean;
}

export default abstract class Paragraph extends Entity implements ParagraphInterface {
    default_langcode: boolean;

    langcode: string;

    parent_field_name: string;

    parent_id: string;

    parent_type: string;

    status: boolean;

    constructor(incoming: ParagraphInterface) {
        super(incoming);
        Object.assign(this, incoming);
    }

    hasData(): boolean {
        return this.status !== undefined;
    }
}
