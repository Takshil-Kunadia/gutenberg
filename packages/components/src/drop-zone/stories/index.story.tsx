/**
 * External dependencies
 */
import type { Meta, StoryFn } from '@storybook/react';
/**
 * Internal dependencies
 */
import DropZone from '..';

const meta: Meta< typeof DropZone > = {
	component: DropZone,
	id: 'components-dropzone',
	title: 'Components/Selection & Input/File Upload/DropZone',
	parameters: {
		actions: { argTypesRegex: '^on.*' },
		controls: { expanded: true },
		docs: { canvas: { sourceState: 'shown' } },
	},
};
export default meta;

const Template: StoryFn< typeof DropZone > = ( props ) => {
	return (
		<div
			style={ {
				background: 'lightgray',
				padding: 32,
				position: 'relative',
			} }
		>
			Drop something here
			<DropZone { ...props } />
		</div>
	);
};

export const Default = Template.bind( {} );
