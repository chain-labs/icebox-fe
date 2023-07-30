import { Meta, StoryObj } from '@storybook/react'
import Table from '.'

const meta: Meta = {
    title: 'Collections/Table',
    component: Table,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
}

export default meta

export const DefaultTable: StoryObj = {
    args: {},
}
