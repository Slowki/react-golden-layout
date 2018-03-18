// @flow
import ContentItem, { type ContentItemProps } from './ContentItem';
import { markAsGLComponent } from './internal/GLComponentRegistry';

import React from 'react';

/**
 * Create a new column
 */
export default function Column(props : ContentItemProps) : * {
    return <ContentItem type="column" {...props} />;
}

markAsGLComponent(Column);
