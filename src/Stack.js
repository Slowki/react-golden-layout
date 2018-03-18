// @flow
import ContentItem, { type ContentItemProps } from './ContentItem';
import { markAsGLComponent } from './internal/GLComponentRegistry';

import React from 'react';
import type { ElementProps } from 'react';

/**
 * Create a new Stack
 */
export default function Stack(props : ContentItemProps) : * {
    return <ContentItem type="stack" {...props} />;
}

markAsGLComponent(Stack);
