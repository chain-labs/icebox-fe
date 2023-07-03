import { Meta, StoryObj } from '@storybook/react'
import TableHeader from '.'

const meta: Meta = {
    title: 'Collections/Table/HeaderItem',
    component: TableHeader,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
}

export default meta

export const SortedHeader: StoryObj = {
    args: {
        title: 'Collection Name',
        sort: true,
        width: '50%',
    },
}

export const InfoHeader: StoryObj = {
    args: {
        title: 'Buy On',
        info: true,
        width: '50%',
    },
}
