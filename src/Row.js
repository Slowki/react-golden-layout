// @flow
import ContentItem, { type ContentItemProps } from './ContentItem';
import { markAsGLComponent } from './internal/GLComponentRegistry';

import React from 'react';
import type { ElementProps } from 'react';

/**
 * Create a new Row
 */
export default function Row(props : ContentItemProps) : * {
    return <ContentItem type="row" {...props} />;
}

markAsGLComponent(Row);
